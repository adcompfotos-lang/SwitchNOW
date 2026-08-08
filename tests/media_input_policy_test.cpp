#include "media_input_policy.hpp"

#include <cassert>

int main()
{
    using namespace opennow::media_input;

    assert(HasScheme("https://example.test/ad.mp4"));
    assert(HasScheme("sdmc:/switch/SwitchNOW/queue_ad_media"));
    assert(!HasScheme("queue_ad_media"));

    assert(FfmpegLocalFileUrl("sdmc:/switch/SwitchNOW/queue_ad_media") ==
           "file:sdmc:/switch/SwitchNOW/queue_ad_media");
    assert(FfmpegLocalFileUrl("file:sdmc:/switch/SwitchNOW/ad.mp4") ==
           "file:sdmc:/switch/SwitchNOW/ad.mp4");
    return 0;
}
