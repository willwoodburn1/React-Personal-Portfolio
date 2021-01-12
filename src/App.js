import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Main from "./pages/Main"
import Images from "./pages/ImagesPage"


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/images" component={Images} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
