import Image from "next/image";
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { LuPenTool, LuBarChart2, LuListTodo } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";
import { NulgenButton } from "../button";
import { Select, SelectItem } from "@nextui-org/react";
import Slider from "react-slick";

const ControlObject = [
  {
    id: 0,
    title: "Developers",
    img: "/asset/icons/tools-icon1.svg",
    icon: <FaCode className="text-primary" />,
  },
  {
    id: 1,
    title: "Designers",
    img: "/asset/icons/tools-icon2.svg",
    icon: <LuPenTool className="text-primary" />,
  },
  {
    id: 2,
    title: "Finance Experts",
    img: "/asset/icons/tools-icon3.svg",
    icon: <LuBarChart2 className="text-primary" />,
  },
  {
    id: 3,
    title: "Project Managers",
    img: "/asset/icons/tools-icon4.svg",
    icon: <LuListTodo className="text-primary" />,
  },
  {
    id: 4,
    title: "Product Managers",
    img: "/asset/icons/tools-icon5.svg",
    icon: <AiOutlineProduct className="text-primary" />,
  },
  {
    id: 5,
    title: "Marketing Experts",
    img: "/asset/icons/tools-icon6.svg",
    icon: <MdOutlineSell className="text-primary" />,
  },
];

export const NetworkComp = () => {
  const [active, setActive] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel settings for small screens
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: any, newIndex: any) => setCurrentSlide(newIndex),
  };

  return (
    <div className="px-5 md:px-0">
      {/* Controls for larger screens */}
      <div className="border-t hidden border-b h-[70px] border-[#D8D9DC] lg:flex items-center justify-between">
        {ControlObject.map((v) => (
          <div
            role="presentation"
            key={v.id}
            className={`w-full cursor-pointer ${
              active === v.id ? "bg-[#173A9E]" : "bg-transparent"
            } rounded-md flex items-center gap-2 justify-center border-r border-[#D8D9DC] h-[60%]`}
            onClick={() => setActive(v.id)}
          >
            <div
              className={`${active === v.id ? "text-white" : "text-[#173A9E]"}`}
            >
              {v.icon}
            </div>
            <p
              className={`${
                active === v.id ? "text-white" : "text-black"
              } text-[13px] lg:text-[14px]`}
            >
              {v.title}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden">
        <Select
          radius="none"
          size={"md"}
          color="primary"
          startContent={ControlObject[active]?.icon}
          labelPlacement="inside"
          placeholder={`${ControlObject[active]?.title}`}
          className="w-full border border-zinc-300 bg-white"
          onChange={(e) => setActive(Number(e.target.value))}
        >
          {ControlObject.map((v) => (
            <SelectItem className="rounded-none" key={v.id}>
              {v.title}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* Profile cards section */}
      <div className="mt-8 w-full">
        <div className="w-full">
          {/* Conditional rendering: show carousel on small screens, grid on larger screens */}
          <div className="relative md:hidden w-full pb-11 overflow-hidden">
            {/* The container now holds only the slides with overflow hidden */}
            <Slider {...settings} className="relative">
              {[1, 2, 3].map((v, i) => (
                <div key={i} className="w-full px-3">
                  <div className="relative h-[200px] w-full ">
                    <Image
                      layout="fill"
                      src={"/asset/images-3.avif"}
                      alt="profile-card-img"
                      objectFit="cover"
                    />
                  </div>
                  <div className="bg-white my-6 px-4">
                    <p className="font-ProximaNova font-semibold text-[#204ecf]">
                      Carole Crawford, CFA
                    </p>
                    {/* Verified */}
                    <div className="my-4">
                      <div className="flex items-center gap-0">
                        <VscVerifiedFilled size={14} color="green" />
                        <p className="font-ProximaNova font-semibold text-[12px] text-green-700">
                          Verified Expert
                        </p>
                        <p className="font-ProximaNova ml-1 text-[12px] text-green-700">
                          In France
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="uppercase text-[13px] text-gray-600">
                        Previously at
                      </p>
                      <Image
                        width={150}
                        height={40}
                        src={"/asset/svg/comp2.svg"}
                        alt="at"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Pagination dots (if custom pagination) */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2">
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`cursor-pointer w-2 h-2 mx-1 rounded-full ${
                      currentSlide === i ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* // Grid layout for larger screens */}
          <div className="hidden md:flex flex-wrap gap-7 lg:gap-5">
            {[1, 2, 3].map((v, i) => (
              <div
                key={i}
                className="mid-shadow w-[calc(32%-10px)] lg:w-[calc(24%-10px)] bg-white px-3 pt-3"
              >
                <div className="relative h-[200px] w-full ">
                  <Image
                    layout="fill"
                    src={"/asset/images-3.avif"}
                    alt="profile-card-img"
                    objectFit="cover"
                  />
                </div>
                <div className="bg-white my-6 px-4">
                  <p className="font-ProximaNova font-semibold text-[#204ecf]">
                    Carole Crawford, CFA
                  </p>
                  <div className="my-4">
                    <div className="flex items-center gap-0">
                      <VscVerifiedFilled size={14} color="green" />
                      <p className="font-ProximaNova font-semibold text-[12px] text-green-700">
                        Verified Expert
                      </p>
                      <p className="font-ProximaNova ml-1 text-[12px] text-green-700">
                        In France
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="uppercase text-[13px] text-gray-600">
                      Previously at
                    </p>
                    <Image
                      width={150}
                      height={40}
                      src={"/asset/svg/comp2.svg"}
                      alt="at"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Fourth profile card */}
            <div
              className="w-full hidden lg:flex mid-shadow md:w-[calc(24%-10px)] bg-cover bg-center px-3 pt-3 relative h-[200px] lg:h-auto mt-5 lg:mt-0"
              style={{ backgroundImage: "url('/asset/card-bg.jpg')" }}
            >
              {/* Overlay Text */}
              <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">
                <div className="max-w-[70%] flex flex-col items-center gap-3">
                  <p className="text-[20px] font-bold text-white text-center">
                    Discover 20,000+ more talents
                  </p>
                  <p className="text-white text-center">
                    in the TopTal Network
                  </p>
                  <NulgenButton width={170} title="Discover Top Talents" />
                </div>
              </div>
            </div>
          </div>

          {/* Fourth profile card */}
          <div
            className="w-full lg:hidden mid-shadow lg:w-[calc(50%-10px)] xl:w-[calc(25%-10px)] bg-cover bg-center px-3 pt-3 relative h-[200px] lg:h-auto mt-10 lg:mt-0"
            style={{ backgroundImage: "url('/asset/card-bg.jpg')" }}
          >
            {/* Overlay Text */}
            <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-black bg-opacity-50 text-white">
              <div className="max-w-[70%] flex flex-col items-center gap-3">
                <p className="text-[20px] font-bold text-white text-center">
                  Discover 20,000+ more talents
                </p>
                <p className="text-white text-center">in the TopTal Network</p>
                <NulgenButton width={170} title="Discover Top Talents" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
