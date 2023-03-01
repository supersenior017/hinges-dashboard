import React from "react";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import { Fade } from "react-awesome-reveal";
const RoadmapCard = dynamic(import("../roadmapCard"));
const RoadmapCarousel = dynamic(import("../roadmapCarousel"));

const roadplist = [
  {
    __typename: "Roadmap",
    _id: "8a8ecc2b-6312-4a1b-baac-f2b62ef435a1",
    roadmap_title: "Phase 1",
    roadmap_sub_title: "River phase",
    roadmap_content: [
      "Hello World! Hinges is Born",
      "Project Kickoff, Research & Whitepaper",
      "Hinges Token Launch",
      "Website Launch",
      "Hinges Referral Program",
      "Preparation, Smart Contract Audits, Bug Bounty",
      "Uniswap and DEX Listings",
      "Promotion Campaigns",
    ],
  },
  {
    __typename: "Roadmap",
    _id: "6a3bcfe0-75a2-4c7c-a72d-47cfa65794aa",
    roadmap_title: "Phase 2",
    roadmap_sub_title: "mountain phase",
    roadmap_content: [
      "Liquidity Mining and Staking",
      "Hinges Vault",
      "Yield Optimization Platform",
      "Bridge Implementation and Deployment",
      "Hinges v1.0 Launch",
      "CEX Listings",
      "Partnership Curations",
      "Volume and TVL Growth",
      "Premium Trading Signals Integration",
    ],
  },
  {
    __typename: "Roadmap",
    _id: "0d93d4dc-7552-41fc-b213-9851c3dc8532",
    roadmap_title: "Phase 3",
    roadmap_sub_title: "forest phase",
    roadmap_content: [
      "Borrow/Lending",
      "Fractional/ Co-own Real Estate",
      "Hinges wealth management",
      "Team Expansion",
      "Ambassador Program",
      "Hinges Accelerator and Incubation Program",
      "Volume and TVL Growth",
      "Mobile Apps",
      "Issue First NFTs",
      "NFT Auction and Transactions",
      "Cross Chain NFT Bridge",
    ],
  },
  {
    __typename: "Roadmap",
    _id: "0206e8c3-578f-423e-8e06-92199a406ac8",
    roadmap_title: "Phase 4",
    roadmap_sub_title: "Ocean phase",
    roadmap_content: [
      "Opening of European Office",
      "OTC and P2P Exchange",
      "Game Launch",
      "Gaming and Tokenization MultiChain",
      "Grants and Proposals Funding",
      "Worldwide Expansion and Growth Promotion",
      "New Hinges Branding",
      "Website Redesign",
      "Debit Cards",
      "Advocacy and Ambassadors Program",
    ],
  },
  {
    __typename: "Roadmap",
    _id: "3a418cbd-7df8-48cb-a388-8036b575cece",
    roadmap_title: "Phase 5",
    roadmap_sub_title: "sky phase",
    roadmap_content: [
      "Extensive Media and Press Coverage",
      "Attend and Speak at Major Cryptocurrency Events and Exhibitions",
      "Marketing Campaigns",
      "Platform Improvements",
      "Research Program",
      "Partnerships and Integrations",
      "Hinges Ecosystem Growth Acceleration",
    ],
  },
];

export default function Roadmap() {
  const { t } = useTranslation("common");

  const getCarouselData = (data: any) => {
    let catchData = [];
    for (let i = 0; i < data.length; i++) {
      const roadmap_title = data[i].roadmap_title;
      let roadmap_content = [];
      for (let j = 0; j < data[i].roadmap_content.length; j++) {
        roadmap_content.push(data[i].roadmap_content[j]);
      }
      catchData.push({ roadmap_title, roadmap_content });
    }

    return catchData;
  };

  return (
    <section className="section-3">
      <div className="main_container mx-auto px-4 py-16">
        <Fade direction="up" triggerOnce={true}>
          <h2 className="text-[45px] font-['quicksand-bold'] serial_heading mb-10  text-center  hidden xl:block ">
            {t("roadmaps")}
          </h2>
        </Fade>
        <Fade delay={700} triggerOnce={true}>
          <div className="roadmap_container hidden xl:flex">
            {roadplist.map((item, index) => {
              return <RoadmapCard key={item._id} index={index} item={item} />;
            })}
          </div>
        </Fade>

        <div className="roadmap_carousel_wrapper xl:hidden">
          <RoadmapCarousel allRoadmap={getCarouselData(roadplist)} />
        </div>
      </div>
    </section>
  );
}
