import { NetworkComp } from "@/components/landing-page/network-comp";
import DefaultLayout from "@/layouts/default";
import { TalentsObject, WhyObjects } from "@/lib/objects";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { HiSearchCircle } from "react-icons/hi";
import PartnershipSection from "@/components/landing-page/partnership";
import { FullWidthSection } from "@/components/landing-page/full-section-img-bg";
import { TestimonialComp } from "@/components/landing-page/TestimonialComp";
import { LatestPublication } from "@/components/landing-page/latest";
import { AccordionComp } from "@/components/landing-page/accordion";
import { NulgenButton } from "@/components/button";
import { GetStaticPropsContext } from "next";
import { loadTranslations } from "@/lib/loadTranslations";
import { useTranslations } from "next-intl";
import React from "react";
import { HomeHero } from "@/components/Hero";
import { ProfileCard } from "@/components/landing-page/profile-card";
import { SectionWithTitle } from "@/components/landing-page/section-with-title";
import { TrustedByMany } from "@/components/landing-page/TrustedByMany";
import { Footer } from "@/components/landing-page/footer";

const OnDemandObject = [
  {
    id: 0,
    title: "on_demand_hire_quickly",
    description: "on_demand_hire_quickly_description",
    icon_dark: "/asset/icons/tools-icon6.svg",
    path: "/",
  },
  {
    id: 1,
    title: "on_demand_top_3_percent",
    description: "on_demand_top_3_percent_description",
    icon_dark: "/asset/icons/tools-icon7.svg",
    path: "/",
  },
  {
    id: 2,
    title: "on_demand_leading_future_work",
    description: "on_demand_leading_future_work_description",
    icon_dark: "/asset/icons/tools-icon8.svg",
    path: "/",
  },
  {
    id: 3,
    title: "on_demand_a_level_above",
    description: "on_demand_a_level_above_description",
    icon_dark: "/asset/icons/tools-icon9.svg",
    path: "/",
  },
];

export default function IndexPage() {
  const t = useTranslations("common");

  return (
    <DefaultLayout>
      <section className="">
        {/* Hero */}
        <HomeHero />

        {/* Trusted By Many */}
        <div className="hidden lg:block">
          <TrustedByMany />
        </div>

        {/* <div className="flex flex-col mt-10 items-center">
          <div className="max-w-[1220px] overflow-hidden">
            <ProfileSlider />
          </div>
        </div> */}

        {/* Talents */}
        <SectionWithTitle
          title={t("landing_talent.title")}
          subtitle={t("landing_talent.subtitle")}
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
                      {t(`landing_talent.${v.talent}`)}
                    </p>
                  </div>

                  <p className="text-black font-ProximaNova text-[15px] group-hover:text-white">
                    {t(`landing_talent.${v.description}`)}
                  </p>
                </div>
                <div>
                  <div className="hidden group-hover:flex items-center justify-between">
                    <p className="text-[16px] text-black group-hover:text-white group-hover:underline">
                      View {t(`landing_talent.${v.talent}`)}
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
                  {t("on_demands.title")
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index <
                          t("on_demands.title").split("\n").length - 1 && (
                          <br />
                        )}
                      </React.Fragment>
                    ))}
                </p>
                <p className="text-[14px] md:text-[15px] text-[#84888e]">
                  {t("on_demands.subtitle")}
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
                          {t(`on_demands.object.${v.title}`)}
                        </p>
                      </div>

                      <p className="text-[#4B556A] sm:text-left text-center font-ProximaNova text-[15px] group-hover:text-white">
                        {t(`on_demands.object.${v.description}`)}
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
          <div className="mt-[40px] border border-gray-200"></div>
          <TestimonialComp />
        </SectionWithTitle>

        {/* Latest */}
        <SectionWithTitle title="Explore Trending Toptal Publications">
          <LatestPublication />
          <div className="w-full flex items-center justify-center">
            <p className="text-black py-2 cursor-pointer hover:text-secondaryBlue font-semibold mt-8 px-4 text-[14px] border w-max border-gray-400 rounded-md">
              Read More Thought Leadership
            </p>
          </div>
        </SectionWithTitle>

        {/* Accordion */}
        <SectionWithTitle
          title="Discover Our Expert Skillsets"
          bgColor="bg-[#FCFCFC]"
        >
          <AccordionComp />
        </SectionWithTitle>

        {/* Hire */}
        <SectionWithTitle>
          <div className="flex flex-col items-center sm:flex-row justify-center gap-5">
            <p className="text-black font-normal font-ProximaNova text-[18px] sm:text-[24px]">
              Top talent is in high demand.
            </p>
            <NulgenButton />
          </div>
        </SectionWithTitle>
      </section>
      <Footer />
    </DefaultLayout>
  );
}

// Fetch the translations based on the locale
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await loadTranslations(locale || "en-US");

  return {
    props: {
      messages,
    },
  };
}
