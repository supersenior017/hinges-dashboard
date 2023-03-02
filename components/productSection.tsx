import ProductItem from "./ProductItem";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

import useTranslation from "next-translate/useTranslation";

const productlist = [
  {
    id: 1,
    name: "0% interest Loans",
    image: "/images/product-item-images/1.png",
    description:
      "Do you need funds but don't want to sell your crypto and miss out? Hinges also offer...",
    content:
      "Do you need funds but don't want to sell your crypto and miss out? Hinges also offer P2P community-based lending! Borrow USD, GBP, CHF, and EUR against your BTC, ETH, and other significant crypto holdings*, and benefit from 0% APR**, with no credit checks necessary! We believe in providing funding opportunities when conventional lenders won't. And, while we don't insist you hold any Hinges to take advantage, it will bump up your priority status! *TBD according to market fluctuations. **Yes, you read that correctly, 0% APR!",
  },
  {
    id: 2,
    name: "Peer-to-Peer OTC Exchange",
    image: "/images/product-item-images/2.png",
    description:
      "On Hinges p2p exchange, frictionless local peer-to-peer trading allows users to trade...",
    content:
      "On Hinges p2p exchange, frictionless local peer-to-peer trading allows users to trade with each other — not with us. People buy and sell crypto on their terms, using Stablecoins, Local currencies, or Bank transfers in real-time. The simple, safe way to buy and sell your Cryptocurrency Hinges OTC will allow buying and selling large amounts of Cryptocurrency directly through our Client Services team with the Best OTC trade execution and deep liquidity access through algorithmic intelligent order routing technology. Our private trading platform allows institutions, home offices, and high-net-worth individuals to buy large amounts of Cryptocurrency in a discreet, secure, and ultra-competitive manner.",
  },

  {
    id: 3,
    name: "Fractional / Co-own Real Estate",
    image: "/images/product-item-images/3.png",
    description:
      "Hinges is a blockchain platform that allows you to easily co-invest in real estate with...",
    content:
      "Hinges is a blockchain platform that allows you to easily co-invest in real estate with other investors. Own real estate with anyone, anywhere & anytime. Members can co-own properties, collaborate on decisions, and share ideas within the community. What's more, you can start investing with as little as $50. We offer property investors three different ways to earn cash flow. These are profit on the sale of properties, rental income, and property value growth or the combination of all three. We have always believed there must be a better way to invest in real estate. We're on a mission to make it easier and more accessible to own real estate. By lowering the cost of entry and simplifying the process, everyone - regardless of their background - should be able to buy or sell homes. Enjoy seamless exits and continuous price discovery, so you always know what your assets are worth. Finding strength in numbers, take advantage of a fabulous option to diversify your portfolio, maximize income and reduce risks.",
  },
  {
    id: 4,
    name: "Metaverse NFT Game",
    image: "/images/product-item-images/4.png",
    description:
      "Explore, Play, and Own land. Once you own it, place resources on it and earn rewards...",
    content:
      "Explore, Play, and Own land. Once you own it, place resources on it and earn rewards., with no grind needed to gain experience points. Each NFT land is an independent entity, which players can acquire through purchase and lease in the market. Hinges holders will have priority access to these lands. Hinges is creating an all-new DeFi-inspired and crypto-incentivized strategy game with features like battling, breeding, training, and unique upgrades to in-game characters, all verifiable on the Blockchain. We are working with some of the leading partners in the gaming and NFT collectible industry to develop this game. Items destroyed in battle become rarer (and more valuable!). Players can build and decorate their virtual land, mine resources, Participate in treasure hunts, and interact with other players through quests, daily activities, and community social events. Once purchased, players can change the terrains and decorate the land with various in-game items.",
  },
  {
    id: 5,
    name: "Investment Fund/ Early stage Incubator",
    image: "/images/product-item-images/5.png",
    description:
      "Hinges Ventures is committed to becoming a global accelerator and investor in building...",
    content:
      "Hinges Ventures is committed to becoming a global accelerator and investor in building the native Web 3.0 blockchain economy. Working alongside leading founders, exciting start-ups, and corporate innovators, we move new concepts efficiently to the market. Partners benefit and flourish through co-creation, capital, and a community invested in their success. The community benefits from early access and onboarding with projects at the intersection of emerging technologies and societal trends. By offering an ecosystem of resources and services that will improve their visibility in the market, we are committed to assisting them in growing. Our goal is to spur development and innovation in the blockchain sector. Together, we bring innovative ideas to life.",
  },
  {
    id: 6,
    name: "AI-Powered Trading Signals",
    image: "/images/product-item-images/6.png",
    description:
      "Our AI-driven technology lets us easily digest the relevant details and quickly identify...",
    content:
      "Our AI-driven technology lets us easily digest the relevant details and quickly identify the best trades so you can make more informed decisions. We have the support of knowledgeable traders and analysts who offer current market information. Hold HINGES - Get VIP access - Profit. It's that easy! Free and exclusive entry to the Inner Circle - our elite group of traders, technical analysts, influencers, and investors. Get complete market knowledge and discover how to expand your portfolio alongside the best! Our traders and analysts will analyze all market data, including quantitative and sentiment, to give you specific trading signals. We assist you in identifying the best trades with our AI software and other strategies we provide. Join the Hinges Inner Circle today!",
  },
];

export default function ProductsSection() {
  const { t } = useTranslation("common");

  return (
    <section className="section-2">
      <div className="main_container mx-auto sm:px-2 px-6 pb-14">
        <div className="our_features_container">
          <Fade direction="up" triggerOnce={true}>
            <h2 className="text-[#ffffff] sm:text-[45px] text-[28px] text-center font-['quicksand-bold'] m-[10px] font-bold">
              {t("product_suite")}
            </h2>
          </Fade>

          <div className="card_container w-full grid grid-cols-1 justify-center md:grid-cols-1  lg:grid-cols-2 xl:grid-cols-3">
            {productlist.map((productitem, index) => {
              return (
                <div className="mt-[20px] md:my-[10px]" key={productitem.id}>
                  <ProductItem productitem={productitem} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
