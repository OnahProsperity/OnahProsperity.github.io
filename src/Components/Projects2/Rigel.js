import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import Highlight from "react-highlight";

const Rigel = () => {


  const [cancel, setCancel] = useState(false);
  const handleClick = () => {
    setCancel(true);
    // toggleModal();
    console.log(cancel, "this is the cancel");
  };
  // cancel
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "auto");

  const nh = `{
    function power(base, exponent) -> result
    {
        switch exponent
        case 0 { result := 1 }  
    }
}`;

  return (
    <>
      {!cancel && (
        <div className="myProjects" onClick={handleClick}>
          <div
            className="myProjects__main"
            onClick={(e) => e.stopPropagation()}
           >
            <div className="POP_HEADER">
              <h2>Rigel</h2>
              <span className="cancel" onClick={handleClick}>
                <ImCancelCircle />
              </span>
            </div>
            <div className="myProjects__body">
              <aside className="myProjects__sidemenu">
                <div className="myProjects__button">
                  <ul className="myProjects__sidemenu_ul">
                    <li>
                      <a href="#pro1">pro 1 oiuto</a>
                    </li>
                    <li>
                      <a href="#pro2">pro 2</a>
                    </li>
                    <li>
                      <a href="#pro3">pro 3</a>
                    </li>
                    <li>
                      <a href="#pro4">pro 4</a>
                    </li>
                  </ul>
                </div>
              </aside>
              <div className="myProjects__right">
                <div className="myProject__content" id="pro1">
                  <h4>Title 1</h4>
                  <p>
                    you are who you are ChatGPT Feb 24 Version. Free Research
                    Preview. Our goal is to make AI systems more natural and
                    safe for a variety of clients. I have also been responsible
                    for troubleshooting and debugging issues, as well as working
                    with cross-functional teams to ensure that projects are
                    delivered on time and to the satisfaction of the client.{" "}
                  </p>
                </div>
                <div className="myProject__content" id="pro2">
                  <h4>Title 2 you are who you ar</h4>
                  <p>
                    you are who you are ChatGPT Feb 24 Version. Free Research
                    Preview. Our goal is to make AI systems more natural and
                    safe for a variety of clients. I have also been responsible
                    for troubleshooting and debugging issues, as well as working
                    with cross-functional teams to ensure that projects are
                    delivered on time and to the satisfaction of the client.{" "}
                  </p>
                </div>
                <div className="myProject__content" id="pro3">
                  <h4>Title 3</h4>
                  <p>
                    you are who you are ChatGPT Feb 24 Version. Free Research
                    Preview. Our goal is to make AI systems more natural and and
                    to the satisfaction of the client.{" "}
                    <div className="highlight">
                      <Highlight languages={["js"]}>{nh}</Highlight>
                    </div>
                  </p>
                </div>
                <div className="myProject__content" id="pro4">
                  <h4>Title 4</h4>
                  <p>
                    you are who you are ChatGPT Feb 24 Version. Free Research
                    Preview. Our goal is to make AI systems more natural and
                    safe for a variety of clients. I have also been responsible
                    for troubleshooting and debugging issues, as well as working
                    with cross-functional teams to ensure that projects are
                    delivered on time and to the satisfaction of the client.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Rigel;
