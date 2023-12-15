
import { Formik } from "formik";
import TextInput from "../TextInput";

export const  questionOne = () => {

    return (
     <div>
        <h1 className="text-3xl font-semibold my-8">Welcome to Yext!</h1>
        <Formik
          initialValues={{ companyName: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="flex flex-col">
              <TextInput
                name="companyName"
                handleChange={handleChange}
                value={values.companyName}
                placeholder="Company Name"
              />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    )
}