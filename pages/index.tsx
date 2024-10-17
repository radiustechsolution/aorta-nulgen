import { HomeHero } from "@/components/Hero";
import { NetworkComp } from "@/components/landing-page/network-comp";
import { ProfileCard } from "@/components/landing-page/profile-card";
import { SectionWithTitle } from "@/components/landing-page/section-with-title";
import { TrustedByMany } from "@/components/landing-page/TrustedByMany";
import DefaultLayout from "@/layouts/default";
import { WhyObjects } from "@/lib/objects";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { HiSearchCircle } from "react-icons/hi";
import PartnershipSection from "@/components/landing-page/partnership";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FullWidthSection } from "@/components/landing-page/full-section-img-bg";

const TalentsObject = [
  {
    id: 0,
    talant: "Developers",
    description:
      "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
    icon_dark: "/asset/icons/tools-icon1.svg",
    icon_white: "/asset/icons/tools-icon1-white.svg",
    path: "/",
  },
  {
    id: 1,
    talant: "Marketing Experts",
    description:
      "Experts in digital marketing, growth marketing, content creation, market research, brand strategy execution, social media marketing, and more.",
    icon_dark: "/asset/icons/tools-icon2.svg",
    icon_white: "/asset/icons/tools-icon2-white.svg",
    path: "/",
  },
  {
    id: 2,
    talant: "Marketing Experts",
    description:
      "Experts in digital marketing, growth marketing, content creation, market research, brand strategy execution, social media marketing, and more.",
    icon_dark: "/asset/icons/tools-icon1.svg",
    icon_white: "/asset/icons/tools-icon1-white.svg",
    path: "/",
  },
  {
    id: 3,
    talant: "Developers",
    description:
      "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
    icon_dark: "/asset/icons/tools-icon2.svg",
    icon_white: "/asset/icons/tools-icon2-white.svg",
    path: "/",
  },
  {
    id: 4,
    talant: "Marketing Experts",
    description:
      "Experts in digital marketing, growth marketing, content creation, market research, brand strategy execution, social media marketing, and more.",
    icon_dark: "/asset/icons/tools-icon1.svg",
    icon_white: "/asset/icons/tools-icon1-white.svg",
    path: "/",
  },
  {
    id: 5,
    talant: "Marketing Experts",
    description:
      "Experts in digital marketing, growth marketing, content creation, market research, brand strategy execution, social media marketing, and more.",
    icon_dark: "/asset/icons/tools-icon2.svg",
    icon_white: "/asset/icons/tools-icon2-white.svg",
    path: "/",
  },
];

