export const SkillToLearn = ({ data }: any) => {
  return (
    <section className="w-full flex flex-col items-center bg-[#F0F5FF] py-6">
      <div className="max-w-[1250px] px-5 xl:px-0 w-full ">
        <p className="text-[17px] text-black">Skills to learn:</p>
        <div className="max-w-[600px] mt-2 flex-wrap flex  items-center">
          {data.map((v: any) => (
            <div
              key={v}
              className="py-2 px-4 rounded-full border-[#bdd2ff] m-1  border"
            >
              <p className="text-black text-[14px]">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
