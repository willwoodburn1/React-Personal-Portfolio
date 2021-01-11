import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Main from "./pages/Main"


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/main" component={Main} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