const OnDemandObject = [
  {
    id: 0,
    title: "Hire Quickly",
    description:
      "Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.",
    icon_dark: "/asset/icons/tools-icon6.svg",
    path: "/",
  },
  {
    id: 1,
    title: "The Top 3%",
    description:
      "Every applicant to the Toptal network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.",
    icon_dark: "/asset/icons/tools-icon7.svg",
    path: "/",
  },
  {
    id: 2,
    title: "Leading the Future of Work",
    description:
      "Our network is ready for tomorrow's business challenges by embracing advanced and specialized skills including blockchain and AI.",
    icon_dark: "/asset/icons/tools-icon8.svg",
    path: "/",
  },
  {
    id: 3,
    title: "A Level Above",
    description:
      "Every single freelancer in our global network embodies the highest levels of integrity, professionalism, and communication.",
    icon_dark: "/asset/icons/tools-icon9.svg",
    path: "/",
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="">
        {/* Hero */}
        <HomeHero />

        {/* Trusted By Many */}
        <div className="hidden lg:block">
          <TrustedByMany />
        </div>

        {/* Talents */}
        <SectionWithTitle
          subtitle="We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle your most important initiatives."
          title="Master in-demand job skills"
        >
          <div className="grid grid-cols-1 bg-[#D8D9DC] sm:grid-cols-2 gap-[1px] lg:grid-cols-3 mt-10">
            {TalentsObject.map((v) => (
              <div
                key={v.id}
                className="h-[340px] cursor-pointer bg-[#EBECED] hover:bg-[#204ECF] flex flex-col gap-10 p-[35px] group"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <Image
                      src={v.icon_dark}
                      width={65}
                      height={40}
                      alt="icon-s"
                      className="group-hover:hidden"
                    />
                    <Image
                      src={v.icon_white}
                      width={65}
                      height={40}
                      alt="icon-s-hover"
                      className="group-hover:block hidden"
                    />
                    <p className="font-ProximaNova text-[20px] text-black group-hover:text-white">
                      {v.talant}
                    </p>
                  </div>

                  <p className="text-black font-ProximaNova text-[15px] group-hover:text-white">
                    {v.description}
                  </p>
                </div>
                <div>
                  <div className="hidden group-hover:flex items-center justify-between">
                    <p className="text-[16px] text-black group-hover:text-white group-hover:underline">
                      View {v.talant}
                    </p>
                    <MdArrowRightAlt
                      size={20}
                      className="text-black group-hover:text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWithTitle>

        {/* On Demands */}
        <SectionWithTitle bgColor="bg-[#FCFCFC]">
          <div className="flex flex-col lg:flex-row items-center lg:items-start ">
            <div className="w-full basis-[100%] lg:basis-[60%]">
              <div className="flex flex-col text-center md:text-left items-center md:items-start gap-2">
                <p className="font-ProximaNova leading-[30px] md:leading-[56px] font-semibold text-[#191e28] text-[28px] md:text-[40px]">
                  Build Amazing Teams, <br /> On Demand
                </p>
                <p className="text-[14px] md:text-[15px] text-[#84888e]">
                  Quickly assemble the teams you need, exactly when you need
                  them.
                </p>
              </div>

              {/* Two columns on large screens, one on small */}
              <div className="flex flex-col items-center sm:grid grid-cols-1 px-10 md:px-0 sm:grid-cols-2 gap-4 mt-[70px] w-full">
                {OnDemandObject.map((v) => (
                  <div
                    key={v.id}
                    className="h-[240px] max-w-[95%] sm:max-w-[300px] items-center flex flex-col gap-10"
                  >
                    <div className="flex  flex-col gap-6">
                      <div className="flex flex-col items-center sm:items-start gap-3">
                        <Image
                          src={v.icon_dark}
                          width={65}
                          height={40}
                          alt="icon-s"
                          className="group-hover:hidden"
                        />
                        <p className="font-ProximaNova text-[20px] text-black group-hover:text-white">
                          {v.title}
                        </p>
                      </div>

                      <p className="text-[#4B556A] sm:text-left text-center font-ProximaNova text-[15px] group-hover:text-white">
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full basis-[0%] relative lg:basis-[40%] hidden lg:block h-[760px] ">
              <div className=" absolute left-[-30px] top-[20%] hidden xl:block">
                <ProfileCard pic="/asset/images-5.avif" />
              </div>
              <div className=" absolute top-0 right-10 z-10">
                <ProfileCard pic="/asset/images-6.avif" />
              </div>
              <div className=" absolute bottom-0 right-0 z-[5]">
                <ProfileCard pic="/asset/images-7.avif" />
              </div>
            </div>
          </div>
        </SectionWithTitle>

        {/* Network */}
        <SectionWithTitle title="Meet Talent in Our Network">
          <div className="mt-[70px]">
            {/* Control Large */}
            <NetworkComp />
          </div>
        </SectionWithTitle>

        {/* Image Section */}
        <SectionWithTitle
          title="Why Organizations Choose Toptal"
          subtitle="Discover the many ways in which our clients have embraced the benefits of the Toptal network."
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 px-5 md:px-0 gap-[20px] lg:grid-cols-3 mt-10">
            {WhyObjects.map((v) => (
              <div
                key={v.id}
                className="relative h-[340px] cursor-pointer bg-[#EBECED] flex flex-col gap-10 p-[35px] group"
              >
                <Image
                  src={v.bgImg}
                  layout="fill"
                  priority
                  className="transition-transform duration-500 ease-in-out"
                  quality={40}
                  objectFit="cover"
                  alt={v.bgImg}
                />

                {/* overlay */}
                <div className="w-full h-full absolute bg-[#00000063] top-0 left-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 group-hover:from-blue-900 z-20 transition-all duration-300"></div>

                {/* Logo */}
                <div className="z-30 absolute top-5 sm:top-10 left-5 sm:left-10">
                  <Image
                    src={v.logo}
                    objectFit="cover"
                    width={120}
                    height={100}
                    alt={v.logo}
                  />
                </div>

                {/* Know more */}
                <div className=" absolute bottom-5 sm:bottom-10 flex items-center gap-4 left-5 sm:left-10 z-30">
                  <div className="h-[35px] bg-white w-[35px] flex items-center justify-center rounded-full">
                    <HiSearchCircle
                      size={24}
                      className=" text-primary"
                      color="primary"
                    />
                  </div>
                  <p className="text-white font-semibold ">Know more</p>
                </div>

                <p>cnskcnksnk</p>
              </div>
            ))}
          </div>
        </SectionWithTitle>

        {/* partnerships  */}
        <SectionWithTitle
          title="Collaborations With Leading Brands"
          subtitle="We collaborate with a number of top-tier companies on imagining the future of work. Have a look."
        >
          <PartnershipSection />
        </SectionWithTitle>

        {/* Full width Section */}
        <FullWidthSection />

        {/* Testimonial */}
        <SectionWithTitle
          bgColor="bg-[#F3F4F6]"
          title="Our Clients’ Satisfaction is Our Top Priority"
          subtitle="We have a reputation for helping clients around the world find success on their most important projects."
        >
          <div></div>
        </SectionWithTitle>
      </section>
    </DefaultLayout>
  );
}
