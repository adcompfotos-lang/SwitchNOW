#include "server_location_policy.hpp"

#include <cassert>
#include <string>
#include <vector>

namespace
{
struct RegionCandidate
{
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
        {"https://np-lon.example", 28},
        {"https://np-ams.example", 10},
        {"https://np-par.example", -1},
        {"http://unsafe.example", 2},
    };
    assert(
        SelectBestMeasuredRegionUrl(regions) ==
        "https://np-ams.example/");
    const std::vector<RegionCandidate> unavailable_regions = {
        {"https://np-par.example", -1},
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
        {"https://fast-but-unstable.example", 28, 80},
        {"https://stable.example", 38, 40},
    };
    assert(
        SelectBestMeasuredRegionUrl(scored_regions) ==
        "https://stable.example/");
    return 0;
}
