import React from "react";
import { Router, useRouter } from "next/router";
import { shallow } from "enzyme";
import LanguageSelector from "../components/languageSelector";
// import { renderHook, act } from '@testing-library/react-hooks';

jest.mock('next/router', () => ({
    useRouter() {
        return ({
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn()
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null)
        });
    },
}));

describe("LanguageSelector Testing", () => {
    it("Test Image SRC", () => {
        const myInitialState = false
        React.useState = jest.fn().mockReturnValue([myInitialState, {}])
        useRouter
        const wrapper = shallow(<LanguageSelector />)

        // expect(wrapper.find("Listbox").prop("value")).toBe(true);
    });
});