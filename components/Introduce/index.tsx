import { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import Link from "next/link";
import {Fade} from "react-awesome-reveal"
import useTranslation from 'next-translate/useTranslation';

export default function Introduce() {
    const { t } = useTranslation('common');
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1080px)'
    })

    return (
        <>
            <section className="section-about">
                <div className="main_container mx-auto px-8 py-2 md:py-4">
                    <div className="about_us_container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 xl:gap-8">
                                
                                <div className="">
                                    <div>
                                        <div className="sm:text-[#654dd2] text-[#001a57] my-[20px] text-center sm:text-left text-[40px] font-['quicksand-bold']">
                                            {t('who_we_are')}
                                            
                                        </div>
                                    </div>
                                   
                                        <div className="aboutus_text text-center sm:text-left">
                                            <p className=" text-[#001A57] sm:text-[#654dd2] text-[18px] font-['roboto-regular']"> 
                                            {t("introduction_string1")} </p>
                                        </div>
                                    
                                        <div className="text-center sm:text-left">
                                            <p className="text-[#001A57] sm:text-[#654dd2] text-[18px] my-5  font-['roboto-regular']">
                                                {t("introduction_string2")}
                                            </p>
                                        </div>

                                        {
                                            !isDesktopOrLaptop &&
                                            <div className="w-[100%] h-[140px] mt-[10px] flex justify-center bg-contain bg-no-repeat bg-[url('/images/about-horizontal.png')]"></div>
                                            
                                        }

                                        <div className="text-center sm:text-left">
                                            <p className="text-[#001A57] sm:text-[#654dd2] text-[18px] my-5  font-['roboto-regular']">
                                                {t("introduction_string3")}
                                            </p>
                                        </div>
                                        <div className="text-center sm:text-left">
                                            <p className="text-[#001A57] sm:text-[#654dd2] text-[18px] my-5  font-['roboto-regular']">
                                                {t("introduction_string4")}
                                            </p>
                                        </div>
                                    
                                    {
                                        isDesktopOrLaptop &&
                                            <div className=" text-[#ffffff] font-['roboto-regular'] bg-[#7857eb] p-8 mr-14 rounded-md">
                                                <p className="text-[#0c225f] text-center sm:text-left text-[36px] font-['quicksand-bold']">{t("come_and_join_us")}</p>
                                                <p className="my-[10px] text-[18px]">{t("introduction_string_part_1")}<br/>
                                                <p className="text-[#0c225f] my-2">Get in touch</p>
                                                {t("send_us_email")} <Link href="#"><b className="text-[#0c225f]">hello@hinges.io</b></Link> {t("introduction_string3_part2")}&nbsp;&nbsp;   
                                                {t("send_us_email")} <b className="text-[#0c225f]">
                                                    <Link href="#">fundmanager@hinges.io</Link></b>{t("introduction_string3_part3")}</p>
                                            </div>
                                        
                                    }
                                    
                                </div>
                                {
                                    isDesktopOrLaptop &&
                                    <div className="bg-cover  w-[100%] h-[100%] flex justify-center bg-[url('/images/about.png')]"></div>
                                }
                        </div>
                    </div>
                </div >
                {
                    !isDesktopOrLaptop &&
                        <div className=" text-[#ffffff] font-['roboto-regular'] bg-[#7857eb] p-2">
                            <p className="text-[#0c225f] my-[20px]  text-center sm:text-left text-[36px] font-['quicksand-bold']">{t("come_and_join_us")}</p>
                            <p className="my-[10px] mx-[20px] text-[18px]">{t("introduction_string_part_1")}<br/>
                            <p className="text-[#0c225f] my-2"><b>Get in touch</b></p>
                            {t("send_us_email")} <Link href="#"><b className="text-[#0c225f]">hello@hinges.io</b></Link> {t("introduction_string3_part2")}
                            {t("send_us_email")} <b className ="text-[#0c225f]">
                                <Link href="#"> fundmanager@hinges.io </Link></b>{t("introduction_string3_part3")}</p>
                        </div>
                }
            </section>
        </>
    );
}
