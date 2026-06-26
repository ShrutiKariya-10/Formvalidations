import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactForm from "./pages/ContactForm";
import SignupForm from "./pages/SignupForm";
import FeedbackForm from "./pages/FeedbackForm";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </div>
  );
}

export default App;