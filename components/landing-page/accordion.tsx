import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";
import { IoMdAdd } from "react-icons/io";

export const AccordionComp = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<any>(new Set([""]));
  const courses = ["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"];

  const categories1 = [
    { id: 0, title: "Web Development" },
    { id: 1, title: "DevOps & Cloud Computing" },
    { id: 2, title: "UX/UI Designers" },
    { id: 3, title: "Programming Languages" },
    { id: 4, title: "Software Development Roles & Collaboration Models" },
    { id: 5, title: "Quality Assurance & Testing" },
    { id: 6, title: "API Development & Integration" },
    { id: 7, title: "Blockchain Development" },
    { id: 8, title: "Desktop Development" },
    { id: 9, title: "AR/VR & Game Development" },
  ];

  const categories2 = [
    { id: 10, title: "Mobile Development" },
    { id: 11, title: "Data Science & AI" },
    { id: 12, title: "Database & Big Data Technologies" },
    { id: 13, title: "CMS Platforms" },
    { id: 14, title: "E-commerce & CRM Platforms" },
    { id: 15, title: "Visual & Brand Design" },
    { id: 16, title: "Product & Project Management" },
    { id: 17, title: "Finance & Business Consulting" },
    { id: 18, title: "Marketing" },
    { id: 19, title: "Trending Skills & Roles" },
  ];

  return (
    <div className="flex flex-col lg:flex-row shadow-md p-5 mt-10 items-start justify-between w-full">
      {/* Left */}
      <div className="w-full basis-[50%]">
        {categories1.map((v) => (
          <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            selectionMode="single"
          >
            <AccordionItem
              key={v.id}
              aria-label={v.title}
              className="text-black "
              indicator={<IoMdAdd size={20} color="black" />}
              title={
                <span
                  className="text-[15px] font-ProximaNova font-medium"
                  style={{ color: "black" }}
                >
                  {v.title}
                </span>
              }
            >
              <ul className="" key={v.id}>
                {courses.map((course, i) => (
                  <li className="opacity-70 text-[14px]" key={i}>
                    {course}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
      {/* Right */}
      <div className="w-full basis-[50%]">
        {categories2.map((v) => (
          <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            selectionMode="single"
          >
            <AccordionItem
              key={v.id}
              aria-label={v.title}
              className="text-black "
              indicator={<IoMdAdd size={20} color="black" />}
              title={
                <span
                  className="text-[15px] font-ProximaNova font-medium"
                  style={{ color: "black" }}
                >
                  {v.title}
                </span>
              }
            >
              <ul className="" key={v.id}>
                {courses.map((course, i) => (
                  <li className="opacity-70 text-[14px]" key={i}>
                    {course}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
