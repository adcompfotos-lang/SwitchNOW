#include "stream/DecodeQueuePolicy.hpp"

#include <cassert>

static_assert(opennow::video::MaximumQueuedAccessUnits(30) == 3);
static_assert(opennow::video::MaximumQueuedAccessUnits(60) == 5);
static_assert(opennow::video::MaximumQueuedAccessUnits(120) == 6);
static_assert(opennow::video::ReadyFrameQueueCapacity() == 3);
static_assert(opennow::video::StartupReadyFrameDepth() == 2);
static_assert(opennow::video::FrameWaitBudgetMicroseconds(60) == 6500);

int main()
{
    assert(opennow::video::MaximumQueuedAccessUnits(1) == 2);
    assert(opennow::video::MaximumQueuedAccessUnits(60) < 8);
    assert(opennow::video::FrameWaitBudgetMicroseconds(30) == 6500);
    assert(opennow::video::FrameWaitBudgetMicroseconds(120) == 3333);
    return 0;
}
