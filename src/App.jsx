import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contactform from "./Pages/Contactform";
import Signupform from "./Pages/Signupform";
import Feedbackform from "./Pages/Feedbackform";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Contactform />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path="/feedback" element={<Feedbackform />} />
      </Routes>
    </div>
  );
}

export default App;