import React from "react";

export default function JobBoard() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Tech Innovators",
      location: "Remote",
      type: "Full-Time",
      description:
        "We are looking for a skilled Frontend Developer to join our team. You will work with React, Next.js, and other modern tools.",
      postedDate: "2 days ago",
    },
    {
      title: "Backend Developer",
      company: "Code Wizards",
      location: "San Francisco, CA",
      type: "Part-Time",
      description:
        "Join our backend team to build scalable APIs using Node.js and Laravel. Cloud experience is a plus.",
      postedDate: "1 week ago",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Berlin, Germany",
      type: "Contract",
      description:
        "Seeking a creative UI/UX designer to improve the user experience across multiple platforms.",
      postedDate: "3 days ago",
    },
  ];

  return (
    <div className=" bg-gray-100 py-10 h-svh">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Demo Job Board
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-2">
                {job.title}
              </h2>
              <p className="text-gray-600 font-semibold">{job.company}</p>
              <p className="text-gray-500 mb-4">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-700">{job.description}</p>
              <div className="mt-4">
                <span className="text-sm text-gray-500">
                  Posted {job.postedDate}
                </span>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
