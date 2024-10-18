import Image from "next/image";
import Slider from "react-slick";
import { RiDoubleQuotesL } from "react-icons/ri";
import { testimonials } from "@/lib/objects";
import { RatingComp } from "../rating";

export const TestimonialComp = () => {
  // Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            alt=""
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
            alt=""
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
        {/* Heading  */}

        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-none shadow-md h-[430px] xl:h-[380px] flex flex-col justify-between"
            >
              <div>
                <RiDoubleQuotesL size={30} color="#204ECF" className="mb-3" />
                <p className="text-[15px] font-ProximaNova font-semibold mb-2">
                  {testimonial.heading}
                </p>
                <p className="text-[13px] opacity-70 leading-6">
                  {testimonial.testimony}
                </p>
                <div className="mt-3">
                  <RatingComp rating={5} />
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-bold text-[13px] font-ProximaNova">
                  {testimonial.author}
                </h3>
                <p className="text-[12px] font-ProximaNova opacity-70">
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

        <div className="lg:hidden">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-none shadow-md h-[380px]"
              >
                <div className="">
                  <RiDoubleQuotesL size={30} color="#204ECF" className="mb-3" />
                  <p className="text-[15px] font-ProximaNova font-semibold mb-2">
                    {testimonial.heading}
                  </p>
                  <p className="text-[13px] opacity-70 leading-6">
                    {testimonial.testimony}
                  </p>
                  <div className="mt-3">
                    <RatingComp rating={5} />
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-bold text-[13px] font-ProximaNova">
                    {testimonial.author}
                  </h3>
                  <p className="text-[12px] font-ProximaNova opacity-70">
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
      </div>
    </div>
  );
};
