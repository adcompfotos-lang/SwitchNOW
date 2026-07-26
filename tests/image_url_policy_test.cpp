#include "image_url_policy.hpp"

#include <cassert>
#include <iostream>
#include <string>

int main()
{
    using opennow::ResizeNvidiaImageUrl;

    const std::string base =
        "https://img.nvidiagrid.net/apps/123/hero.jpg";
    assert(ResizeNvidiaImageUrl(base, 1120) == base + ";w=1120");
    assert(
        ResizeNvidiaImageUrl(base + ";w=1280", 1120) ==
        base + ";w=1120");
    assert(
        ResizeNvidiaImageUrl(base + ";w=544;h=306", 420) ==
        base + ";w=420;h=306");
    assert(ResizeNvidiaImageUrl(base + ";w=544", 0) == base + ";w=544");

    const std::string external =
        "https://cdn.example.com/screenshot.jpg?w=1280";
    assert(ResizeNvidiaImageUrl(external, 1120) == external);

    std::cout << "image URL policy tests passed\n";
    return 0;
}
