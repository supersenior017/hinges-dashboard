import { useMediaQuery } from "react-responsive";
import useTranslation from "next-translate/useTranslation";
import { Fade } from "react-awesome-reveal";
import VideoPlayer from "react-background-video-player";

export default function HeroSection({ videoParentref }) {
  const { t } = useTranslation("common");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 576px)",
  });
  return (
    <>
      <section className="hero_section">
        <div className="hero_content ">
          <div className="mx-auto sm:px-16 px-4 sm:py-14 py-8 ">
            <div className="content_wrapper md:my-18 my-5 md:text-left text-center">
              {isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <p className="text-[#0500ab] lg:text-[28px] md:text-[20px] xl:text-[25px] 2xl:text-[33px] text-[23px]  leading-[15px] font-['quicksand-bold'] inline bg-[#ffffff] p-1">
                    {t("header_section_message_spilt_1")}
                  </p>
                </Fade>
              )}
              {isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <p className="text-white font-['quicksand-bold'] text-[37px] lg:text-[40px] xl:text-[55px] 2xl:text-[75px]  mt-[10px] ">
                    {t("header_section_message_spilt_2")}
                  </p>
                </Fade>
              )}
              {isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <p className="text-[#8361ed] font-['quicksand-bold'] leading-[62px] text-[37px] lg:text-[50px] xl:text-[55px] 2xl:text-[75px] ">
                    {t("header_section_message_spilt_3")}
                  </p>
                </Fade>
              )}
              {isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <p className="text-[#ffffff] font-['roboto-medium'] md:text-left text-center text-[14px] lg:text-[17px] 2xl:text-[25px] max-w-[50%] text-[12px] py-10">
                    {t("hero_section_detail")}
                  </p>
                </Fade>
              )}
              {!isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <p className="text-[#0500ab] text-[28px] leading-[15px] font-['quicksand-bold'] inline bg-[#ffffff] p-1">
                    {t("header_section_message_spilt_1")}
                  </p>
                </Fade>
              )}
              {!isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <p className="text-white font-['quicksand-bold'] text-[40px] leading-[62px] mt-[10px] tracking-[-2px]">
                    {t("header_section_message_spilt_2")}
                  </p>
                </Fade>
              )}
              {!isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <p className="text-[#8361ed] font-['quicksand-bold'] leading-none text-[40px]  tracking-[-2px]">
                    {t("header_section_message_spilt_3")}
                  </p>
                </Fade>
              )}
              {!isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <p className="text-white font-['roboto-medium']  text-[15px]  py-[20px]">
                    {t("hero_section_detail1")}
                    <br />
                    {t("hero_section_detail2")}
                  </p>
                </Fade>
              )}
              {isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <div className="coming-soon md:mx-1  mx-auto w-fit font-['roboto-medium'] text-center">
                    &nbsp;
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="30px"
                      width="30px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"></path>
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"></path>
                    </svg>
                    <img
                      className="w-[25px] h-[30px] ml-[5px]"
                      src="./images/google.png"
                      alt=""
                    />
                    &nbsp;&nbsp;&nbsp; {t("available_soon")}
                  </div>
                </Fade>
              )}
              {!isDesktopOrLaptop && (
                <Fade direction="up" triggerOnce={true}>
                  <div className="coming-soon  m-auto md:mx-1   w-fit text-[11px] font-['roboto-medium'] mb-2">
                    &nbsp;
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="21px"
                      width="21px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"></path>
                      <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"></path>
                    </svg>
                    &nbsp;
                    <img
                      className="w-[16px] h-[21px]"
                      src="./images/google.png"
                      alt=""
                    />
                    &nbsp;&nbsp;&nbsp;{" "}
                    <span className="text-[11px]">{t("available_soon")}</span>
                  </div>
                </Fade>
              )}
            </div>
          </div>
        </div>

        {isDesktopOrLaptop && (
          <div
            className="desk-video  w-[75%] ml-[25%] sm:-mt-0 xl:-mt-22 -z-0"
            dangerouslySetInnerHTML={{
              __html: `
                    <video playsInline autoPlay loop muted>
                    <source src="/video/hero.mp4" type="video/mp4" />
                    </video>
                    `,
            }}
          ></div>
        )}

        {
          !isDesktopOrLaptop && (
            <div className="mobile-video-wrap">
              <VideoPlayer
                className="video"
                src="/video/hero-mobile.mp4"
                autoPlay={true}
                muted={true}
              />
            </div>
          )
          // <div
          //   className="mobile-video -mt-0"
          //   ref={videoParentref}
          //   dangerouslySetInnerHTML={{
          //     __html: `
          //             <video playsInline autoPlay loop muted>
          //             <source src="/video/hero-mobile.mp4" type="video/mp4" />
          //             </video>
          //             `,
          //   }}
          // ></div>
        }

        {/* mobile end */}
      </section>
    </>
  );
}
