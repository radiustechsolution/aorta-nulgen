import Image from "next/image";
import { useMemo, useState } from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { LuBarChart2 } from "react-icons/lu";
import { PiBagSimple } from "react-icons/pi";
import { jobBoardHerologos } from "@/lib/objects";
import { RxCaretDown } from "react-icons/rx";

const INPUT_HEIGHT = "h-[47px] md:h-[40px]";
const ICON_COLOR = "#A0A2B3";
const BUTTON_BG_COLOR = "#4E64FF";

export const JobBoardHero = () => {
  // State for rotating caret icons
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isJobLevelOpen, setJobLevelOpen] = useState(false);
  const [isDepartmentOpen, setDepartmentOpen] = useState(false);

  // State for each dropdown
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [selectedJobLevel, setSelectedJobLevel] = useState("Job level");
  const [selectedDepartment, setSelectedDepartment] = useState("Department");

  // Dropdown options
  const dropdownOptions = {
    location: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    jobLevel: ["Junior", "Mid-level", "Senior", "Lead"],
    department: ["Engineering", "Marketing", "Sales", "Product"],
  };

  // Reusable Input Field Component
  const JobBoardHeroInputField = ({
    placeholder,
    icon: Icon,
    isOpen,
    selectedValue,
    options,
    onClick,
    onSelect,
  }: any) => {
    return (
      <div className="relative w-full">
        <div
          role="presentation"
          className={`w-full border px-2 border-gray-200 flex items-center justify-between ${INPUT_HEIGHT} rounded-md cursor-pointer`}
          onClick={onClick}
        >
          <div className="w-[75%] flex items-center">
            <Icon color={ICON_COLOR} />
            <span className="text-[14px] bg-transparent text-black placeholder-[#6F7186] px-2 w-[90%]">
              {selectedValue}
            </span>
          </div>
          <RxCaretDown
            color={ICON_COLOR}
            className={`transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute z-10 w-full p-2 border scrollbar-hide border-gray-200 bg-white rounded-md mt-1 h-max overflow-y-auto">
            {options.map((option: string, index: number) => (
              <li
                role="presentation"
                key={index}
                className={`px-2 py-3 cursor-pointer hover:bg-gray-100 ${index !== options.length - 1 ? "border-b border-gray-200" : ""}`}
                onClick={() => onSelect(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="relative px-5 xl:px-0 h-[440px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/asset/job/hero-bg.jpg"
          layout="fill"
          quality={70}
          priority
          objectFit="cover"
          alt="hero background for job board"
          className="z-0"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col w-full items-center justify-center h-full">
        <div className="max-w-[1100px] w-full">
          <div className="max-w-[430px]">
            <p className="text-[#376fff] mb-1 uppercase text-[13px] leading-[16px] font-bold">
              Best tech jobs
            </p>
            <h1 className="text-[30px] sm:text-[36px] max-w-[380px] text-[#232535] font-semibold leading-[39px] sm:leading-[48px]">
              Find your perfect job in the tech industry
            </h1>
            <p className="text-[15px] my-2 sm:my-4 text-[#484b62] max-w-[400px] leading-[26px] font-normal">
              Explore various opportunities in top tech companies around the
              world. Let us help you find the right fit for your skills and
              aspirations.
            </p>
            {/* Company Logos */}
            <div className="flex items-center w-full justify-between">
              {jobBoardHerologos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  width={logo.width}
                  height={30}
                  className="w-[65px] sm:w-auto"
                  alt={`company logo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-[-200px] md:bottom-[-85px] left-0 lg:bottom-[-50px] xl:bottom-[-45px] z-10 w-full px-5 xl:px-0 flex items-center justify-center">
        <div className="max-w-[1100px] w-full">
          <div className="w-full p-7 shadow-md rounded-md bg-white border border-gray-100 flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Job Search Input */}
            <div
              className={`border border-gray-200 px-2 ${INPUT_HEIGHT} rounded-md flex items-center justify-between w-full lg:w-[30%]`}
            >
              <div className="w-[75%] flex items-center">
                <CiSearch color={ICON_COLOR} />
                <input
                  placeholder="Search for jobs"
                  type="text"
                  className="text-[14px] bg-transparent text-black placeholder-[#6F7186] px-2 w-[90%]"
                  aria-label="Search for jobs"
                />
              </div>
              <button
                className={`h-[77%] text-white font-semibold rounded-md w-[25%] bg-[${BUTTON_BG_COLOR}] text-[13px]`}
              >
                Search
              </button>
            </div>

            {/* Other Search Filters */}
            <div className="w-full lg:w-[70%] flex flex-col md:flex-row items-center gap-4">
              {/* Location Input Field with Custom Dropdown */}
              <JobBoardHeroInputField
                placeholder="Location"
                icon={CiLocationOn}
                isOpen={isLocationOpen}
                selectedValue={selectedLocation}
                options={dropdownOptions.location}
                onClick={() => {
                  setLocationOpen(!isLocationOpen);
                  setJobLevelOpen(false);
                  setDepartmentOpen(false);
                }}
                onSelect={(value: string) => {
                  setSelectedLocation(value);
                  setLocationOpen(false);
                }}
              />

              {/* Job Level Input Field with Custom Dropdown */}
              <JobBoardHeroInputField
                placeholder="Job level"
                icon={LuBarChart2}
                isOpen={isJobLevelOpen}
                selectedValue={selectedJobLevel}
                options={dropdownOptions.jobLevel}
                onClick={() => {
                  setJobLevelOpen(!isJobLevelOpen);
                  setLocationOpen(false);
                  setDepartmentOpen(false);
                }}
                onSelect={(value: string) => {
                  setSelectedJobLevel(value);
                  setJobLevelOpen(false);
                }}
              />

              {/* Department Input Field with Custom Dropdown */}
              <JobBoardHeroInputField
                placeholder="Department"
                icon={PiBagSimple}
                isOpen={isDepartmentOpen}
                selectedValue={selectedDepartment}
                options={dropdownOptions.department}
                onClick={() => {
                  setDepartmentOpen(!isDepartmentOpen);
                  setLocationOpen(false);
                  setJobLevelOpen(false);
                }}
                onSelect={(value: string) => {
                  setSelectedDepartment(value);
                  setDepartmentOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
