import SummaryPane from "./SummaryPane";
import logo from "../assets/logo.svg";

const LoadingPage = ({ values }: any) => {
  return (
    <div className="w-5/6 flex-col justify-start items-center inline-flex">
      <img src={logo} alt="logo" />
      <h1 className="w-5/6 text-center text-stone-900 text-2xl font-bold leading-9 mt-12">
        Woohoo! Your personalized demo is being created.
      </h1>
      <p className="w-108 text-center text-stone-900 text-base font-medium leading-normal mt-2 mb-8">
        Please wait a few moments while this page loads.
      </p>
      <SummaryPane values={values} />
    </div>
  );
};

export default LoadingPage;
