#include "../app/src/description_scroll_policy.hpp"

#include <cassert>

int main()
{
    using opennow::AdvanceDescriptionScroll;
    using opennow::DescriptionScrollDirection;

    const auto down = AdvanceDescriptionScroll(
        0.0f, 200.0f, DescriptionScrollDirection::Down, 48.0f);
    assert(down.offset == 48.0f);
    assert(!down.return_to_buttons);

    const auto bottom = AdvanceDescriptionScroll(
        190.0f, 200.0f, DescriptionScrollDirection::Down, 48.0f);
    assert(bottom.offset == 200.0f);
    assert(!bottom.return_to_buttons);

    const auto up_to_top = AdvanceDescriptionScroll(
        30.0f, 200.0f, DescriptionScrollDirection::Up, 48.0f);
    assert(up_to_top.offset == 0.0f);
    assert(!up_to_top.return_to_buttons);

    const auto leave = AdvanceDescriptionScroll(
        up_to_top.offset, 200.0f, DescriptionScrollDirection::Up, 48.0f);
    assert(leave.offset == 0.0f);
    assert(leave.return_to_buttons);

    const auto short_description = AdvanceDescriptionScroll(
        0.0f, 0.0f, DescriptionScrollDirection::Down, 48.0f);
    assert(short_description.offset == 0.0f);
    assert(!short_description.return_to_buttons);
}
