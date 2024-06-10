"use client";
import useFetch from "@/hooks/useFetch";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { numberToFixed, numberWithCommas } from "../utils/functions";
import CountUp from "react-countup";

const AdminDashboard = () => {
  const router = useRouter();
  const roleId = useStore((state: any) => state?.user?.role?.id);

  const [getDashboardAssets, { response, loading, error }] = useFetch(
    "/admin/dashboard/",
    {
      method: "POST",
    }
  );
  const cardsData = response?.data;

  const adminCards = [
    {
      title: "Total Investors",
      description: "in last 10 days",
      count: cardsData?.total_investor || 0,
      percentage: cardsData?.increase_percentage || 0,
      price: undefined,
      link: "/admin/investors",
    },
    {
      title: "Approved Investors",
      description: "Total approved investors are in use",
      count: cardsData?.total_approved_investor || 0,
      price: undefined,
      link: "/admin/investors",
    },
    {
      title: "Pending Investors",
      description: "Total requests are pending for investors",
      count: cardsData?.total_pending_investor || 0,
      price: undefined,
      link: "/admin/investors/pending",
    },
  ];
  const investorCards = [
    {
      title: "Total Investments",
      price: cardsData?.total_investment || 0,
      percentage: cardsData?.last_ten_days_investment || 0,
      description: "in last 10 days",
    },
    {
      title: "Total Profits",
      price: cardsData?.total_profit || 0,
      percentage: cardsData?.last_ten_days_profit || 0,
      description: "in last 10 days",
    },
    {
      title: "Total Loss",
      price: cardsData?.total_loss || 0,
      percentage: cardsData?.last_ten_days_loss || 0,
      description: "in last 10 days",
    },
  ];

  const dashboardCards: any[] = roleId === 1 ? adminCards : investorCards;

  useEffect(() => {
    getDashboardAssets({});
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error?.message);
    }
  }, [error]);

  return (
    <div className="flex flex-wrap gap-y-5 -mx-4">
      {dashboardCards.map((item) => {
        const isIncreasePercent = item.percentage > 0;
        return (
          <div
            key={item.title}
            className="px-4 basis-[100%] xl:basis-[33.33%] lg:basis-[50%]"
          >
            <div
              className="flex flex-col justify-between p-[2.125rem] h-full bg-white rounded-[10px] border-r-[2px] border-r-dbBlack cursor-pointer hover:shadow-[10px_10px_20px_-10px_rgba(0,0,0,0.1)] transition-shadow"
              onClick={() => router.push(item.link ?? "")}
            >
              <div>
                <h4 className="text-xl text-[#494F53] font-[300] mb-[6px]">
                  {item.title}
                </h4>
                <CountUp
                  end={item.count ?? item?.price}
                  separator=","
                  duration={2}
                >
                  {({ countUpRef }) => (
                    <span className="text-4xl font-[500]">
                      {item?.price ? "$" : ""}
                      <span ref={countUpRef} />
                    </span>
                  )}
                </CountUp>
              </div>
              <div className="flex items-center gap-2 mt-[1.75rem] text-[14px]">
                {item?.percentage ? (
                  <span
                    className={`shrink-0 px-2 py-2 leading-[1] rounded-[4px] font-[600] ${
                      isIncreasePercent
                        ? "bg-[#AAFFE6] text-[#0ABA85]"
                        : "bg-[#FFB7B7] text-[#FF1919]"
                    }`}
                  >
                    {isIncreasePercent ? "+" : ""}
                    {numberToFixed(item?.percentage)}%
                  </span>
                ) : null}
                <span className="text-[#494F53]">
                  {item?.percentage
                    ? isIncreasePercent
                      ? "Increased"
                      : "Decreased"
                    : null}{" "}
                  {item?.description}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminDashboard;
