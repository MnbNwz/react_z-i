import React from "react";
import "./About_Us.scss";
import Click_Icon from "../../images/about-icon.png";

const AboutUs = () => {
  let About_Data = [
    {
      title: "Reliability",
      text: "We provide Reliability which helps increase efficiency and profitability with customer satisfaction.",
    },
    {
      title: "Quality",
      text: "We provide Quality based logistic services. which helps customer to be facilitated.",
    },
    {
      title: "Experience",
      text: "We provide expertise level logistic services to provide improvement within a supply chain and ensure that manufacturing operations run smoothly.",
    },
  ];
  const About_Us_Data = () => (
    <ul>
      {About_Data.map(({ title, text }, index) => (
        <li key={index}>
          <div className="title">
            <img src={Click_Icon} alt="Tick-Icon" />
            <p>{title}</p>
          </div>
          <br />
          <div className="content">
            <p>{text}</p>
          </div>
          <br />
          <br />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="about-block">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about-content">
              <h1>About the Company</h1>
              <p>
                <br />
                Welcome to Z and I Transport LLC. We are well-established
                professional company for heavy & Light Trucks transportation in
                Dubai, UAE. We have various types of transport solutions.
                <br />
                <br />
                As, We are one of the leading companies in Transport industry.
                We are known for planning and executing efficient transportation
                and storage of goods. to the point of consumption as well as for
                our reliable services in the UAE market from Last 10 years.
                <br />
                <br />
                we carry Bulky and Heavy assignments from one place to another
                place. We believe in the complete customer satisfaction.
              </p>
            </div>
          </div>

          <div className="col-6 about_data">{About_Us_Data()}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
