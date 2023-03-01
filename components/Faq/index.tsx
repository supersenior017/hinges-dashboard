import React from "react";
import dynamic from "next/dynamic";
import useTranslation from 'next-translate/useTranslation';
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from 'react-responsive'

const FaqCard = dynamic(import("../faqCard"));

export default function Faq({ partners }) {

    const { t } = useTranslation('common');
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1080px)'
    })

    return (
        <section className="section-4 bg-[#7857eb]">
            <div className="main_container mx-auto px-4 pt-10 pb-20 sm:pb-24">
                <div className="partnerships_container">
                    <Fade direction="up" triggerOnce={true}>
                        <p className=" mb-10 sm:text-[40px] text-[25px] font-semi-bold text-[#ffffff] text-center  font-['quicksand-bold']">
                            {t("community-partner")}<br />
                            {t("community-partner2")}
                        </p>
                    </Fade>
                    {/* <Fade delay={500} triggerOnce={true}> */}
                        {
                            isDesktopOrLaptop &&
                            <>

                                <div className=" grid sm:grid-cols-4  sm:gap-5  items-center px-6 sm:px-5 xl:px-0">
                                    <div className="md:w-[220px] md:max-w-[220px] md:max-h-[50px] w-[110px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner1.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="md:w-[220px] md:max-w-[220px] md:max-h-[50px] w-[110px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner3.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="md:w-[220px] md:max-w-[220px] md:max-h-[50px] w-[110px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner4.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="md:w-[150px] md:max-w-[220px] md:max-h-[50px] w-[110px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner5.png" alt="partner" />
                                        </picture>
                                    </div>
                                </div>
                                <div className=" grid sm:grid-cols-3  sm:gap-3 my-[5%] mx-[60px]  items-center px-6 sm:px-5 xl:px-0">
                                    <div className="md:w-[180px] md:max-w-[220px] md:max-h-[50px] w-[110px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner6.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="md:w-[240px] md:max-w-[220px] md:max-h-[50px] w-[110px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner7.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="md:w-[240px] md:max-w-[220px] md:max-h-[50px] w-[110px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner8.png" alt="partner" />
                                        </picture>
                                    </div>
                                </div>
                            </>
                        }
                        {
                            !isDesktopOrLaptop &&
                            <>
                                <div className=" grid grid-cols-2 gap-2   items-center px-6 sm:px-5 xl:px-0">
                                    <div className="mt-[25px] w-[145px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner1.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="mt-[25px] w-[135px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner7.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="mt-[25px] w-[135px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner3.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="mt-[25px] w-[135px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner8.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="mt-[25px] w-[135px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner4.png" alt="partner" />
                                        </picture>
                                    </div>
                                    <div className="mt-[25px] w-[100px] mx-auto  flex justify-center">
                                        <picture>
                                            <img src="images/partners/partner6.png" alt="partner" />
                                        </picture>
                                    </div>

                                </div>
                                <div className="my-[27px]  w-[100px] mx-auto  flex justify-center">
                                    <picture>
                                        <img src="images/partners/partner5.png" alt="partner" />
                                    </picture>
                                </div>
                            </>
                        }

                    {/* </Fade> */}
                </div>

                <div className="faq_container mt-5 ">
                    <p className="text-[#ffffff] sm:text-[45px] text-[35px] mb-4 text-center font-['quicksand-semibold']" >
                        FAQ
                    </p>
                    <Fade direction="up" triggerOnce={true}>
                        <FaqCard question={t("faq_question_1")} answer={t("faq_answer_1")} />
                    </Fade>
                    <Fade direction="up" triggerOnce={true}>
                        <FaqCard question={t("faq_question_2")} answer={t("faq_answer_2")} />
                    </Fade>
                    <Fade direction="up" triggerOnce={true}>
                        <FaqCard question={t("faq_question_3")} answer={t("faq_answer_3")} />
                    </Fade>
                    <Fade direction="up" triggerOnce={true}>
                        <FaqCard question={t("faq_question_4")} answer={t("faq_answer_4")} />
                    </Fade>
                </div>
            </div>
        </section>
    );
}
