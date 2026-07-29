#pragma once

#include <algorithm>
#include <cctype>
#include <limits>
#include <string>
#include <type_traits>
#include <utility>
#include <vector>

namespace opennow::server_location
{

struct LatencyEstimate
{
    int median_ms = -1;
    int jitter_ms = -1;
    int selection_score_ms = -1;
    int successful_probes = 0;
};

inline LatencyEstimate EstimateLatency(
    std::vector<int> samples,
    int attempted_probes)
{
    samples.erase(
        std::remove_if(samples.begin(), samples.end(), [](int value) {
            return value < 0;
        }),
        samples.end());
    if (samples.empty())
        return {};

    std::sort(samples.begin(), samples.end());
    const size_t count = samples.size();
    const int median = count % 2 == 0
        ? (samples[count / 2 - 1] + samples[count / 2] + 1) / 2
        : samples[count / 2];

    // Use the inner spread when enough probes succeeded so a single scheduler
    // spike cannot incorrectly disqualify an otherwise nearby region.
    const size_t low_index = count >= 4 ? (count - 1) / 4 : 0;
    const size_t high_index = count >= 4 ? (3 * (count - 1)) / 4 : count - 1;
    const int jitter = samples[high_index] - samples[low_index];
    const int failed = std::max(0, attempted_probes - static_cast<int>(count));
    const int sparse_sample_penalty = count == 1 ? 100 : 0;
    const int stability_penalty = std::min(75, (jitter + 1) / 2);

    return {
        median,
        jitter,
        median + stability_penalty + failed * 20 + sparse_sample_penalty,
        static_cast<int>(count),
    };
}

template <typename Region, typename = void>
struct HasSelectionScore : std::false_type
{
};

template <typename Region>
struct HasSelectionScore<
    Region,
    std::void_t<decltype(std::declval<const Region&>().selection_score_ms)>>
    : std::true_type
{
};

template <typename Region>
int RegionSelectionScore(const Region& region)
{
    if constexpr (HasSelectionScore<Region>::value)
    {
        if (region.selection_score_ms >= 0)
            return region.selection_score_ms;
    }
    return region.ping_ms;
}

inline bool IsAutomatic(const std::string& value)
{
    return value.empty() || value == "Auto";
}

inline bool IsValidStreamingBaseUrl(const std::string& value)
{
    static constexpr const char* kHttpsPrefix = "https://";
    if (value.rfind(kHttpsPrefix, 0) != 0 || value.size() <= 8)
        return false;

    const size_t authority_end = value.find('/', 8);
    const std::string authority = value.substr(8, authority_end - 8);
    if (authority.empty() || authority.find('@') != std::string::npos)
        return false;

    return std::none_of(value.begin(), value.end(), [](unsigned char ch) {
        return std::isspace(ch) || ch < 0x20 || ch == 0x7f;
    });
}

inline std::string NormalizeStreamingBaseUrl(std::string value)
{
    if (!IsValidStreamingBaseUrl(value))
        return {};
    if (value.back() != '/')
        value.push_back('/');
    return value;
}

template <typename RegionRange>
std::string SelectBestMeasuredRegionUrl(const RegionRange& regions)
{
    int best_score_ms = std::numeric_limits<int>::max();
    std::string best_url;
    for (const auto& region : regions)
    {
        const int score_ms = RegionSelectionScore(region);
        if (region.ping_ms < 0 || score_ms < 0 || score_ms >= best_score_ms)
            continue;

        const std::string normalized = NormalizeStreamingBaseUrl(region.url);
        if (normalized.empty())
            continue;

        best_score_ms = score_ms;
        best_url = normalized;
    }
    return best_url;
}

inline std::string ResolveStreamingBaseUrl(
    const std::string& selected_region,
    const std::string& provider_url,
    const std::string& automatic_region_url = {})
{
    if (!IsAutomatic(selected_region))
    {
        const std::string selected = NormalizeStreamingBaseUrl(selected_region);
        if (!selected.empty())
            return selected;
    }
    else
    {
        const std::string automatic =
            NormalizeStreamingBaseUrl(automatic_region_url);
        if (!automatic.empty())
            return automatic;
    }

    return NormalizeStreamingBaseUrl(provider_url);
}

} // namespace opennow::server_location
