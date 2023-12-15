import logo from "../assets/logo.svg";
import content from "../assets/content.png";
import search from "../assets/search.png";
import pages from "../assets/pages.png";
import listings from "../assets/listings.png";
import analytics from "../assets/analytics.png";
import chat from "../assets/chat.png";
import reviews from "../assets/reviews.png";

import { Field } from "formik";

const CustomRadio = ({
  value,
  selectedValue,
  onChange,
  imageUrl,
  label,
  sublabel,
}: any) => {
  const isSelected = selectedValue === value;

  return (
    <div
      className={`${
        isSelected ? "selected border border-blue-600 bg-blue-100" : ""
      } w-96 h-24 bg-gray-50 rounded-lg justify-center items-center gap-6 inline-flex mx-2 cursor-pointer`}
      onClick={() => onChange(value)}
    >
      <img className="w-24 h-24 rounded-lg" src={imageUrl} alt={label} />
      <div className="grow shrink basis-0 flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch text-black text-lg font-bold">{value}</div>
        <div className="self-stretch text-black text-sm font-normal">
          {sublabel}
        </div>
      </div>
    </div>
  );
};

const YextServicesPage = ({ values, setFieldValue }: any) => {
  const handleRadioChange = (value: string, setFieldValue: any) => {
    setFieldValue("yextServices", value);
  };

  return (
    <div className="w-120 flex-col justify-start items-center inline-flex">
      <img src={logo} alt="logo" />
      <h1 className="w-96 text-center text-stone-900 text-2xl font-bold leading-9 mt-12">
        Which yext Products are you interested in?
      </h1>
      <p className="w-108 text-center text-stone-900 text-base font-medium leading-normal mt-2 mb-2">
        Select the products you want to see in action in your demo.
      </p>

      <Field
        name="industry"
        render={({ field }: any) => (
          <div className="radio-container">
            <CustomRadio
              value="Content"
              selectedValue={values.yextServices}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={content}
              label="Content"
              sublabel="Organize your content with a next-generation CMS built for AI."
            />
            <CustomRadio
              value="Listings"
              selectedValue={values.yextServices}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={listings}
              label="Listings"
              sublabel="Deliver answers across a network of 200+ integration partners."
            />
            <CustomRadio
              value="Pages"
              selectedValue={values.yextServices}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={pages}
              label="Pages"
              sublabel="Publish answers with landing pages built for SEO and conversion."
            />
            <CustomRadio
              value="Reviews"
              selectedValue={values.yextServices}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={reviews}
              label="Reviews"
              sublabel="Manage crowdsourced answers about your products and services"
            />
            <CustomRadio
              value="Search"
              selectedValue={values.yextServices}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={search}
              label="Search"
              sublabel="Deliver direct answers across websites, apps, and workspaces."
            />
            <CustomRadio
              value="Analytics"
              selectedValue={values.yextServices}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={analytics}
              label="Analytics"
              sublabel="Unlock actionable insights on the performance of your answers."
            />
            <CustomRadio
              value="Chat"
              selectedValue={values.yextServices}
              onChange={(value: any) => handleRadioChange(value, setFieldValue)}
              imageUrl={chat}
              label="Chat"
              sublabel="Build an accurate and natural language chat experience."
            />
          </div>
        )}
      />
    </div>
  );
};
export default YextServicesPage;
