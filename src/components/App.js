import "./App.css";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Experience from "./experience/experience";
import Project from "./projects/projects";
import Testimonials from "./testimonials/testimonials";
import Contact from "./contact/contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
