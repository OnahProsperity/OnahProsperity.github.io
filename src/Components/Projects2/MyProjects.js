import React, { useState } from "react";
import Rigel from "./Rigel";
import Matian from "./Matian";
import Nethermind from "./Nethermind";
import Freelance from "./Freelance";
import "./MyProjects.css";

const files = {
  Rigel: Rigel,
  Matian: Matian,
  Nethermind: Nethermind,
  Freelance: Freelance,
  // Add more files here as needed
};

function MyProjects() {
  const [activeFile, setActiveFile] = useState();
  // const [files, setfiles] = useState(false);

  const ActiveFile = files[activeFile];
  console.log(files, "the files");

  return (
    <>
      <h2>Projects</h2>
      <hr className="hr" />
      <div className="button__container">
        <div className="button">
          {Object.keys(files).map((fileName) => (
            <div 
            className="content_button"
            >
              <button
                className="my__button"
                key={fileName}
                onClick={() => setActiveFile(fileName)}
              >
                <h2> {fileName}</h2>
                <span>View Projects</span>
              </button>
            </div>
          ))}
          <div className="activeFile">
            {ActiveFile && <ActiveFile />}
            {/* <ActiveFile /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default MyProjects;
