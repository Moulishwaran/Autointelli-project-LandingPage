import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import MainContent from "../MainContent/MainContent";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </>
  );
};

export default Home;
