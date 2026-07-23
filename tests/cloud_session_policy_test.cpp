#include "cloud_session_policy.hpp"
#include "device_identity.hpp"

#include <cassert>

int main()
{
    using namespace opennow::cloud_session;

    static_assert(IsActiveStatus(1));
    static_assert(IsActiveStatus(2));
    static_assert(IsActiveStatus(3));
    static_assert(!IsActiveStatus(0));
    static_assert(!IsActiveStatus(4));
    static_assert(IsDeviceLimitError(50, ""));
    static_assert(IsDeviceLimitError(0, "SESSION_LIMIT_PER_DEVICE_EXCEEDED_STATUS"));

    assert(ShouldCleanup(1, "local", "", "device-a", "local"));
    assert(ShouldCleanup(3, "remote", "device-a", "device-a", ""));
    assert(!ShouldCleanup(3, "remote", "device-b", "device-a", ""));
    assert(!ShouldCleanup(4, "remote", "device-a", "device-a", ""));

    const std::string normalized = opennow::NormalizeCloudDeviceId(
        "00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff");
    assert(normalized == "00112233-4455-4677-8899-aabbccddeeff");
    assert(opennow::NormalizeCloudDeviceId("not-a-device-id").empty());
    return 0;
}
