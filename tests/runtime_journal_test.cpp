#include "runtime_journal.hpp"

#include <cassert>
#include <cstdio>
#include <fstream>
#include <iterator>
#include <string>

namespace opennow
{

const std::string& AppHomePath()
{
    static const std::string path = ".";
    return path;
}

void PrepareAppStorage()
{
}

} // namespace opennow

int main()
{
    using opennow::SanitizeRuntimeUrl;

    assert(
        SanitizeRuntimeUrl(
            "https://user:password@example.com/path?token=secret#fragment") ==
        "https://example.com/path");
    assert(
        SanitizeRuntimeUrl(
            "https://pcs.geforcenow.com/v1/serviceUrls?jwt=secret") ==
        "https://pcs.geforcenow.com/v1/serviceUrls");
    assert(
        SanitizeRuntimeUrl("https://static.nvidiagrid.net/catalog.json") ==
        "https://static.nvidiagrid.net/catalog.json");

    std::remove("./runtime.log");
    std::remove("./runtime.log.previous");
    opennow::InitializeRuntimeJournal("1.0.3-test");
    opennow::LogRuntimeEvent(
        "diagnostics", "mode", "extended=disabled runtime=always_on");
    opennow::ShutdownRuntimeJournal();

    std::ifstream stream("./runtime.log");
    const std::string contents {
        std::istreambuf_iterator<char>(stream),
        std::istreambuf_iterator<char>()};
    assert(contents.find("category=app event=start version=1.0.3-test") !=
           std::string::npos);
    assert(contents.find(
               "category=diagnostics event=mode "
               "detail=extended=disabled runtime=always_on") !=
           std::string::npos);
    assert(contents.find("category=app event=clean_shutdown") !=
           std::string::npos);
    std::remove("./runtime.log");
    std::remove("./runtime.log.previous");
    return 0;
}
