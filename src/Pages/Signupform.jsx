// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Email is required"),

//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),

//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password")], "Passwords must match")
//     .required("Confirm Password is required"),
// });

// function SignupForm() {
//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
//       <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
//         Sign Up Form
//       </h2>

//       <Formik
//         initialValues={{
//           email: "",
//           password: "",
//           confirmPassword: "",
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values, { resetForm }) => {
//           alert("Sign Up completed successfully!");
//           resetForm();
//         }}
//       >
//         <Form className="space-y-4">
//           <div>
//             <label>Email</label>
//             <Field
//               name="email"
//               type="email"
//               className="w-full border p-3 rounded-lg mt-1"
//             />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           <div>
//             <label>Password</label>
//             <Field
//               name="password"
//               type="password"
//               className="w-full border p-3 rounded-lg mt-1"
//             />
//             <ErrorMessage
//               name="password"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           <div>
//             <label>Confirm Password</label>
//             <Field
//               name="confirmPassword"
//               type="password"
//               className="w-full border p-3 rounded-lg mt-1"
//             />
//             <ErrorMessage
//               name="confirmPassword"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
//           >
//             Sign Up
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default SignupForm;





import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

function SignupForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d4f57] via-[#2e6e76] to-[#4a929a] px-4">
      <div className="w-full max-w-md bg-[#0d1f24]/95 shadow-2xl p-8">

        {/* Heading */}
        <h2 className="text-center text-4xl font-light tracking-[6px] text-gray-200 mb-10">
          SIGN UP
        </h2>

        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            alert("Sign Up completed successfully!");
            resetForm();
          }}
        >
          <Form className="space-y-5">

            {/* Email */}
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email ID"
                className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none focus:border-cyan-500 transition"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-sm mt-2"
              />
            </div>

            {/* Password */}
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none focus:border-cyan-500 transition"
              />

              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400 text-sm mt-2"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none focus:border-cyan-500 transition"
              />

              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-400 text-sm mt-2"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-[#5d98a3] text-white tracking-[3px] font-semibold py-3 mt-3 hover:bg-[#70aab5] transition duration-300"
            >
              SIGN UP
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignupForm;