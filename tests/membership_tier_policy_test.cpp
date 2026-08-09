#include "membership_tier_policy.hpp"

#include <cassert>

int main()
{
    using opennow::membership::DisplayLabel;
    using opennow::membership::AccentForTier;
    using opennow::membership::IsVerifiedFreeTier;
    using opennow::membership::NormalizeTier;
    using opennow::membership::TierAccent;

    assert(NormalizeTier("performance") == "PERFORMANCE");
    assert(NormalizeTier("Ultimate") == "ULTIMATE");
    assert(IsVerifiedFreeTier("FREE", true));
    assert(IsVerifiedFreeTier("free", true));
    assert(!IsVerifiedFreeTier("FREE", false));
    assert(!IsVerifiedFreeTier("PERFORMANCE", true));
    assert(!IsVerifiedFreeTier("ULTIMATE", true));
    assert(DisplayLabel("PERFORMANCE", true) == "PERFORMANCE");
    assert(DisplayLabel("FREE", false) == "Unknown");
    assert(DisplayLabel("", false) == "Unknown");
    assert(AccentForTier("ULTIMATE") == TierAccent::Ultimate);
    assert(AccentForTier("performance") == TierAccent::Performance);
    assert(AccentForTier("Priority") == TierAccent::Performance);
    assert(AccentForTier("FREE") == TierAccent::Neutral);
    return 0;
}
