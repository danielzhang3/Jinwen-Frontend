"use client";
import Aboutus from "@/components/Aboutus";
import InvestmentStrategy from "@/components/InvestmentStrategy";
import InvestmentStripe from "@/components/InvestmentStripe";
import Layout from "@/components/Layout";

import React, { useState } from "react";
import Features from "./Features";
import Contact from "./Contact";
import BacktoTop from "./BacktoTop";
import Footer from "./Footer";
import Testimonial from "./Testimonial";
import NextImage from "./theme/nextImage";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <div className=" relative bg-[#494F53] h-[662px] min-[1415px]:h-[900px] max-[610px]:h-[428px]  overflow-hidden  ">
        <div className="relative bg-[url('/assets/image/groupBanner.png')] mr-5 max-[909px]:mr-0 max-[909px]:bg-right-bottom overflow-hidden  max-[610px]:bg-[url('/assets/image/Maskgroup.png')] bg-no-repeat bg-cover bg-center h-[724px] pt-[180px] pl-[150px] max-[610px]:h-[500px]  max-[610px]:pt-[50px] max-[610px]:pl-[30px] max-[610px]:pr-3  max-[768px]:pt-[90px] max-[768px]:pl-[90px] min-[1415px]:h-[982px]">
          <div>
            <p className="font-public-sans  max-[610px]:text-4xl text-[#494F53] font-[600] leading-[85px] text-[64px] ">
              Are You Willing
            </p>
            <p className="font-public-sans font-[600] leading-[85px] text-[64px] text-[#494F53] max-[610px]:text-4xl">
              To Invest In
            </p>
            <p className="font-public-sans   max-[610px]:text-4xl text-[#494F53] font-[900] leading-[75.2px] text-[64px] my-4 ">
              STOCK <span className="text-[#3190E6]">MARKET</span>
            </p>
            <p className="font-public-sans font-[300] leading-[23.5px] text-[20px] text-[#494F53] my-4 ">
              Simple, Transparent Investing. No hidden fees and free overdrafts.
            </p>

            <NextImage
              src="/assets/image/watchVideo.png"
              alt="video"
              width={180}
              onClick={() => setShow(true)}
              className="max-w-[180px]"
            />
          </div>
        </div>
      </div>
      <div className="max-[715px]:px-3">
        <InvestmentStripe />
      </div>
      <div className="my-20 px-3" id="Strategy">
        <p className="font-public-sans font-[900] leading-[56.4px] text-[48px]   text-[#494F53] max-[610px]:text-3xl text-center ">
          INVESTMENT STRATEGY
        </p>
        <p className="font-public-sans text-center  font-[300] leading-[30px] text-[20px] text-[#494F53] my-4 max-w-[968px] mx-auto max-[768px]:text-[16px] max-[768px]:leading-[20px] ">
          Our general investment strategy is to make meaningful investments in
          high quality, predictable businesses that are managed by great
          management with integrity and can be expected to grow intrinsic value
          at high rates for long-term and that are currently available at
          reasonable prices.
        </p>
        <InvestmentStrategy />
      </div>

      <Aboutus />
      <div className="pt-20 px-3">
        <Features />
      </div>

      <Testimonial />
      <div className="pt-20 ">
        <Contact />
      </div>
      <BacktoTop />

      <Footer />
    </Layout>
  );
};

export default Home;
