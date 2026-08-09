#include "ad_report_policy.hpp"

#include <cassert>

int main()
{
    using namespace opennow;

    const auto started = ad_report::Started("first");
    assert(started.action == SessionAdAction::Start);
    assert(started.watched_time_ms == -1);
    assert(started.paused_time_ms == 0);

    const auto finished = ad_report::Finished("second", 29977, 30000);
    assert(finished.action == SessionAdAction::Finish);
    assert(finished.watched_time_ms == 29977);
    assert(finished.paused_time_ms == 0);

    const auto overrun = ad_report::Finished("second", 30042, 30000);
    assert(overrun.watched_time_ms == 30000);

    assert(ad_report::IsRecoverableTransitionError(
        "ReportSessionAd failed: statusCode=5, INVALID_REQUEST_STATUS"));
    assert(!ad_report::IsRecoverableTransitionError(
        "ReportSessionAd failed: HTTP 401"));

    const auto cancelled = ad_report::Cancelled("third", -1, "playback_error");
    assert(cancelled.action == SessionAdAction::Cancel);
    assert(cancelled.watched_time_ms == 0);
    assert(cancelled.paused_time_ms == 0);
    assert(cancelled.cancel_reason == "playback_error");
    return 0;
}
