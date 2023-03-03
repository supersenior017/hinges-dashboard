import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import MenuButton from "./menu-button";
import { DiscordIcon, TelegramIcon } from "./svgIcon";

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

export default function MenuPanel({ handleMenu }) {
  const { t } = useTranslation("common");
  const { locale, locales } = useRouter();
  const [showLang, setShowLang] = useState(false);
  const [selected, setSelected] = useState(locale ? locale : "en");
  const router = useRouter();

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

  return (
    <>
      <div
        className="relative menu-bg flex px-2 py-6 z-10 w-full flex-col"
        style={{ position: "fixed", top: "0", height: "100vh" }}
      >
        <div className="w-full pr-[16px] mt-[-4px] flex justify-end">
          <MenuButton handleMenu={handleMenu} isOpen="true" />
        </div>
        <div className="px-4">
          <div className="space-y-1">
            <div className="mt-0">
              <div className="right_social pt-4">
                <div className="flex flex-row">
                  <a
                    className="nav_item"
                    href="https://discord.gg/XpqkTbNcKM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                      <DiscordIcon color="white" width="30px" />
                    </div>
                  </a>
                  <a className="nav_item" href="https://t.me/hinges_EN" target="_blank"
                    rel="noopener noreferrer">
                    <div className="mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                      <TelegramIcon color="white" width="30px" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <p className="py-2 text-xl">
              <Link to="/">
                {/* {t('header.whitepaper')} */}
                whitepaper
              </Link>
            </p>
            <p className="py-2 text-xl">
              <Link to="referral">Refer and Earn</Link>
            </p>
            <div
              className="py-2 flex flex-row items-center flex-col"
              onClick={() => setShowLang(true)}
            >
              <div className="flex w-full">
                <div className="flex flex-col justify-center">
                  <img src="/images/multilang.png" width={20} height={20} />
                </div>
                <p className="p-2 text-xl">{getLang(locale)}</p>
              </div>
              {showLang && (
                <div
                  className="relative menu-bg md:hidden flex px-2 py-6 z-10"
                  style={{ position: "sticky", top: "88px", height: "100vh" }}
                >
                  <div className="px-4 w-full">
                    <div className="space-y-1">
                      <div className="flex flex-col">
                        <div className="grid grid-cols-2">
                          {locales.map((item, index) => (
                            <span
                              key={index}
                              onClick={() => {
                                setSelected(item);
                                setShowLang(false);
                                router.push("/", "/", { locale: item });
                              }}
                              className={
                                item === locale
                                  ? "mx-8 my-2 block truncate text-xl text-orange text-center"
                                  : "mx-8 my-2 block truncate text-xl text-center"
                              }
                            >
                              {getFullName(item)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
