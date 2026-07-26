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
        assert(opennow::TrFormat("Position in queue:{0}", {"17"}).find("17") !=
               std::string::npos);
        assert(opennow::TrFormat("Loaded {0} supported games.", {"360"}).find("360") !=
               std::string::npos);
    }

    return 0;
}
