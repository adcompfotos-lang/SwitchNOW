#include "ad_break_policy.hpp"

#include <cassert>
#include <iostream>

int main()
{
    using namespace opennow;

    AdBreakInfo value;
    assert(ad_break::Classify(value) == ad_break::PresentationState::None);

    value.required = true;
    assert(ad_break::Classify(value) == ad_break::PresentationState::AwaitingMetadata);

    SessionAdInfo ad;
    ad.duration_seconds = 30;
    ad.media_files.push_back({"https://example.test/ad.m3u8", "hlsadaptive"});
    ad.media_files.push_back({"https://example.test/ad.webm", "webm"});
    ad.media_files.push_back({"https://example.test/ad.mp4", "mp4deinterlaced720p"});
    value.ads.push_back(ad);

    assert(ad_break::Classify(value) == ad_break::PresentationState::MediaReady);
    assert(ad_break::TotalDurationSeconds(value) == 30);
    const auto* preferred = ad_break::SelectPreferredMedia(value);
    assert(preferred != nullptr);
    assert(preferred->encoding_profile == "mp4deinterlaced720p");

    const auto* per_ad_preferred = ad_break::SelectPreferredMedia(ad);
    assert(per_ad_preferred != nullptr);
    assert(per_ad_preferred->encoding_profile == "mp4deinterlaced720p");

    AdBreakInfo no_ad_session;
    no_ad_session.ads.push_back(ad);
    assert(ad_break::Classify(no_ad_session) == ad_break::PresentationState::None);

    SessionAdInfo hls_only;
    hls_only.media_files.push_back({"https://example.test/ad.m3u8", "hlsadaptive"});
    assert(ad_break::SelectPreferredMedia(hls_only) != nullptr);
    assert(ad_break::SelectPreferredMedia(hls_only)->encoding_profile == "hlsadaptive");

    SessionAdInfo no_media;
    assert(ad_break::SelectPreferredMedia(no_media) == nullptr);
    assert(ad_break::IsWaitingAdsTimeout(79, ""));
    assert(ad_break::IsWaitingAdsTimeout(0, "SESSION_WAITING_ADS_TIME_EXPIRED 4A8C3011"));
    assert(!ad_break::IsWaitingAdsTimeout(18, "UNRELATED"));

    std::cout << "ad break policy tests passed\n";
    return 0;
}
