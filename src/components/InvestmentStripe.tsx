"use client";
import React from "react";
import { InvestmentData } from "@/dummy/InvestmentData";
import Image from "next/image";
import NextImage from "./theme/nextImage";

const InvestmentStripe = () => {
  return (
    <>
      <div className="flex justify-end max-[1048px]:justify-center max-[1048px]:gap-4 max-[715px]:gap-2 gap-0 flex-wrap">
        {InvestmentData?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#494F53] py-[50px]  max-[715px]:min-w-full min-w-[367px] mb-5 relative  max-[715px]:py-[10px]"
            >
              <p className="font-public-sans text-center font-[800] leading-[75.2px] text-[64px] text-[#ffffff] max-[768px]:text-[32px] max-[768px]:leading-[45.2px] ">
                {item.price}+
              </p>
              <p className="font-public-sans text-center font-[300] leading-[23.5px] text-[20px] text-[#ffffff]  ">
                {item.description}
              </p>
              {index !== InvestmentData.length - 1 && (
                <NextImage
                  src="/assets/image/Vector3.png"
                  className="absolute z-40 bottom-0 max-[1048px]:hidden right-[-39px] max-[1049px]:right-[0px] top-[-8px] h-[217px]"
                  height={200}
                  alt="vector"
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InvestmentStripe;
