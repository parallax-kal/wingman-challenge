import React from "react";
import TagIcon from "@/assets/tag.svg";
import ChartPieIcon from "@/assets/chart_pie.svg";
import ChatTearTextIcon from "@/assets/chat_tear_text.svg";
import { TabsList, TabsTrigger } from "../ui/tabs";

const navs = [
  {
    title: "Summary",
    icon: ChartPieIcon,
  },
  {
    title: "Sales",
    url: "/sales",
    icon: TagIcon,
  },
  {
    title: "Chats",
    url: "/chat",
    icon: ChatTearTextIcon,
  },
];

const HomeNavbar = () => {
  return (
    <TabsList className="flex rounded-none bg-background px-8 border-b w-full py-3 items-center justify-start h-auto gap-3">
      {navs.map((nav) => (
        <TabsTrigger
          className="py-2 px-4 rounded-full flex items-center gap-3 hover:bg-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground hover:text-accent-foreground font-medium text-[18px]"
          value={nav.title}
          key={nav.title}
        >
          <nav.icon />
          <div>{nav.title}</div>
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

export default HomeNavbar;
