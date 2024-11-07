import { FilterByComp } from "@/components/course/filterby";
import { CourseHero } from "@/components/course/hero";
import { CoursesDisplayComp } from "@/components/course/CoursesDisplayComp";
import { Footer } from "@/components/landing-page/footer";
import CourseLayout from "@/layouts/course";
import { loadTranslations } from "@/lib/loadTranslations";
import {
  courseFilterObject,
  DataSkillsCourses,
  LearnNewSkill,
  PopularCourses,
} from "@/lib/objects";
import { GetStaticPropsContext } from "next";

const CoursePage = () => {
  return (
    <CourseLayout>
      <section>
        <CourseHero />
        {/* Body */}
        <div className="py-16 flex flex-col items-center">
          <div className="max-w-[1250px] w-full flex flex-col gap-16">
            {/* Filter By */}
            <div className="mb-10">
              <FilterByComp />
            </div>

            {/* Recomended For You */}
            <CoursesDisplayComp
              title="Courses Recommended for You"
              data={courseFilterObject}
            />

            {/* Most Popular Courses */}
            <CoursesDisplayComp
              title="Most Popular Courses"
              data={PopularCourses}
            />

            {/* Top AI & Data Skills Courses */}
            <CoursesDisplayComp
              title="Top AI & Data Skills Courses"
              data={DataSkillsCourses}
            />

            {/* Courses to Learn New Skills in 30 Days */}
            <CoursesDisplayComp
              title="Courses to Learn New Skills in 30 Days"
              data={LearnNewSkill}
            />
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
