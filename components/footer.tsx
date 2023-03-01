import React from "react";
import { useMediaQuery } from "react-responsive";
import { DiscordIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from "./svgIcon";

export default function Footer() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1200px)",
  });
  return (
    <>
      {isDesktopOrLaptop && (
        <div className="footer_container bg-[#001a57]">
          <footer className=" mx-auto pl-8 sm:px-6 lg:pl-8 lg:pr-8 flex lg:flex-row items-center py-10 lg:py-0 place-content-between">
            <div className=" sm:lg:w-1/3 logo-wrapper text-center">
              <a href="http://Hinges.io/">
                <img
                  className="logo"
                  src="/images/hinges-footer-logo.png"
                  alt="Hinges logo"
                  width={200}
                  height={52}
                />
              </a>
            </div>
            <div className="footer-copyright mr-10">
              <p className="ml-[-100px] text-[#7857eb] font-['quicksand-bold'] text-[20px]">
                Copyright @2023 Hinges. All Rights Reserved.
              </p>
            </div>
            <div className="social_box flex justify-center lg:ml-4 p-1">
              <a className="nav_item" href="https://twitter.com/hingesHQ" target="_blank" rel="noopener noreferrer">
                <div className="sm:pr-6">
                  <TwitterIcon color="#7857eb" width="50px" />
                </div>
              </a>
              <div className="sm:pr-6">
                <YoutubeIcon color="#7857eb" width="50px" />
              </div>
              <a className="nav_item" href="https://discord.gg/hkqAHKUVGK" target="_blank" rel="noopener noreferrer">
                <div className="sm:pr-6">
                  <DiscordIcon color="#7857eb" width="50px" />
                </div>
              </a>
              <a className="nav_item" href="https://t.me/hinges_EN" target="_blank" rel="noopener noreferrer">
                <div className="pr-10">
                  <TelegramIcon color="#7857eb" width="50px" />
                </div>
              </a>
            </div>
          </footer>
        </div>
      )}

      {!isDesktopOrLaptop && (
        <div className="footer_container bg-[#001a57] py-[20px]">
          <footer className=" mx-auto text-center">
            <div className="logo-wrapper">
              <a href="http://Hinges.io/">
                <img
                  className="logo inline m-3"
                  src="/images/hinges-footer-logo.png"
                  alt="Hinges logo"
                  width={180}
                />
              </a>
            </div>
            <div className="social_box flex justify-center lg:ml-4 ">
              <a className="nav_item" href="https://twitter.com/hingesHQ" target="_blank" rel="noopener noreferrer">
                <div className="m-3">
                  <TwitterIcon color="#7857eb" width="40px" />
                </div>
              </a>
              <div className="m-3">
                <YoutubeIcon color="#7857eb" width="40px" />
              </div>
              <a className="nav_item" href="https://discord.gg/hkqAHKUVGK" target="_blank" rel="noopener noreferrer">
                <div className="m-3">
                  <DiscordIcon color="#7857eb" width="40px" />
                </div>
              </a>
              <a className="nav_item" href="https://t.me/hinges_EN" target="_blank" rel="noopener noreferrer">
                <div className="m-3">
                  <TelegramIcon color="#7857eb" width="40px" />
                </div>
              </a>
            </div>
            <div className="footer-copyright ">
              <p className="text-[#ffffff] font-['quicksand-bold'] text-[15px]">
                Copyright @2023 Hinges. All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
