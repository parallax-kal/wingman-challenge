"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import HomeIcon from "@/assets/home.svg";
import ChatIcon from "@/assets/chat_tear_drop.svg";
import Users4Icon from "@/assets/users_4.svg";
import Logo from "@/assets/logo.svg";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import GearIcon from "@/assets/gear.svg";

const navs = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Chat",
    url: "/chat",
    icon: ChatIcon,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users4Icon,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon" className="border-r-4 border-solid">
      <SidebarHeader className="items-center pt-6">
        <Logo />
        <Separator className="w-[28px] my-5" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="items-center">
              {navs.map((nav) => (
                <SidebarMenuItem key={nav.title}>
                  <SidebarMenuButton
                    data-active={nav.url === pathname}
                    asChild
                  >
                    <Link href={nav.url}>
                      <nav.icon />
                      <span>{nav.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="pb-6 items-center">
        <Link href="/">
          <GearIcon className="text-sidebar-foreground" />
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
