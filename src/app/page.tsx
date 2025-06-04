"use client";
import { useState } from "react";
import AyurvedaPosts from "./components/AyurvedaPosts";
import FeedPage from "./components/FeedPage";
import FeedPage1 from "./components/FeedPage1";
import FeedPage2 from "./components/FeedPage2";
import FeedPage3 from "./components/FeedPage3";
import FeedPage4 from "./components/FeedPage4";
import FeedPage5 from "./components/FeedPage5";
import FeedPage6 from "./components/FeedPage6";
import FeedPage7 from "./components/FeedPage7";
import FeedPage9 from "./components/FeedPage9";
import TextPostCard from "./components/FeedPage8";
import PopularCommunitiesPage from "./components/PopularCommunitiesPage";
import PeopleYouMayKnow from "./components/PeopleYouMayKnow";
import ChallengeSlider from "./components/ChallengeSlider";
import SuggestedReels from "./components/SuggestedReels";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";
import MobileTopNavbar from "./components/MobileTopNavbar";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed((prev) => !prev);

  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Top Navbars */}
      <Navbar />
      <MobileTopNavbar />
      {/* Content Section */}
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <div
          className={`hidden md:block fixed top-[60px] left-0 z-40 h-[calc(100vh-60px)] bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ${
            collapsed ? "w-16" : "w-60"
          }`}
        >
          <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        </div>
        {/* Scrollable Vertical Line for Right Sidebar */}
        <div 
          className={`hidden lg:block absolute top-0 z-30 w-[2px] h-[1000px] bg-[#E3E3E3] transition-all duration-300 ${
            collapsed ? "right-[300px]" : "right-[300px]"
          }`}
        />
        {/* Main & Right Content */}
        <div
          className={`transition-all duration-300 w-full min-h-screen ${
            collapsed ? "md:ml-16" : "md:ml-60"
          } ml-0`}
        >
          {/* Container for centering content */}
          <div className="w-full max-w-9xl mx-auto px-0">
            {/* Desktop/Large Tablet Layout */}
            <div className="hidden lg:grid lg:grid-cols-5  md:pr-22 py-7 px-4 md:ms- md:me-10">
              {/* Main Feed */}
              <section className="col-span-4 space-y-4">
                <FeedPage9 />
                {/* <MobileFeedPage9 /> */}
                <FeedPage />
                {/* <MobileFeedPage /> */}
                <FeedPage1 />
                <TextPostCard />
                {/* <div className=" w-[1px] bg-gray-200"></div> */}
                <SuggestedReels />
                <FeedPage2 />
                <FeedPage3 />
                <PeopleYouMayKnow />
                <ChallengeSlider />
                <FeedPage4 />
                <FeedPage5 />
                <FeedPage6 />
                <FeedPage7 />
              </section>
              {/* Right Sidebar Content (without vertical line) */}
              <aside className="col-span-1 relative">
                <div className="sticky top-8 ml-5">
                  <PopularCommunitiesPage />
                </div>
              </aside>
            </div>
            {/* Mobile and Small Tablet Layout */}
            <div className="lg:hidden px-4 py-6 pb-20">
              {/* Main Feed */}
              <section className="space-y-4">
                <FeedPage9 />
                <FeedPage />
                <FeedPage1 />
                <TextPostCard />
                <br />
                <hr className="border-t border-gray-200 w-full h-[1px] my-4" />
                <SuggestedReels />
                <FeedPage2 />
                <FeedPage3 />
                <PeopleYouMayKnow />
                <ChallengeSlider />
                <FeedPage4 />
                <FeedPage5 />
                <FeedPage6 />
                <FeedPage7 />
                
                {/* Popular Communities moved to bottom on mobile */}
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <PopularCommunitiesPage />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <BottomNavbar />
    </main>
  );
}