// // import { Formik, Form, Field, ErrorMessage } from "formik";
// // import * as Yup from "yup";

// // const validationSchema = Yup.object({
// //   fullName: Yup.string()
// //     .min(2, "Full Name must be at least 2 characters")
// //     .required("Full Name is required"),

// //   email: Yup.string()
// //     .email("Invalid email format")
// //     .required("Email is required"),

// //   message: Yup.string()
// //     .min(10, "Message must be at least 10 characters")
// //     .required("Message is required"),
// // });

// // function ContactForm() {
// //   return (
// //     <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
// //       <h2 className="text-3xl font-bold text-center mb-6 text-slate-800">
// //         Contact Form
// //       </h2>

// //       <Formik
// //         initialValues={{
// //           fullName: "",
// //           email: "",
// //           message: "",
// //         }}
// //         validationSchema={validationSchema}
// //         onSubmit={(values, { resetForm }) => {
// //           console.log(values);
// //           resetForm();
// //         }}
// //       >
// //         <Form className="space-y-4">
// //           <div>
// //             <label className="font-medium">Full Name</label>
// //             <Field
// //               name="fullName"
// //               className="w-full border p-3 rounded-lg mt-1"
// //             />
// //             <ErrorMessage
// //               name="fullName"
// //               component="div"
// //               className="text-red-500 text-sm"
// //             />
// //           </div>

// //           <div>
// //             <label className="font-medium">Email</label>
// //             <Field
// //               name="email"
// //               type="email"
// //               className="w-full border p-3 rounded-lg mt-1"
// //             />
// //             <ErrorMessage
// //               name="email"
// //               component="div"
// //               className="text-red-500 text-sm"
// //             />
// //           </div>

// //           <div>
// //             <label className="font-medium">Message</label>
// //             <Field
// //               as="textarea"
// //               name="message"
// //               rows="4"
// //               className="w-full border p-3 rounded-lg mt-1"
// //             />
// //             <ErrorMessage
// //               name="message"
// //               component="div"
// //               className="text-red-500 text-sm"
// //             />
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
// //           >
// //             Submit
// //           </button>
// //         </Form>
// //       </Formik>
// //     </div>
// //   );
// // }

// // export default ContactForm;





// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   fullName: Yup.string()
//     .min(2, "Full Name must be at least 2 characters")
//     .required("Full Name is required"),

//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),

//   message: Yup.string()
//     .min(10, "Message must be at least 10 characters")
//     .required("Message is required"),
// });

// function ContactForm() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2b4f97] via-[#4d71b8] to-[#2d5199] px-4 py-10">
//       <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] shadow-2xl p-10">
        
//         {/* Avatar */}
//         <div className="flex justify-center mb-8">
//           <div className="w-28 h-28 rounded-full bg-blue-100 border-4 border-[#355a9f] shadow-xl flex items-center justify-center">
//             <span className="text-5xl">👤</span>
//           </div>
//         </div>

//         {/* Heading */}
//         <h2 className="text-5xl font-extrabold text-center text-white tracking-wide">
//           CONTACT FORM
//         </h2>

//         <p className="text-center text-blue-100 mt-3 mb-10 text-lg">
//           Please fill in the details below to contact us.
//         </p>

//         <Formik
//           initialValues={{
//             fullName: "",
//             email: "",
//             message: "",
//           }}
//           validationSchema={validationSchema}
//           onSubmit={(values, { resetForm }) => {
//             console.log(values);
//             resetForm();
//           }}
//         >
//           <Form className="space-y-6">
            
//             {/* Full Name */}
//             <div>
//               <label className="block text-white font-semibold mb-2">
//                 Full Name
//               </label>

//               <Field
//                 name="fullName"
//                 placeholder="Enter your full name"
//                 className="w-full bg-white/10 border border-white/40 rounded-xl px-5 py-4 text-white placeholder-blue-100 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-300 focus:border-white"
//               />

//               <ErrorMessage
//                 name="fullName"
//                 component="div"
//                 className="text-red-200 text-sm mt-2"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-white font-semibold mb-2">
//                 Email Address
//               </label>

//               <Field
//                 type="email"
//                 name="email"
//                 placeholder="example@gmail.com"
//                 className="w-full bg-white/10 border border-white/40 rounded-xl px-5 py-4 text-white placeholder-blue-100 outline-none transition-all duration-300 focus:ring-4 focus:ring-blue-300 focus:border-white"
//               />

//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-200 text-sm mt-2"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-white font-semibold mb-2">
//                 Message
//               </label>

//               <Field
//                 as="textarea"
//                 name="message"
//                 rows="5"
//                 placeholder="Write your message..."
//                 className="w-full bg-white/10 border border-white/40 rounded-xl px-5 py-4 text-white placeholder-blue-100 outline-none resize-none transition-all duration-300 focus:ring-4 focus:ring-blue-300 focus:border-white"
//               />

//               <ErrorMessage
//                 name="message"
//                 component="div"
//                 className="text-red-200 text-sm mt-2"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full mt-2 bg-white text-[#2b4f97] py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:bg-blue-50 hover:scale-[1.02] active:scale-95"
//             >
//               Submit
//             </button>

//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;




import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Full Name must be at least 2 characters")
    .required("Full Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d4f57] via-[#2e6e76] to-[#4a929a] px-4">
      <div className="w-full max-w-md bg-[#0d1f24]/95 shadow-2xl p-8">

        {/* Heading */}
        <h2 className="text-center text-4xl font-light tracking-[6px] text-gray-200 mb-10">
          CONTACT FORM
        </h2>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          <Form className="space-y-5">

            {/* Full Name */}
            <div>
              <Field
                name="fullName"
                placeholder="Full Name"
                className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none focus:border-cyan-500 transition"
              />

              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-400 text-sm mt-2"
              />
            </div>

            {/* Email */}
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email ID"
                className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none focus:border-cyan-500 transition"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400 text-sm mt-2"
              />
            </div>

            {/* Message */}
            <div>
              <Field
                as="textarea"
                rows="5"
                name="message"
                placeholder="Write your message..."
                className="w-full bg-gray-100 text-gray-700 px-4 py-3 border-l-8 border-gray-300 outline-none resize-none focus:border-cyan-500 transition"
              />

              <ErrorMessage
                name="message"
                component="div"
                className="text-red-400 text-sm mt-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#5d98a3] text-white tracking-[3px] font-semibold py-3 mt-3 hover:bg-[#70aab5] transition duration-300"
            >
              SUBMIT
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ContactForm;     

