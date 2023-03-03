import { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import Link from "next/link";
import { Fade } from "react-awesome-reveal"
import useTranslation from 'next-translate/useTranslation';

export default function Referral() {
    const { t } = useTranslation('common');
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1080px)'
    })

    return (
        <>
            <section className="section-about" id="referral">
                <div className="main_container mx-auto px-8 py-2 md:py-4">
                    <div className="about_us_container">
                        <div className={`${isDesktopOrLaptop ? 'flex' : 'block'} justify-between`}>

                            <div className={`${isDesktopOrLaptop ? 'mr-48 w-1/2' : 'mr-0'} flex flex-col justify-center`}>
                                <div className={`flex mt-[20px] ${isDesktopOrLaptop ? 'justify-start' : 'justify-center'}`}>
                                    <img src="/images/chart-icon.png" alt="faq arrow" />
                                    <div className="sm:text-[#7857EB] ml-[10px] text-[#7857EB] text-center sm:text-left text-[40px] font-['quicksand-bold']">
                                        hinges
                                    </div>
                                </div>
                                <div>
                                    <div className={`sm:text-[#7857EB] text-[#7857EB] my-[20px] text-center sm:text-left ${isDesktopOrLaptop ? 'text-[40px]' : 'text-[35px]'} font-['quicksand-bold']`}>
                                        {t('referral_join')}
                                    </div>
                                </div>

                                <div className="aboutus_text text-center sm:text-left">
                                    <p className=" text-[#001A57] sm:text-[#654dd2] text-[18px] font-['roboto-regular']">
                                        {t("referral_string1")} </p>
                                </div>

                                <div className="text-center sm:text-left">
                                    <p className="text-[#001A57] sm:text-[#654dd2] text-[18px] my-5  font-['roboto-regular']">
                                        {t("referral_string2")}
                                    </p>
                                </div>
                                <div className=" text-[#ffffff] font-['roboto-regular'] w-full my-[20px]">
                                    <p className={`${isDesktopOrLaptop ? '' : 'm-auto'} text-center sm:text-left text-[25px]  px-[20px] rounded-md bg-[#7857eb] w-fit font-['quicksand-bold']`}>{t("come_and_join_us")}</p>
                                </div>

                                <div className="mb-[20px] text-[#b7b7b7] font-['roboto-regular'] w-full p-[10px] rounded-md">
                                    <p className={`${isDesktopOrLaptop ? '' : 'm-auto'} text-center underline sm:text-left text-[20px] w-fit font-['quicksand-bold']`}>{t("how_it_works")}</p>
                                </div>

                            </div>
                            {
                                isDesktopOrLaptop &&
                                <div className="bg-cover w-1/2 max-w-[800px] h-[100%] flex justify-center">
                                    <img src="/images/referral.png" alt="faq arrow" />
                                </div>
                            }
                            {
                                !isDesktopOrLaptop &&
                                <div className="mt-[10px] w-full h-full min-h-[350px] flex justify-center bg-contain bg-no-repeat mb-[20px]">
                                    <img src="/images/referral.png" alt="faq arrow" />
                                </div>

                            }
                        </div>
                    </div>
                </div >
                {/* {
                    !isDesktopOrLaptop &&
                    <div className=" text-[#ffffff] font-['roboto-regular'] bg-[#7857eb] p-2">
                        <p className="text-[#0c225f] my-[20px]  text-center sm:text-left text-[36px] font-['quicksand-bold']">{t("come_and_join_us")}</p>
                        <p className="my-[10px] mx-[20px] text-[18px]">{t("introduction_string_part_1")}<br />
                            <span className="text-[#0c225f]"><b>Get in touch</b></span><br />
                            {t("send_us_email")} <Link href="#"><b className="text-[#0c225f]">hello@hinges.io</b></Link> {t("introduction_string3_part2")}
                            {t("send_us_email")} <b className="text-[#0c225f]">
                                <Link href="#"> fundmanager@hinges.io </Link></b>{t("introduction_string3_part3")}</p>
                    </div>
                } */}
            </section>
        </>
    );
}
