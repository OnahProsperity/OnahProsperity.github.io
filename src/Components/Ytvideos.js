import React from "react";
import "../Components/Ytvideos.css";
import images from "../images/image.png";

// const ytVideos = [
//   {
//     img: "image.png",
//     title: "yt one",
//     to: "https://github.com/ethereum/EIPs/pull/5008",
//   },

//   {
//     img: "image.png",
//     title: "I'm Onah Prosper with over 3 years of experience",
//     to: "https://dashboard.alchemy.com/apps/r87bkmejsyop9k6i",
//   },
// ];

const Ytvideos = () => {
  return (
    <>
      <div className="yt">
        <h2 className="title">My Youtube</h2>
        <hr className="yt_hr" />
      </div>
      <div className="yt_container">
        <div className="yt_content">
          <div className="yt_img">
            <img src={images} alt="" />
            <a
              href="https://dashboard.alchemy.com/apps/r87bkmejsyop9k6i"
              target="_blank"
              rel="noreferrer"
            >
              <h3>this is I'm Onah Prosper</h3>
            </a>
          </div>
        </div>
        <div className="yt_content">
          <div className="yt_img">
            <img src={images} alt="" />
          </div>
          <a
            href="https://dashboard.alchemy.com/apps/r87bkmejsyop9k6i"
            target="_blank"
            rel="noreferrer"
          >
            <h3>this is a ytContent</h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default Ytvideos;
