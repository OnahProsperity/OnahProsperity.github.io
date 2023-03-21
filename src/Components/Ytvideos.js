import React from "react";
import "../Components/Ytvideos.css";
import images from "../images/image.png";
import img1 from "../images/intro.png";
import img2 from "../images/yull.png";

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
            <img src={img1} alt="" />
            <a
              href="https://youtu.be/DMWa8vspIoQ"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Solidity Assembly opCodes</h3>
            </a>
          </div>
        </div>
        <div className="yt_content">
          <div className="yt_img">
            <img src={img2} alt="" />
          </div>
          <a
            href="https://youtu.be/HiDEVZnfhYM"
            target="_blank"
            rel="noreferrer"
          >
            <h3>Storage Variable in YUL</h3>
          </a>
        </div>
      </div>
    </>
  );
};

export default Ytvideos;
