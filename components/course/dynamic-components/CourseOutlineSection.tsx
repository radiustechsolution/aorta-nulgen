import { CourseProgram } from "./courseProgram";

export const CourseOutlineSectionComp = ({ data }: any) => {
  return (
    <section className="py-16">
      {/* Course in the programs */}
      <CourseProgram data={data} />
    </section>
  );
};
