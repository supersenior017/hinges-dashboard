/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect, useRef } from "react";
import Header from "../components/header";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/productSection";
import Tokenomics from "../components/Tokenomics";
import Introduce from "../components/Introduce";
import Roadmap from "../components/Roadmap";
import Faq from "../components/Faq";
import Footer from "../components/footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const partners = [
  {
    image: "images/partners/partner1.avif",
    imageOther: "images/partners/partner1.png",
    imageWebp: "images/partners/partner1.webp",
    alt: "partner1",
  },
  {
    image: "images/partners/partner3.avif",
    imageOther: "images/partners/partner3.png",
    imageWebp: "images/partners/partner3.webp",
    alt: "partner3",
  },
  {
    image: "images/partners/partner4.avif",
    imageOther: "images/partners/partner4.png",
    imageWebp: "images/partners/partner4.webp",
    alt: "partner4",
  },
  {
    image: "images/partners/partner5.avif",
    imageOther: "images/partners/partner5.png",
    imageWebp: "images/partners/partner5.webp",
    alt: "partner5",
  },
  {
    image: "images/partners/partner6.avif",
    imageOther: "images/partners/partner6.png",
    imageWebp: "images/partners/partner6.webp",
    alt: "partner6",
  },
  {
    image: "images/partners/partner7.avif",
    imageOther: "images/partners/partner7.png",
    imagewebp: "images/partners/partner7.webp",
    alt: "partner7",
  },
  {
    image: "images/partners/partner8.avif",
    imageOther: "images/partners/partner8.png",
    imageWebp: "images/partners/partner8.webp",
    alt: "partner8",
  },
];



const Home = () => {
  
  const windowRef = useRef<HTMLDivElement>(null);
  const videoParentRef: any = useRef();

  useEffect(() => {
    if (videoParentRef.current) {
      const player = videoParentRef.current?.children[0];
      if (player) {
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", "");
        player.autoplay = true;
      }
    }
  }, []);

  return (
    <div
      className="text-white"
      style={{ overflow: "hidden", backgroundColor: "#0500ab" }}
      ref={windowRef}
    >
      <Header />
      <HeroSection videoParentref={videoParentRef} />
      <ProductsSection />
      <Tokenomics />
      <Introduce />
      <Roadmap />
      <Faq partners={partners} />
      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
