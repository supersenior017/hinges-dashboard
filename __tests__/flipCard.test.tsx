import React from "react";
import { shallow } from "enzyme";
import FlipCard from "../components/flipCard";
import content from "../trans/TransContent";
// import { renderHook, act } from '@testing-library/react-hooks';
const data = content.data.allFeatures[0];
const date = "2019/10/22";

describe("FlipCard Testing", () => {
    it("Value Match Testing when clickState is False", () => {
        const myInitialState = false

        React.useState = jest.fn()
            .mockReturnValue([myInitialState, {}])

        const wrapper = shallow(<FlipCard item={{...data}}  index="170c5a0e-0df8-4601-be98-0d369b08605c" clickState={false} id={0} handleClickFlipCard={true}/>)
        expect(wrapper.find(".heading").text().length).toBeGreaterThan(0)
        expect(wrapper.find(".description").text().length).toBeGreaterThan(0)
        expect(wrapper.find(".learn_more").find("span").text().length).toBeGreaterThan(0)
        expect(wrapper.find(".learn_more").find("img").prop("src")).toBe("/icons/plus.png")
    });

    it("Value Match Testing when clickState is True", () => {
        const myInitialState = true;

        React.useState = jest.fn()
            .mockReturnValue([myInitialState, {}])

        const wrapper = shallow(<FlipCard item={{...data}}  index="170c5a0e-0df8-4601-be98-0d369b08605c" clickState={true} id={0} handleClickFlipCard={true}/>)
        expect(wrapper.find(".heading_clicked").text().length).toBeGreaterThan(0)
        for(let i = 0; i < data.feature_learn_more_contentRaw.length; i ++) {
            expect(wrapper.find(".description").at(i).length).toBeGreaterThan(0)
        }

        expect(wrapper.find(".learn_more").find("img").prop("src")).toBe("/icons/minus.png")
    });
});