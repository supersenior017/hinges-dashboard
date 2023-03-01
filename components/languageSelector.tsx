import React, { useEffect, useState, useRef } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

const lang = [
  {
    name: "English",
    sh_name: "En",
    code: "en",
  },
  {
    name: "Pусский",
    sh_name: "Ru",
    code: "ru",
  },
  {
    name: "汉语",
    sh_name: "Zh",
    code: "zh",
  },
  {
    name: "Türkçe",
    sh_name: "Tr",
    code: "tr",
  },
  {
    name: "Français",
    sh_name: "Fr",
    code: "fr",
  },
  {
    name: "Español",
    sh_name: "Es",
    code: "es",
  },
  {
    name: "Português",
    sh_name: "Pt",
    code: "pt",
  },
  {
    name: "한국어",
    sh_name: "Ko",
    code: "ko",
  },
  {
    name: "عربى",
    sh_name: "Ar",
    code: "ar",
  },
  {
    name: "Deutsch",
    sh_name: "De",
    code: "de",
  },
  {
    name: "日本語",
    sh_name: "Ja",
    code: "ja",
  },
];

export default function LanguageSelector() {
  const { locale, locales } = useRouter();
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef(null);

  // useEffect(() => {
  //   if (selected) {
  //     router.push("/", "/", { locale: selected });
  //   }
  // }, [selected]);

  useEffect(() => {
    setSelected(locale);
  }, [locale]);

  const getLang = (item: any) => {
    for (let i = 0; i < lang.length; i++) {
      if (lang[i].code === item) return lang[i].sh_name;
    }
  };

  const getFullName = (item: any) => {
    for (let i = 0; i < lang.length; i++) {
      if (lang[i].code === item) return lang[i].name;
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <>
      <div className="absolute top-14 xs:top-14 sm:top-14">
        <button
          className="w-[50px] h-[20px] rounded relative nav-language shadow-sm  text-left cursor-default focus:outline-none focus:ring-1  sm:text-sm"
          onClick={() => setShow(true)}
        >
          <span className="flex items-center">
            <span className="pl-2 mr-5 block truncate ">
              {getLang(selected)}
            </span>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <i className="fa fa-arrow-down"></i>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
            </svg>
            {/* <SelectorIcon className="h-5 w-5" aria-hidden="true" /> */}
          </span>
        </button>
        {show && (
          <div
            ref={wrapperRef}
            className=" absolute z-10 right-1 mt-1 w-40 bg-[#51dae0] rounded-md py-1 text-black ring-2 ring-[#001a57] ring-opacity-100 sm:text-sm"
          >
            <div className="grid grid-cols-1">
              {lang.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelected(item.code);
                    router.push("/", "/", { locale: item.code });
                  }}
                >
                  <div className="flex flex-row items-center cursor-pointer">
                    <span className="mx-8 my-2 block truncate text-xl">
                      {item.name}
                    </span>
                    {item.code === selected ? (
                      <span className="">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
