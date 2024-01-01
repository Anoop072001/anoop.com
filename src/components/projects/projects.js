import NFA from "./NFA.png";
import Qexpress from "./qexpress.png";
import "./projects.css";

function Project() {
  return (
    <div className="projects">
      <div className="image-project">
        <img src={NFA} alt="NFA"></img>
        <h1>NFT Based Authentication System</h1>
        <p>Secure and safe Authentication using blockchain technology</p>
        <div style={{ alignSelf: "end" }}>View Demo</div>
      </div>
      <div className="image-project">
        <img src={Qexpress} alt="NFA"></img>
        <h1>QExpress App</h1>
        <p>
          A Flutter App designed for the local Shopkeepers and Local customers
        </p>
        <div style={{ alignSelf: "end" }}>View Code</div>
      </div>
    </div>
  );
}

export default Project;
