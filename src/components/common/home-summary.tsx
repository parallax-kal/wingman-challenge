import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CheckIcon from "@/assets/check.svg";
import CoinIcon from "@/assets/coin.svg";
import CoinsIcon from "@/assets/coins.svg";
import PigIcon from "@/assets/pig.svg";
import ChatTearDropIcon from "@/assets/chat_tear_drop_short.svg";
import TagIcon from "@/assets/tag_short.svg";
import UpTrendIcon from "@/assets/up_trend.svg";
import DownTrendIcon from "@/assets/down_trend.svg";

const glances = [
  {
    icon: ChatTearDropIcon,
    title: "Consultations",
    total: 24,
    value: 15,
    type: "increase",
  },
  {
    icon: TagIcon,
    title: "ORDERS PLACED",
    total: 12,
    value: 15,
    type: "decrease",
  },
  {
    icon: CheckIcon,
    title: "CONVERSION",
    total: 50,
    value: 15,
    type: "decrease",
  },
  {
    icon: CoinsIcon,
    title: "TOTAL SALES VALUE",
    total: 2400,
    value: 15,
    type: "increase",
  },
  {
    icon: CoinIcon,
    title: "AVG ORDER VALUE",
    total: 240,
    value: 15,
    type: "increase",
  },
  {
    icon: PigIcon,
    title: "COMMISSION PAID",
    total: 240,
    value: 15,
    type: "increase",
  },
];

const HomeSummary = () => {
  return (
    <div className="p-6">
      <div className="summary-container rounded-[20px] p-5">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="text-accent-foreground font-medium text-[25px] leading-[38.4px]">
              At a glance
            </div>
            <Select defaultValue="7days">
              <SelectTrigger className="w-fit">
                <SelectValue placeholder="Select day" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days"> 7 days</SelectItem>
                <SelectItem value="30days">30 days</SelectItem>
                <SelectItem value="90days">90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-5 grid-cols-3 py-4">
            {glances.map((glance, index) => (
              <div
                className="flex p-5 gap-2 rounded-[20px] flex-col summary-container"
                key={glance.title}
              >
                <div className="flex items-center gap-2">
                  <glance.icon color="hsla(221, 13%, 46%)" />
                  <div className="font-semibold text-[12px] leading-[30px] tracking-[0.5px] text-card-foreground">
                    {glance.title}
                  </div>
                </div>
                <div className="text-accent-foreground font-medium text-[32px] leading-[38.4px]">
                  {index > 2
                    ? `$${glance.total}`
                    : index === 2
                    ? `${glance.total}%`
                    : glance.total}
                </div>
                <div className="flex gap-2 items-center">
                  {glance.type === "increase" ? (
                    <UpTrendIcon className="text-accent" />
                  ) : (
                    <DownTrendIcon className="text-accent" />
                  )}
                  <span className="text-destructive-foreground text-[14px] leading-[21.98px]">
                    {glance.value}%
                  </span>
                  <span className="text-card-foreground text-[14px] leading-[21.98px]">
                    {glance.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSummary;
