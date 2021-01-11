import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo"
import BrandStatement from "./components/BrandStatement"
import DeployedApps from "./components/DeployedApps";
import Repo from "./components/Repo"

function App() {
  return (
    <div>
      <Header />
      <ContactInfo />
      <BrandStatement />
      <DeployedApps />
      <Repo />

      <Footer />

    </div>
  );
}

export default App;
