import React, { useEffect, useState } from "react";
import "./mainContent.css";
import MainSub from "../MainContent/MainSub/MainSub";
import Blur from "react-blur";
import BackgroundImage from "../../assets/background11.png";

const MainContent = () => {
  const [h11, seth11] = useState("Autointelli");
  const [i, seti] = useState(0);
  var arr = [
    "Monitering",
    "Workflow",
    "Automation",
    "Event / Alerts",
    "Autointelli",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      seti((i + 1) % 5);
    }, 0);
    return () => clearInterval(interval);
  }, [h11]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      seth11(arr[i]);
    }, 2000);
    return () => clearInterval(interval1);
  }, [i]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      document.getElementById("ani").classList.add("animate-bottom");
    }, 10);
    document.getElementById("ani").classList.remove("animate-bottom");
    return () => clearInterval(interval2);
  }, [h11]);

  return (
    <>
      <div className="mainContent">
        <Blur
          img={BackgroundImage}
          className="Main-bgImage"
          blurRadius={30}
        ></Blur>
        <div className="MainContent-left">
          <p className="MainContentLeft-title">Is it the</p>
          <div className="MainContent-animation">
            <span id="ani" className="animate-bottom">
              {h11}
            </span>
          </div>
          <div className="MainContent-subTitle1">
            <h3 className="subTitle">
              Free end-to-end monitoring for your entire stack in 5 <br />
              minutes or less
            </h3>
          </div>
          <div className="form">
            <form className="MainContent-inputForm">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="MainContent-nameInput"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Company Email"
                  className="MainContent-emailInput"
                />
              </div>
              <button className="MainContent-GetStart">Get Start Free</button>
            </form>
          </div>
          <div className="MainContent-Detail">
            <p>
              By signing up you're agreeing to{" "}
              <span className="underline">
                Terms
                <br /> of Service
              </span>
              <span> and</span>
              <span className="underline"> Service Privacy Notice.</span>
            </p>
          </div>
          <div>
            <p className="MainContent-creditCard">
              100GB + 1 user free.Forever.
              <br />
              No credit card required.
            </p>
          </div>
        </div>
      </div>
      <MainSub />
    </>
  );
};

export default MainContent;
