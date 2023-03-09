import React, { useState } from "react";
import MenuPanel from "./menu-panel";
import MenuButton from "./menu-button";
import LanguageSelector from "./languageSelector";
import { useTranslation } from "next-i18next";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { DiscordIcon, TelegramIcon } from "./svgIcon";

export default function Header() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 576px)",
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen(!isOpen);
  const { t } = useTranslation("common");

  return (
    <>
      <header
        className="header w-full relative z-10 sm:bg-transparent"
        style={{
          background: isDesktopOrLaptop
            ? "linear-gradient(90deg, transparent 43%, #5623d1)"
            : "transparent",
        }}
      >
        <nav className="flex sm:px-16 px-4 py-[20px] lg:flex justify-between ">
          {isDesktopOrLaptop && (
            <div className="logo-wrapper sm:mx-0">
              <a href="https://hinges.io/">
                <img
                  className="logo"
                  src="/images/hinges-logo.png"
                  alt="Hinges logo"
                  width={190}
                />
              </a>
            </div>
          )}
          {!isDesktopOrLaptop && (
            <div className="logo-wrapper sm:mx-0">
              <a href="https://hinges.io/">
                <img
                  className="logo "
                  src="/images/hinges-logo.png"
                  alt="Hinges logo"
                  width={140}
                />
              </a>
            </div>
          )}

          <div className="nav_menu px-2">
            {isDesktopOrLaptop && (
              <div className="flex items-center">
                <div className="nav_item mx-2 font-['quicksand-semibold']">
                  <p>
                    <a href="">Whitepaper</a>
                  </p>
                </div>
                <div className="nav_item mx-2 font-['quicksand-semibold']">
                  <p>
                    <a href="/referraltoearn" target="_blank" rel="noopener noreferrer">Refer and Earn</a>
                  </p>
                </div>
              </div>
            )}
            <div className="hidden lg:flex items-center mx-2">
              <div className="hidden right_social_container lg:ml-0">
                <div className="right_social">
                  <div className="social_box">
                    <a
                      className="nav_item"
                      href="https://discord.gg/hkqAHKUVGK"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="mr-2 transition">
                        <DiscordIcon color="white" width="30px" />
                      </div>
                    </a>
                    <a
                      className="nav_item"
                      href="https://t.me/hinges_EN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="mr-2 transition">
                        <TelegramIcon color="white" width="30px" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {isDesktopOrLaptop && (
              <div className="relative flex flex-row items-center font-['quicksand-bold']">
                <MenuButton handleMenu={handleMenu} isOpen={isOpen} />
                <LanguageSelector></LanguageSelector>
              </div>
            )}
            {!isDesktopOrLaptop && (
              <div className="relative flex flex-row items-center">
                <MenuButton handleMenu={handleMenu} isOpen={isOpen} />
              </div>
            )}
          </div>

          {/* Mobile menu */}
        </nav>
      </header>

      {!isDesktopOrLaptop && isOpen && <MenuPanel handleMenu={handleMenu} />}
    </>
  );
}
