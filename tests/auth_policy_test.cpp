#include "auth_policy.hpp"

#include <cassert>

static_assert(opennow::auth::ShouldRefresh(0, 1000, 600000));
static_assert(opennow::auth::ShouldRefresh(500000, 1000, 600000));
static_assert(!opennow::auth::ShouldRefresh(700000, 1000, 600000));
static_assert(opennow::auth::IsExpired(1000, 1000));
static_assert(!opennow::auth::IsExpired(1001, 1000));
static_assert(opennow::auth::IsTemporaryHttpStatus(0));
static_assert(opennow::auth::IsTemporaryHttpStatus(408));
static_assert(opennow::auth::IsTemporaryHttpStatus(429));
static_assert(opennow::auth::IsTemporaryHttpStatus(503));
static_assert(!opennow::auth::IsTemporaryHttpStatus(401));
static_assert(opennow::auth::RefreshRetryDelayMs(1) == 500);
static_assert(opennow::auth::RefreshRetryDelayMs(2) == 1500);
static_assert(
    opennow::auth::SelectRefreshMechanism(true, true, false) ==
    opennow::auth::RefreshMechanism::ClientToken);
static_assert(
    opennow::auth::SelectRefreshMechanism(false, true, true) ==
    opennow::auth::RefreshMechanism::OAuthRefreshToken);
static_assert(
    opennow::auth::SelectRefreshMechanism(true, false, true) ==
    opennow::auth::RefreshMechanism::OAuthRefreshToken);
static_assert(
    opennow::auth::SelectRefreshMechanism(false, false, false) ==
    opennow::auth::RefreshMechanism::None);

int main()
{
    using namespace opennow::auth;
    assert(ShouldRefresh(61000, 1000, 60001));
    assert(!ShouldRefresh(61001, 1000, 60000));
    return 0;
}
