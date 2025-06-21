import React from "react";
import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Manager />
      <Footer />
      <div>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default App;
