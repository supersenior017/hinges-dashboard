/* eslint-disable @next/next/no-img-element */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Referral from "@/components/Referral";

const ReferralToEarn = () => {

  return (
    <div
      className="text-white"
      style={{ overflow: "hidden", backgroundColor: "#0500ab" }}
    >
      <Referral />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default ReferralToEarn;
