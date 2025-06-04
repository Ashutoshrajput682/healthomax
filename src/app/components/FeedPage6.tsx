'use client';

export default function SelectLanguageCard() {
  return (
    <div className="w-full px-4 mt-3">
      <div className="bg-white border rounded-2xl shadow p-4 text-center space-y-6 max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
          To have a personalised feed, please select your <br className="hidden sm:block" />
          preferred language
        </h2>

        {/* Icon Circle */}
        <div className="flex justify-center">
          <div className=" p-4 sm:p-4 md:p-6 lg:p-8">
            <img
              src="/Group 1000002674.png"
              alt="Language Icon"
              className="w-[120px] h-[120px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px]"
            />
          </div>
        </div>

        {/* Button */}
        <button className="px-6 py-2 sm:px-8 sm:py-2.5 rounded-full bg-[#0033A4] text-white font-semibold hover:bg-blue-800 transition text-sm sm:text-base mx-auto">
          Select Language
        </button>
      </div>
    </div>
  );
}
