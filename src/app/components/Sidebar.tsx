"use client";

import React from "react";
import {
  Users,
  Briefcase,
  Stethoscope,
  Baby,
  UtensilsCrossed,
  ChevronRight,
  Menu,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
  return (
    <div
      className={`h-screen bg-white border-r shadow-sm transition-all duration-300 flex flex-col relative ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Top Section */}
      <div className="relative px-4 py-3 flex items-center justify-between">
        {!collapsed ? (
          <>
            <div className="flex items-center gap-3 p-2 bg-[#F6F8F9] rounded-md w-full">
              <img
                src="/img/home.svg"
                alt="Home"
                className="h-[19.294296264648438px] w-[18.23px]"
              />
              <span className="text-base font-semibold text-[#0033A4]">
                Home
              </span>
            </div>
            <button
              onClick={toggleSidebar}
              aria-label="Collapse sidebar"
              title="Collapse sidebar"
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white text-black border rounded-full p-1 shadow-sm hover:bg-gray-100 transition"
            >
              <ChevronRight size={18} />
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center h-10 w-full"></div>
            <button
              onClick={toggleSidebar}
              aria-label="Expand sidebar"
              title="Expand sidebar"
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white text-black border rounded-full p-1 shadow-sm hover:bg-gray-100 transition"
            >
              <Menu size={18} />
            </button>
          </>
        )}
      </div>

      {/* Menu Items */}
      {!collapsed && (
        <div className="flex-1 overflow-y-auto px-2 pb-6 space-y-1 mt-">
          <SidebarItem
            icon={
              <img
                src="/img/Popular Posts.svg"
                alt="Popular Posts"
                className="h-[19px] w-[13.09px]"
              />
            }
            label="Popular Posts"
          />
          <Divider />
          <SidebarItem
            icon={
              <img
                src="/img/Q&A.svg"
                alt="Q&A"
                className="h-[19px] w-[20.73px]"
              />
            }
            label="Q&A"
          />
          <SidebarItem
            icon={
              <img
                src="/img/Health Diary.svg"
                alt="Health Diary"
                className="h-[21px] w-[15.52px]"
              />
            }
            label="Health Diary"
          />
          {/* <SidebarItem icon={<Users size={20} />} label="Communities" /> */}

        <SidebarItem
            icon={
              <img
                src="/img/Communities.svg"
                alt="Communities"
                className="h-[19px] w-[19px]"
              />
            }
            label="Communities"
          />
          <SidebarItem
            icon={
              <img
                src="/img/jobs.svg"
                alt="Jobs"
                className="h-[19px] w-[21px]"
              />
            }
            label="Jobs"
          />
          <Divider />
          <SidebarItem
            icon={
              <img
                src="/img/Dentist.svg"
                alt="Dentist"
                className="h-[18px] w-[20px]"
              />
            }
            label="Dentist"
          />
          <SidebarItem icon={<Stethoscope size={20} />} label="General Physician" />
          <SidebarItem icon={<Baby size={20} />} label="Gynaecologist" />
          <SidebarItem icon={<Baby size={20} />} label="Health Dietician" />

          
        </div>
      )}
    </div>
  );
};

function SidebarItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition text-gray-800 hover:bg-gray-100">
      <div className="text-gray-700">{icon}</div>
      <span className="truncate">{label}</span>
    </div>
  );
}

function Divider() {
  return <hr className="my-3 border-gray-200" />;
}

export default Sidebar;
