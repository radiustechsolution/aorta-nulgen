import { CourseLevelDuration } from "@/components/course/dynamic-components/courseInfo";
import { CourseOutlineComp } from "@/components/course/dynamic-components/courseOutlineComp";
import { CourseOutlineSectionComp } from "@/components/course/dynamic-components/CourseOutlineSection";
import { CourseProgram } from "@/components/course/dynamic-components/courseProgram";
import { DynamicHeroComp } from "@/components/course/dynamic-components/hero";
import { SkillToLearn } from "@/components/course/dynamic-components/skillsToLearn";
import { Footer } from "@/components/landing-page/footer";
import { siteConfig } from "@/config/site";
import CourseLayoutDetails from "@/layouts/courseLayout";
import { courseFilterObject } from "@/lib/objects";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CourseDetails() {
  // Hook
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;

  // State
  const [loading, setLoading] = useState(true);

  // Find the company details by name
  const course = courseFilterObject.find((c) => c.course_id === id);

  if (!course) {
    return (
      <CourseLayoutDetails>
        <section className="items-center justify-center flex">
          {/* <div className="flex flex-col items-center gap-3 ">
              <p className={`text-black ${title({ size: "sm" })}`}>404</p>
              <p className={`text-black ${title({ size: "sm" })}`}>
                Course was not found
              </p>
            </div> */}
        </section>
      </CourseLayoutDetails>
    );
  }

  return (
    <CourseLayoutDetails>
      <section>
        {/* Hero */}
        <DynamicHeroComp data={course} />

        {/* Level and duration */}
        <CourseLevelDuration />

        {/* Skills to learn */}
        <SkillToLearn data={course.skillsToLearn} />

        {/* Course Outline */}
        <CourseOutlineComp data={course} />
      </section>
      <Footer />
    </CourseLayoutDetails>
  );
}
