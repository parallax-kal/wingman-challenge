import HomeNavbar from "@/components/common/home-navbar";
import HomeSummary from "@/components/common/home-summary";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import React from "react";

const HomePage = () => {
  return (
    <Tabs defaultValue="Summary" className="w-full">
      <HomeNavbar />
      <TabsContent value="Summary">
        <HomeSummary />
      </TabsContent>
    </Tabs>
  );
};

export default HomePage;
