import { title as Title } from "@/components/primitives";
import { CourseOutlineComp } from "./courseOutlineComp";

export const CourseProgram = ({ data }: any) => {
  return (
    <section className="flex flex-col items-center">
      <CourseOutlineComp />
      {/* </div> */}
    </section>
  );
};
