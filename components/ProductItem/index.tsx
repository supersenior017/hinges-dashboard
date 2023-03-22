import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import ReactCardFlip from "react-card-flip";
import { useMediaQuery } from "react-responsive";

export default function ProductItem({ productitem }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("common");
  const [isFlipped, setIsFlipped] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1080px)",
  });
  return (
    <>
      {isDesktopOrLaptop && (
        <Fade direction="up" triggerOnce={true}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="block md:flex w-[100%] justify-center mt-3">
              <div className="grid grid-cols-5 block w-[100%] sm:mx-[14px]  bg-[url('/images/product-bg-mobile.jpg')] bg-cover md:bg-[url('/images/product-bg.jpg')] sm:h-[270px]  rounded-lg px-3 pb-5 pt-1 sm:py-4">
                <div className="col-span-1 md:mt-[0px]">
                  <img
                    src={productitem.image}
                    className="w-[80%] md:mx-[5px] md:my-[10px]"
                    alt=""
                  />
                </div>
                <div className="col-span-4 mx-[10%] flex flex-col justify-evenly">
                  <div className="text-center md:text-left text-[#ffffff] sm:text-[24px] text-[30px] font-bold font-['quicksand-bold'] mt-2 leading-[1.2]">
                    {productitem.name}
                  </div>
                  <div className="text-center md:text-left text-[#ffffff] sm:text-[18px] text-[16px] my-6 font-['roboto-regular']">
                    {productitem.description}
                  </div>
                  <div className="transition delay-150 duration-300 ease-in-out transform hover:shadow-[#50d71e]">
                    <span
                      className="hidden md:inline text-center md:text-left ml-2 py-[3px] text-white font-semibold border-y border-[#0c225f55] hover:border-[2px] cursor-pointer"
                      onClick={() => setIsFlipped((prev) => !prev)}
                    >
                      + LEARN MORE
                    </span>
                  </div>
                  <div className="block md:hidden text-center transition delay-150 duration-300 ease-in-out transform hover:shadow-[#50d71e]">
                    <span
                      className="text-center md:text-left ml-2 text-white py-[3px] font-semibold border-y border-[#0c225f55] cursor-pointer hover:border-[2px]"
                      onClick={() => setIsFlipped((prev) => !prev)}
                    >
                      + LEARN MORE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* card back */}
            <div
              className="block md:flex justify-center mt-3 "
              onClick={() => setIsFlipped((prev) => !prev)}
            >
              <div className="block md:flex sm:mx-[14px] bg-[#7857eb] sm:h-[270px] h-full rounded-lg px-3 py-5 sm:py-7 ">
                <p className="overflow-x-auto mx-[15px]">
                  {productitem.content}
                </p>
              </div>
            </div>
          </ReactCardFlip>
        </Fade>
      )}
      {!isDesktopOrLaptop && (
        <Fade direction="left" triggerOnce={true}>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="block md:flex justify-center mt-3">
              <div className="block md:flex sm:mx-[14px]  bg-[url('/images/product-bg-mobile.jpg')] bg-cover md:bg-[url('/images/product-bg.jpg')] sm:h-[270px] h-full rounded-lg px-3 pb-5 pt-1 sm:py-7">
                <div className="m-auto md:mt-[0px] ">
                  <img
                    src={productitem.image}
                    className="m-auto  min-w-[80px] my-[25px] w-[10%]  md:mx-[5px] md:my-[10px]"
                    alt=""
                  />
                </div>
                <div className="mx-[5%] py-5">
                  <div className="text-center md:text-left text-[#ffffff] sm:text-[27px] text-[30px] font-bold font-['quicksand-bold'] mt-2 leading-[1.4]">
                    {productitem.name}
                  </div>
                  <div className="text-center md:text-left text-[#ffffff] sm:text-[14px] text-[18px] my-6 font-['roboto-regular']">
                    {productitem.description}
                  </div>
                  <div className="transition delay-150 duration-300 ease-in-out transform hover:shadow-[#50d71e]">
                    <span
                      className="hidden md:inline text-center md:text-left ml-2 py-[3px] text-white font-semibold border-y border-[#0c225f55] hover:border-[2px] cursor-pointer"
                      onClick={() => setIsFlipped((prev) => !prev)}
                    >
                      + LEARN MORE
                    </span>
                  </div>
                  <div className="block md:hidden text-center transition delay-150 duration-300 ease-in-out transform hover:shadow-[#50d71e]">
                    <span
                      className="text-center md:text-left ml-2 text-white py-[3px] font-semibold border-y border-[#0c225f55] cursor-pointer hover:border-[2px]"
                      onClick={() => setIsFlipped((prev) => !prev)}
                    >
                      + LEARN MORE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* card back */}
            <div
              className="block md:flex justify-center mt-3 "
              onClick={() => setIsFlipped((prev) => !prev)}
            >
              <div className="block md:flex sm:mx-[14px] bg-[#7857eb] sm:h-[270px] h-full rounded-lg px-3 py-5 sm:py-7 ">
                <p className="overflow-x-auto mx-[15px]">
                  {productitem.content}
                </p>
              </div>
            </div>
          </ReactCardFlip>
        </Fade>
      )}
    </>
  );
}
