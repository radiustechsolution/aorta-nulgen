import Image from "next/image";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";
import { testimonials } from "@/lib/objects"; // Import your testimonials array
import { RatingComp } from "../rating"; // Assuming RatingComp is a reusable rating component
import { useState } from "react";

export const TestimonialComp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Settings for react-slick Slider
  const settings = {
    dots: false, // Disable built-in dots because we are creating custom dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 768, // Mobile and tablet sizes
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-[70px]">
      {/* Top Comp */}
      <div className="flex items-center gap-5 sm:gap-10 w-full justify-center">
        <div className="flex items-center gap-3">
          <Image
            src="/asset/globe.svg"
            className="w-[30px] sm:w-[50px]"
            alt="Countries Served"
            width={50}
            height={50}
          />
          <div className="">
            <p className="text-[17px] text-black sm:text-[20px] font-ProximaNova font-bold">
              140+
            </p>
            <p className="text-[12px] text-gray-500">Countries Served</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/asset/clients.svg"
            className="w-[30px] sm:w-[50px]"
            alt="Clients Served"
            width={50}
            height={50}
          />
          <div className="">
            <p className="text-[17px] text-black sm:text-[20px] font-ProximaNova font-bold">
              25,000+
            </p>
            <p className="text-[12px] text-gray-500">Clients Served</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        {/* Heading */}

        {/* Desktop version */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-none shadow-md h-[430px] xl:h-[380px] flex flex-col justify-between"
            >
              <div>
                <RiDoubleQuotesL size={30} color="#204ECF" className="mb-3" />
                <p className="text-[15px] text-black font-ProximaNova font-semibold mb-2">
                  {testimonial.heading}
                </p>
                <p className="text-[13px] text-black opacity-70 leading-6">
                  {testimonial.testimony}
                </p>
                <div className="mt-3">
                  <RatingComp rating={5} />
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-bold text-black text-[13px] font-ProximaNova">
                  {testimonial.author}
                </h3>
                <p className="text-[12px] text-black font-ProximaNova opacity-70">
                  {testimonial.title}
                </p>
                <Image
                  className="mt-3"
                  src={testimonial.company}
                  alt={testimonial.heading}
                  width={110}
                  height={100}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile version */}
        <div className="lg:hidden overflow-hidden">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-none shadow-md h-[380px]"
              >
                <div className="">
                  <RiDoubleQuotesL size={30} color="#204ECF" className="mb-3" />
                  <p className="text-[15px] text-black font-ProximaNova font-semibold mb-2">
                    {testimonial.heading}
                  </p>
                  <p className="text-[13px] text-black opacity-70 leading-6">
                    {testimonial.testimony}
                  </p>
                  <div className="mt-3">
                    <RatingComp rating={5} />
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-bold text-black text-[13px] font-ProximaNova">
                    {testimonial.author}
                  </h3>
                  <p className="text-[12px] text-black font-ProximaNova opacity-70">
                    {testimonial.title}
                  </p>
                  <Image
                    className="mt-3"
                    src={testimonial.company}
                    alt={testimonial.heading}
                    width={110}
                    height={100}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom Pagination dots */}
        <div className="flex justify-center mt-5">
          {testimonials.map((_, i) => (
            <div
              role="presentation"
              key={i}
              onClick={() => setCurrentSlide(i)} // Allow clicking on dots to change the slide
              className={`cursor-pointer w-2 h-2 mx-1 rounded-full ${
                currentSlide === i ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
