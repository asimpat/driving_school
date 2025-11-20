import "./../src/index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import InstructorsSection from "./components/InstructorSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AppointmentSection from "./components/AppointmentSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <CoursesSection />
      <InstructorsSection />
      <TestimonialsSection />
      <AppointmentSection />
      <MapSection />
      <Footer />
    </>
  );
}

export default App;
