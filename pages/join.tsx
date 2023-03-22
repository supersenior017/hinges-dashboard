/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Join = () => {

    return (
        <div
            className="text-white bg-white h-screen flex flex-col justify-center"
        >
            <div id="referralhero-signup-widget"></div>
        </div>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Join;
