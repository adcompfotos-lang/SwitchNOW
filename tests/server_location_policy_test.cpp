#include "server_location_policy.hpp"

#include <cassert>
#include <string>
#include <vector>

namespace
{
struct RegionCandidate
{
    std::string name;
    std::string url;
    int ping_ms;
    int selection_score_ms = -1;
};
}

int main()
{
    using namespace opennow::server_location;

    assert(IsAutomatic(""));
    assert(IsAutomatic("Auto"));
    assert(!IsAutomatic("https://np-ams.example/"));

    assert(IsValidStreamingBaseUrl("https://np-ams.example/"));
    assert(IsValidStreamingBaseUrl("https://np-ams.example:443/path"));
    assert(!IsValidStreamingBaseUrl("http://np-ams.example/"));
    assert(!IsValidStreamingBaseUrl("https://user@np-ams.example/"));
    assert(!IsValidStreamingBaseUrl("https://np-ams.example/\nHeader: value"));

    assert(
        NormalizeStreamingBaseUrl("https://np-ams.example") ==
        "https://np-ams.example/");
    assert(NormalizeStreamingBaseUrl("not a URL").empty());

    assert(
        ResolveStreamingBaseUrl("Auto", "https://prod.example") ==
        "https://prod.example/");
    assert(
        ResolveStreamingBaseUrl(
            "Auto",
            "https://prod.example",
            "https://np-ams.example") ==
        "https://np-ams.example/");
    assert(
        ResolveStreamingBaseUrl(
            "https://np-lon.example", "https://prod.example/") ==
        "https://np-lon.example/");
    assert(
        ResolveStreamingBaseUrl(
            "http://unsafe.example", "https://prod.example/") ==
        "https://prod.example/");

    const std::vector<RegionCandidate> regions = {
        {"London", "https://np-lon.example", 28},
        {"Amsterdam", "https://np-ams.example", 10},
        {"Paris", "https://np-par.example", -1},
        {"Unsafe", "http://unsafe.example", 2},
    };
    assert(
        SelectBestMeasuredRegionUrl(regions) ==
        "https://np-ams.example/");
    const std::vector<RegionCandidate> unavailable_regions = {
        {"Paris", "https://np-par.example", -1},
    };
    assert(SelectBestMeasuredRegionUrl(unavailable_regions).empty());

    const auto stable = EstimateLatency({38, 39, 40, 41, 42}, 5);
    assert(stable.median_ms == 40);
    assert(stable.jitter_ms == 2);
    assert(stable.selection_score_ms == 41);
    assert(stable.successful_probes == 5);

    const auto incomplete = EstimateLatency({28, -1, 32, -1, 30}, 5);
    assert(incomplete.median_ms == 30);
    assert(incomplete.successful_probes == 3);
    assert(incomplete.selection_score_ms > stable.selection_score_ms);

    const std::vector<RegionCandidate> scored_regions = {
        {"Unstable", "https://fast-but-unstable.example", 28, 80},
        {"Stable", "https://stable.example", 38, 40},
    };
    assert(
        SelectBestMeasuredRegionUrl(scored_regions) ==
        "https://stable.example/");

    const std::vector<RegionCandidate> coarse_regions = {
        {"Bulgaria", "https://np-sof.example", 15},
        {"Frankfurt", "https://np-fra.example", 31},
        {"London", "https://np-lon.example", 72},
        {"Invalid", "http://invalid.example", 1},
        {"Offline", "https://offline.example", -1},
    };
    const std::vector<size_t> finalists =
        SelectLatencyFinalists(coarse_regions, 5, 35);
    assert(finalists.size() == 2);
    assert(finalists[0] == 0);
    assert(finalists[1] == 1);

    const std::vector<size_t> one_finalist =
        SelectLatencyFinalists(coarse_regions, 1, 100);
    assert(one_finalist.size() == 1);
    assert(one_finalist[0] == 0);
    return 0;
}
