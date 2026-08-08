#pragma once

#include "models.hpp"

#include <algorithm>
#include <string>

namespace opennow::ad_report
{

inline SessionAdReport Started(const std::string& ad_id)
{
    SessionAdReport report;
    report.ad_id = ad_id;
    report.action = SessionAdAction::Start;
    report.paused_time_ms = 0;
    return report;
}

inline SessionAdReport Finished(
    const std::string& ad_id, int watched_time_ms,
    int expected_duration_ms = 0)
{
    SessionAdReport report;
    report.ad_id = ad_id;
    report.action = SessionAdAction::Finish;
    // Container timestamps can end a few milliseconds before the declared ad
    // duration. Once playback reaches EOF successfully, report the advertised
    // duration just like an HTML media element's ended event does.
    report.watched_time_ms = std::max(
        {0, watched_time_ms, expected_duration_ms});
    report.paused_time_ms = 0;
    return report;
}

inline SessionAdReport Cancelled(
    const std::string& ad_id, int watched_time_ms, std::string reason)
{
    SessionAdReport report;
    report.ad_id = ad_id;
    report.action = SessionAdAction::Cancel;
    report.watched_time_ms = std::max(0, watched_time_ms);
    report.paused_time_ms = 0;
    report.cancel_reason = std::move(reason);
    return report;
}

} // namespace opennow::ad_report
