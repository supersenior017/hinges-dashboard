import { shallow } from "enzyme";
import React from "react";

import Footer from "../components/footer";

it('Footer Testing', () => {
    const footer = shallow(<Footer />)

    //Component count test
    expect(footer.find(".footer-twitter").length).toBe(2);
    expect(footer.find(".footer-youtube").length).toBe(2);
    expect(footer.find(".footer-telegram").length).toBe(2);
    expect(footer.find(".footer-discord").length).toBe(2);
    expect(footer.find(".footer-reddit").length).toBe(2);

    //Link address Test2
    for (let i = 0; i < 2; i++) {
        expect(footer.find(".footer-twitter").at(i).prop('href')).toBe("https://twitter.com/hedgeplus_io");
        expect(footer.find(".footer-youtube").at(i).prop('href')).toBe("https://youtube.com");
        expect(footer.find(".footer-telegram").at(i).prop('href')).toBe("https://t.me/hedgeplus_io");
        expect(footer.find(".footer-discord").at(i).prop('href')).toBe("https://discord.gg/hkqAHKUVGK");
        expect(footer.find(".footer-reddit").at(i).prop('href')).toBe("https://reddit.com");
    }

    //Image Test
    expect(footer.find("img").find(".logo").first().prop('src')).toBe("/images/logo.png");
    expect(footer.find("img").find(".logo").last().prop('src')).toBe("/images/logo.png");
});