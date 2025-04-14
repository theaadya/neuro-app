export const MeetingSection = () => {
  return (
    <section className="w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full text-2xl text-black max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-9 px-9 pt-7 pb-3 whitespace-nowrap bg-red-400 rounded-[30px] max-md:px-5 max-md:max-w-full">
          <div className="flex shrink-0 self-start mt-2.5 w-3 bg-white h-[265px] rounded-[30px] max-md:hidden" />
          <div className="grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex flex-col justify-center items-end px-20 py-2 bg-white bg-opacity-10 rounded-[30px] max-md:pl-5 max-md:max-w-full">
              <button className="px-6 pt-2.5 bg-white bg-opacity-50 rounded-[40px] max-md:px-5">
                Join
              </button>
            </div>
            <div className="flex shrink-0 mt-4 bg-white bg-opacity-10 h-[57px] rounded-[30px] max-md:max-w-full" />
            <div className="flex shrink-0 mt-4 bg-white bg-opacity-10 h-[57px] rounded-[30px] max-md:max-w-full" />
            <div className="flex shrink-0 mt-3 bg-white bg-opacity-10 h-[57px] rounded-[30px] max-md:max-w-full" />
          </div>
        </div>
        <h2 className="self-start mt-12 max-md:mt-10">
          REPORT OF PREVIOUS MEETING
        </h2>
      </div>
    </section>
  );
};
