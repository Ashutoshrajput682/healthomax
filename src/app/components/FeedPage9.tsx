'use client';

import React from "react";
import Image from "next/image";

export default function AskNowCard() {
  return (
    <div className="w-full px-4 mt-10">
      <div className="bg-[#0033A4] rounded-xl p-4 shadow text-white max-w-10xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-shrink-0">
            <Image
              src="/Group (2).png"
              alt="avatar"
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-sm sm:text-base md:text-lg font-medium mb-2">
              Lorem ipsum dolor sit amet consectetur. Aliquam in aliquam ac ornare a tristique aliquam..
            </h2>
            <button className="mt-2 px-4 py-2 text-white border border-white rounded-lg font-semibold text-sm hover:bg-white hover:text-[#0033A4] transition">
              Ask Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
