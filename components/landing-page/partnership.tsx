import Image from "next/image"; // if you're using Next.js

const partnerships = [
  {
    id: 1,
    title:
      "The Opportunity Loop: An Inside Look at How to Attract and Retain Top Talent",
    partnership: "Toptal + Motorola",
    imgSrc: "/asset/partner-1.jpeg", // replace with actual image path
  },
  {
    id: 2,
    title:
      "Industry Perspective: Salesforce On Team Alignment And Agile Talent",
    partnership: "Toptal + Salesforce",
    imgSrc: "/asset/partner-2.jpeg", // replace with actual image path
  },
  {
    id: 3,
    title: "Call to Action: the On-Demand Business Model",
    partnership: "Toptal + Microsoft",
    imgSrc: "/asset/partner-3.jpeg", // replace with actual image path
  },
];

export default function PartnershipSection() {
  return (
    <div className="container mx-auto mt-7 p-5 cursor-pointer">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {partnerships.map((partnership) => (
          <div
            key={partnership.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative h-[250px] w-full">
              <Image
                src={partnership.imgSrc}
                layout="fill"
                objectFit="cover"
                alt={partnership.title}
              />
            </div>
            <div className="p-5">
              <h3 className="text-blue-900 font-semibold text-sm">
                Toptal Partnership
              </h3>
              <h2 className="text-[25px] font-bold mt-2">
                {partnership.title}
              </h2>
              <div className="mt-4 flex items-center space-x-2">
                <span className="text-gray-500 text-sm">
                  {partnership.partnership}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 items-center mt-10">
        <p className="text-black font-semibold text-[18px]">
          Ready to get started?
        </p>
        <button className="bg-green-500 text-white font-semibold px-10 py-3 rounded-lg hover:bg-green-600 transition">
          Hire Top Talent
        </button>
      </div>
    </div>
  );
}
