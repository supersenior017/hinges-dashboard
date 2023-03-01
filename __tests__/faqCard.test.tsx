import React from "react";
import { shallow } from "enzyme";
import FaqCard from "../components/faqCard";
// import { renderHook, act } from '@testing-library/react-hooks';

describe("FaqCard Testing", () => {
    it("Test Image SRC", () => {
        const myInitialState = false
        React.useState = jest.fn().mockReturnValue([myInitialState, {}])

        const wrapper = shallow(<FaqCard index={0} />)
        expect(wrapper.find("img").prop('src')).toBe('/images/arrow-down.png');

    });
});