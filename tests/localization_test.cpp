#include "localization.hpp"

#include <cassert>
#include <set>
#include <string>
#include <vector>

int main()
{
    const auto& languages = opennow::InterfaceLanguageOptions();
    assert(languages.size() == 8);

    std::set<std::string> codes;
    for (const auto& language : languages)
    {
        assert(!language.code.empty());
        assert(!language.label.empty());
        assert(codes.insert(language.code).second);

        opennow::SetInterfaceLanguage(language.code);
        assert(opennow::GetInterfaceLanguage() == language.code);
        assert(!opennow::Tr("Settings").empty());
        assert(!opennow::Tr("Store").empty());
        assert(!opennow::Tr("Library").empty());
        assert(!opennow::Tr("Language").empty());
    }

    opennow::SetInterfaceLanguage("unsupported");
    assert(opennow::GetInterfaceLanguage() == "en");
    assert(opennow::Tr("Untranslated technical message") ==
           "Untranslated technical message");

    const std::vector<std::string> translated_languages = {
        "zh-CN", "es", "ru", "it", "fr", "pl", "uk",
    };
    for (const auto& language : translated_languages)
    {
        opennow::SetInterfaceLanguage(language);
        assert(opennow::Tr("About this game") != "About this game");
        assert(
            opennow::Tr("Up / Down  Scroll  |  B  Back") !=
            "Up / Down  Scroll  |  B  Back");
        assert(opennow::Tr("Manage your GeForce NOW identity and persistent sign-in.") !=
               "Manage your GeForce NOW identity and persistent sign-in.");
        assert(opennow::Tr("NTE Auto-login: Ready") != "NTE Auto-login: Ready");
        assert(opennow::Tr("library title") != "library title");
        assert(opennow::Tr("All") != "All");
        assert(opennow::Tr("Clear search") != "Clear search");
        assert(opennow::Tr("Search Library") != "Search Library");
        assert(opennow::Tr("Search Catalog") != "Search Catalog");
        assert(opennow::Tr("QUEUE") != "QUEUE");
        assert(opennow::Tr("SETUP") != "SETUP");
        assert(opennow::Tr("READY") != "READY");
        assert(opennow::Tr("Advertisement required") !=
               "Advertisement required");
        assert(opennow::Tr(
                   "Waiting for NVIDIA to provide the Free-tier advertisement details.") !=
               "Waiting for NVIDIA to provide the Free-tier advertisement details.");
        assert(opennow::Tr("Free-tier advertisement ready") !=
               "Free-tier advertisement ready");
        assert(opennow::Tr("Connecting to the streaming server") !=
               "Connecting to the streaming server");
        assert(opennow::Tr("Starting the video stream") !=
               "Starting the video stream");
        assert(opennow::TrFormat("Setting up rig... Position: {0}", {"12"}).find("12") !=
               std::string::npos);
        assert(opennow::Tr("Updates") != "Updates");
        assert(opennow::Tr("Check for updates") != "Check for updates");
        assert(opennow::Tr("SwitchNOW is up to date") != "SwitchNOW is up to date");
        assert(opennow::Tr("You already have the latest version ({0}).") !=
               "You already have the latest version ({0}).");
        assert(opennow::Tr("HOME shortcut created") != "HOME shortcut created");
        assert(opennow::TrFormat("Searching for: {0}", {"Fortnite"}).find("Fortnite") !=
               std::string::npos);
        assert(opennow::TrFormat("Position in queue:{0}", {"17"}).find("17") !=
               std::string::npos);
        assert(opennow::TrFormat("Loaded {0} supported games.", {"360"}).find("360") !=
               std::string::npos);
    }

    return 0;
}
