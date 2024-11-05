import { FilterByComp } from "@/components/course/filterby";
import { CourseHero } from "@/components/course/hero";
import { RecomendedForYouComp } from "@/components/course/recomemdedForYou";
import { Footer } from "@/components/landing-page/footer";
import CourseLayout from "@/layouts/course";
import { loadTranslations } from "@/lib/loadTranslations";
import { GetStaticPropsContext } from "next";
import Image from "next/image";

const CoursePage = () => {
  return (
    <CourseLayout>
      <section>
        <CourseHero />
        {/* Body */}
        <div className="py-16 flex flex-col items-center">
          <div className="max-w-[1250px] w-full flex flex-col gap-10">
            {/* Filter By */}
            <div className="mb-10">
              <FilterByComp />
            </div>

            {/* Recomended For You */}
            <RecomendedForYouComp />
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
