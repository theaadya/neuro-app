export const ActionButtons = () => {
  return (
    <section className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="self-stretch my-auto text-2xl text-black max-md:mt-10 max-md:max-w-full">
        <button className="w-full px-16 py-6 bg-rose-200 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
          SYNC WITH CALENDER
        </button>
        <button className="w-full px-16 pt-2.5 mt-12 text-center bg-rose-200 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          GENERATE PREVIOUS <br />
          MEETING REPORT
        </button>
        <button className="w-full px-14 py-6 mt-12 bg-rose-200 rounded-[80px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          SUMMARISE MEETING POINTS
        </button>
      </div>
    </section>
  );
};
