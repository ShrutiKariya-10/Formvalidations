// import { NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="bg-slate-900 shadow-lg">
//       <div className="container mx-auto px-6">
//         <div className="flex justify-center gap-8 py-4">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 font-semibold"
//                 : "text-white hover:text-blue-400"
//             }
//           >
//             Contact Form
//           </NavLink>

//           <NavLink
//             to="/signup"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 font-semibold"
//                 : "text-white hover:text-blue-400"
//             }
//           >
//             Sign Up
//           </NavLink>

//           <NavLink
//             to="/feedback"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-400 font-semibold"
//                 : "text-white hover:text-blue-400"
//             }
//           >
//             Feedback
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;





import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#0d1f24]/95 shadow-xl border-b border-[#2e6e76]">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center gap-8 py-5">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-5 py-2 tracking-[2px] uppercase text-sm font-semibold transition duration-300 ${
                isActive
                  ? "bg-[#5d98a3] text-white"
                  : "text-gray-300 hover:text-white hover:bg-[#1d4f57]"
              }`
            }
          >
            Contact Form
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `px-5 py-2 tracking-[2px] uppercase text-sm font-semibold transition duration-300 ${
                isActive
                  ? "bg-[#5d98a3] text-white"
                  : "text-gray-300 hover:text-white hover:bg-[#1d4f57]"
              }`
            }
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/feedback"
            className={({ isActive }) =>
              `px-5 py-2 tracking-[2px] uppercase text-sm font-semibold transition duration-300 ${
                isActive
                  ? "bg-[#5d98a3] text-white"
                  : "text-gray-300 hover:text-white hover:bg-[#1d4f57]"
              }`
            }
          >
            Feedback
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;