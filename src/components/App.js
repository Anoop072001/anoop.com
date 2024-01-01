import "./App.css";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Experience from "./experience/experience";
import Project from "./projects/projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
