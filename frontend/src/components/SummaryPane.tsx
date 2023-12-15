const SummaryPane = ({ values }: any) => {
  if (Object.keys(values).length === 0) {
    return (
      <div className="w-4/6 h-72 p-8 bg-gray-50 rounded-lg flex flex-col justify-start items-center gap-2 inline-flex">
        <div className="pb-3 justify-start items-center gap-2.5 inline-flex">
          <div className="text-black text-sm font-bold uppercase">
            nothing selected
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-4/6 h-72 p-8 bg-gray-50 rounded-lg flex flex-col justify-start items-center gap-2 inline-flex">
        <div className="pb-3 justify-start items-center gap-2.5 inline-flex">
          <div className="text-black text-sm font-bold uppercase">
            here is what you selected
          </div>
        </div>
        <div className="w-5/6 justify-center items-start inline-flex">
          <div className="w-2/6 text-stone-900 text-base font-bold leading-normal ">
            Industry:
          </div>
          <div className="grow shrink basis-0 text-stone-900 text-base font-medium leading-normal text-left ">
            {values.industry}
          </div>
        </div>
        <div className="w-5/6 justify-center items-start inline-flex">
          <div className="w-2/6 text-stone-900 text-base font-bold leading-normal">
            Business Goals:
          </div>
          <div className="grow shrink basis-0 text-stone-900 text-base font-medium leading-normal text-left ">
            {values.marketingGoals}
            {values.marketingGoals ? <br /> : null}
            {values.supportGoals}
            {values.supportGoals ? <br /> : null}
            {values.businessServices}
          </div>
        </div>
        <div className="w-5/6 justify-center items-start inline-flex">
          <div className="w-2/6 text-stone-900 text-base font-bold leading-normal ">
            Yext Services:
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center inline-flex">
            <div className="self-stretch justify-center items-start inline-flex">
              <div className="grow shrink basis-0 text-stone-900 text-base font-medium leading-normal text-left ">
                {values.yextServices}
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 justify-center items-start inline-flex">
          <div className="w-2/6 text-stone-900 text-base font-bold leading-normal">
            Entity Types:
          </div>
          <div className="grow shrink basis-0 text-stone-900 text-base font-medium leading-normal text-left ">
            {values.customEntityTypes.map((type: any) => type + ", ")}
          </div>
        </div>
      </div>
    );
  }
};

export default SummaryPane;
