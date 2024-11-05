import { CourseHero } from "@/components/course/hero";
import { Footer } from "@/components/landing-page/footer";
import CourseLayout from "@/layouts/course";
import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

const courseFilterObject = [
  {
    id: 0,
    title: "Data Science",
    icon: "/asset/course-icon/school-data-sci-one.svg",
  },
  {
    id: 1,
    title: "Programming & Development",
    icon: "/asset/course-icon/computer-mouse-two.svg",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    icon: "/asset/course-icon/hand-plant-one.svg",
  },
  {
    id: 3,
    title: "Business",
    icon: "/asset/course-icon/person-shield-stars-two.svg",
  },
  {
    id: 4,
    title: "Autonomous Systems",
    icon: "/asset/course-icon/school-ai-one.svg",
  },
  {
    id: 5,
    title: "Product Management",
    icon: "/asset/course-icon/school-autonomous-sys-one.svg",
  },
  {
    id: 6,
    title: "Cloud Computing",
    icon: "/asset/course-icon/school-business-one.svg",
  },
];

const CoursePage = () => {
  return (
    <CourseLayout>
      <section>
        <CourseHero />
        {/* Body */}
        <div className="py-16 flex flex-col items-center">
          <div className="max-w-[1250px] w-full">
            {/* Filter By */}
            <div className="flex flex-col gap-7 w-full">
              <p className="text-[24px] px-5 lg:px-0 font-[500] leading-[32px] text-[#0b0b0b]">
                Explore courses by job function
              </p>
              {/* Add wrapper to handle horizontal scroll */}
              <div className="flex items-center gap-3 overflow-x-auto w-full">
                {courseFilterObject.map((course) => (
                  <div
                    key={course.id}
                    className={`min-w-[165px] ${course.id == 0 && "ml-5 lg:ml-0"} h-[155px] bg-[#F0F5FF] rounded-sm flex flex-col items-center justify-center`}
                  >
                    <Image
                      src={course.icon}
                      width={60}
                      height={60}
                      alt={`Icon for ${course.title}`}
                    />
                    <p className="text-black opacity-75 text-center text-[16px]">
                      {course.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </CourseLayout>
  );
};

export default CoursePage;

// Fetch the translations based on the locale
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await loadTranslations(locale || "en-US");

  return {
    props: {
      messages,
    },
  };
}
