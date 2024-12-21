import React from 'react'
import TagIcon from "@/assets/tag.svg";
import ChartPieIcon from "@/assets/chart_pie.svg";
import ChatTearTextIcon from "@/assets/chat_tear_text.svg";
import Link from 'next/link';

const navs = [
  {
    title:"Summary",
    url: "/summary",
    icon: ChartPieIcon
  },
  {
    title: "Sales",
    url: "/sales",
    icon: TagIcon
  },
  {
    title: "Chats",
    url: "/chat",
    icon: ChatTearTextIcon
  }
]

const AppNavbar = () => {
  return (
    <div className='flex px-10 border-b w-full py-3 items-center gap-3'>
      {navs.map((nav) => (
        <Link href={nav.url} className='p-3 rounded-full flex items-center gap-3 hover:bg-accent hover:text-accent-foreground font-medium text-[18px]' key={nav.title} title={nav.title}>
          <nav.icon />
          <div>{nav.title}</div>
        </Link>
      ))}
    </div>
  )
}

export default AppNavbar