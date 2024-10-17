import Image from "next/image"; // if you're using Next.js

const partnerships = [
  {
    id: 1,
    title:
      "The Opportunity Loop: An Inside Look at How to Attract and Retain Top Talent",
    partnership: "Toptal + Motorola",
    imgSrc: "/asset/partner-1.jpeg",
    logo: "/asset/partner-2.svg", // Partner logo
  },
  {
    id: 2,
    title:
      "Industry Perspective: Salesforce On Team Alignment And Agile Talent",
    partnership: "Toptal + Salesforce",
    imgSrc: "/asset/partner-2.jpeg",
    logo: "/asset/partner-2.svg", // Partner logo
  },
  {
    id: 3,
    title: "Call to Action: the On-Demand Business Model",
    partnership: "Toptal + Microsoft",
    imgSrc: "/asset/partner-3.jpeg",
    logo: "/asset/partner-3.svg", // Partner logo
  },
];

const ToptalLogo = "/asset/svg/comp-logo.svg"; // Toptal logo

export default function PartnershipSection() {
  return (
    <div className="container mx-auto mt-7 p-5 cursor-pointer">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {partnerships.map((partnership) => (
          <div
            key={partnership.id}
            className="bg-white shadow-lg overflow-hidden relative group"
          >
            {/* Image */}
            <div className="relative h-[250px] w-full">
              <Image
                src={partnership.imgSrc}
                layout="fill"
                objectFit="cover"
                alt={partnership.title}
              />

              {/* Faint blue overlay on hover */}
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* Read More text in the center on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-lg">Read More</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between group-hover:bg-gray-50 h-[250px]">
              <div className="">
                <h3 className="text-blue-900 font-semibold text-sm">
                  Toptal Partnership
                </h3>
                <h2 className="text-[22px] text-black group-hover:text-blue-800 font-bold mt-2">
                  {partnership.title}
                </h2>
              </div>
              <div className="mt-4 flex border-t pt-3 border-gray-200 items-center space-x-2">
                {/* Toptal Logo */}
                <Image
                  src={ToptalLogo}
                  width={100}
                  height={20}
                  alt="Toptal Logo"
                />
                <p>+</p>
                {/* Partner Logo */}
                <Image
                  src={partnership.logo}
                  width={100}
                  height={20}
                  alt={`${partnership.partnership} Logo`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 items-center mt-10">
        <p className="text-black font-semibold text-[18px]">
          Ready to get started?
        </p>
        <button className="bg-green-500 text-white font-semibold px-10 py-3 rounded-md hover:bg-green-600 transition">
          Hire Top Talent
        </button>
      </div>
    </div>
  );
}
