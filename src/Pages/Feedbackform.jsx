// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   studentName: Yup.string().required("Student Name is required"),

//   age: Yup.number()
//     .required("Age is required")
//     .min(18, "Minimum age is 18")
//     .max(99, "Maximum age is 99"),

//   course: Yup.string().required("Please select a course"),

//   comments: Yup.string().test(
//     "comments-length",
//     "Comments must be at least 15 characters",
//     (value) => !value || value.length >= 15
//   ),
// });

// function FeedbackForm() {
//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
//       <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
//         Course Feedback Form
//       </h2>

//       <Formik
//         initialValues={{
//           studentName: "",
//           age: "",
//           course: "",
//           comments: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values, { resetForm, setSubmitting }) => {
//           setTimeout(() => {
//             console.log(values);
//             alert("Feedback Submitted Successfully!");

//             resetForm();
//             setSubmitting(false);
//           }, 2000);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form className="space-y-4">
//             <div>
//               <label>Student Name</label>
//               <Field
//                 name="studentName"
//                 className="w-full border p-3 rounded-lg mt-1"
//               />
//               <ErrorMessage
//                 name="studentName"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <label>Age</label>
//               <Field
//                 name="age"
//                 type="number"
//                 className="w-full border p-3 rounded-lg mt-1"
//               />
//               <ErrorMessage
//                 name="age"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <label>Course</label>
//               <Field
//                 as="select"
//                 name="course"
//                 className="w-full border p-3 rounded-lg mt-1"
//               >
//                 <option value="">Select Course</option>
//                 <option value="React JS">React JS</option>
//                 <option value="Node JS">Node JS</option>
//                 <option value="Java">Java</option>
//                 <option value="Python">Python</option>
//               </Field>

//               <ErrorMessage
//                 name="course"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <div>
//               <label>Comments (Optional)</label>
//               <Field
//                 as="textarea"
//                 name="comments"
//                 rows="4"
//                 className="w-full border p-3 rounded-lg mt-1"
//               />
//               <ErrorMessage
//                 name="comments"
//                 component="div"
//                 className="text-red-500 text-sm"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full py-3 rounded-lg text-white ${
//                 isSubmitting
//                   ? "bg-gray-500 cursor-not-allowed"
//                   : "bg-purple-600 hover:bg-purple-700"
//               }`}
//             >
//               {isSubmitting ? "Submitting..." : "Submit Feedback"}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default FeedbackForm;




import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  studentName: Yup.string().required("Student Name is required"),

  age: Yup.number()
    .required("Age is required")
    .min(18, "Minimum age is 18")
    .max(99, "Maximum age is 99"),

  course: Yup.string().required("Please select a course"),

  comments: Yup.string().test(
    "comments-length",
    "Comments must be at least 15 characters",
    (value) => !value || value.length >= 15
  ),
});

function FeedbackForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d4f57] via-[#2e6e76] to-[#4a929a] px-4">
      <div className="w-full max-w-md bg-[#0d1f24]/95 shadow-2xl p-8">

        <h2 className="text-center text-4xl font-light tracking-[6px] text-gray-200 mb-10">
          FEEDBACK FORM
        </h2>

        <Formik
          initialValues={{
            studentName: "",
            age: "",
            course: "",
            comments: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              alert("Feedback Submitted Successfully!");

              resetForm();
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">

              {/* Student Name */}
              <div>
                <Field
                  name="studentName"
                  placeholder="Student Name"
                  className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none focus:border-cyan-500 transition"
                />

                <ErrorMessage
                  name="studentName"
                  component="div"
                  className="text-red-400 text-sm mt-2"
                />
              </div>

              {/* Age */}
              <div>
                <Field
                  name="age"
                  type="number"
                  placeholder="Age"
                  className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none focus:border-cyan-500 transition"
                />

                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-400 text-sm mt-2"
                />
              </div>

              {/* Course */}
              <div>
                <Field
                  as="select"
                  name="course"
                  className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none focus:border-cyan-500 transition"
                >
                  <option value="">Select Course</option>
                  <option value="React JS">React JS</option>
                  <option value="Node JS">Node JS</option>
                  <option value="Java">Java</option>
                  <option value="Python">Python</option>
                </Field>

                <ErrorMessage
                  name="course"
                  component="div"
                  className="text-red-400 text-sm mt-2"
                />
              </div>

              {/* Comments */}
              <div>
                <Field
                  as="textarea"
                  rows="5"
                  name="comments"
                  placeholder="Write your feedback..."
                  className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none resize-none focus:border-cyan-500 transition"
                />

                <ErrorMessage
                  name="comments"
                  component="div"
                  className="text-red-400 text-sm mt-2"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white tracking-[3px] font-semibold py-3 mt-3 transition duration-300 ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#5d98a3] hover:bg-[#70aab5]"
                }`}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT FEEDBACK"}
              </button>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FeedbackForm;