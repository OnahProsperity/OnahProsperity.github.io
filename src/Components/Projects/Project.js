import React, { useEffect, useState } from "react";
import { Projects } from "./Data";
import Highlight from "react-highlight";
import "./Project.css";
import Markdown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";
import Rigel from "./Rigel.md";
// import MyProjects from "../Projects2/MyProjects";

const Project = () => {
  const file_name = "Rigel.md";
  const [post, setPost] = useState("");
  const [toogle, setToogle] = useState(false);
  // const [toogle2, setToogle2] = useState(false);
  // const [prop, setProp] = useState([]);
  const [popUp, setPopUp] = useState([]);
  const changeContent = (Proj) => {
    setPopUp([Proj]);
    // setProp([Proj]);
    setToogle(!toogle);
    // setToogle2(!toogle2);
  };
  // const changeContent2 = () => {
  //   setToogle2(!toogle2);
  // };
  const nh = `{
    function power(base, exponent) -> result
    {
        switch exponent
        case 0 { result := 1 }
        case 1 { result := base }
        default
      
    }
}`;

  useEffect(() => {
    import(`../Projects/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="project_container">
      {/* <Markdown>{post}</Markdown> */}
      <div className="button_container">
        {/* <MyProjects /> */}
        {Projects.map((Proj, index) => {
          return (
            <div key={index} className="content_button">
              <h2 className="title">{Proj.name}</h2>
              <button onClick={() => changeContent(Proj)}>View projects</button>
            </div>
          );
        })}
        {toogle && (
          <>
            <div className="pop_up_container" onClick={changeContent}>
              <div className="pop_up_body" onClick={(e) => e.stopPropagation()}>
                {popUp.map((pop, i) => {
                  return (
                    <>
                      <div className="pop_up_header">
                        <h2 className="pop_title">{pop.name}</h2>
                        <span className="pop_button" onClick={changeContent}>
                          X
                        </span>
                      </div>

                      <div className="mainbody">
                        <aside className="sidemenu">
                          <div className="sidemenu_button">
                            <ul className="sidemenu_ul">
                              <li>
                                <a href="#pro1">pro 1</a>
                              </li>
                              <li>
                                <a href="#about">pro 2</a>
                              </li>
                              <li>
                                <a href="#about">pro 3</a>
                              </li>
                              <li>
                                <a href="#about">pro 4</a>
                              </li>
                            </ul>
                          </div>
                        </aside>

                        <section className="mainmenu">
                          <div className="mainside">
                            <h2 id="pro1" className="maintopic">
                              Topic
                            </h2>
                            <p>
                              ChatGPT Feb 24 Version. Free Research Preview. Our
                              goal is to make AI systems more natural and safe
                              for a variety of clients. I have also been
                              responsible for troubleshooting and debugging
                              issues, as well as working with cross-functional
                              teams to ensure that projects are delivered on
                              time and to the satisfaction of the client.
                              <div>
                                <Highlight languages={["js"]}>{nh}</Highlight>
                              </div>
                            </p>
                          </div>
                          <div className="mainside">
                            <h2 id="pro1" className="maintopic">
                              Topic
                            </h2>
                            <p>
                              ChatGPT Feb 24 Version. Free Research Preview. Our
                              goal is to make AI systems more natural and safe
                              to interact with. Your feedback will help us
                              improve. I am well-versed in a variety of
                              front-end technologies such as HTML, CSS, and
                              JavaScript, and I have experience working with d
                              on time and to the satisfaction of the client.
                            </p>
                          </div>
                          <div className="mainside">
                            <h2 id="pro1" className="maintopic">
                              Topic
                            </h2>
                            <p>
                              ChatGPT Feb 24 Version. Free Research Preview. Our
                              goal is to make AI systems more natural and safe
                              livering high-quality and visually appealing web
                              applications. In my current role, I have been
                              responsible for designing, developing, and
                              maintaining web applications for a variety of
                              clients. I have also been responsible for
                              troubleshooting and debugging issues, as well as
                              working with cross-functional teams to ensure that
                              projects are delivered on time and to the
                              satisfaction of the client.
                            </p>
                          </div>
                          <div className="mainside">
                            <h2 id="pro1" className="maintopic">
                              Topic
                            </h2>
                            <p>
                              ChatGPT Feb 24 Version. Free Research Preview. Our
                              goal is to make AI systems more natural and safe
                              livering high-quality and visually appealing web
                              applications. In my current role, I have been
                              responsible for designing, developing, and
                              maintaining web applications for a variety of
                              clients. I have also been responsible for
                              troubleshooting and debugging issues, as well as
                              working with cross-functional teams to ensure that
                              projects are delivered on time and to the
                              satisfaction of the client.
                            </p>
                          </div>
                          <div className="mainside">
                            <h2 id="pro1" className="maintopic">
                              Topic
                            </h2>
                            <p>
                              ChatGPT Feb 24 Version. Free Research Preview. Our
                              goal is to make AI systems more natural and safe
                              livering high-quality and visually appealing web
                              applications. In my current role, I have been
                              responsible for designing, developing, and
                              maintaining web applications for a variety of
                              clients. I have also been responsible for
                              troubleshooting and debugging issues, as well as
                              working with cross-functional teams to ensure that
                              projects are delivered on time and to the
                              satisfaction of the client.
                            </p>
                          </div>
                        </section>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* {toogle2 && (
        <div className="up_container" onClick={changeContent2}>
          <div className="up_body" onClick={(e) => e.stopPropagation()}>
            <div className="pop_up_header">
              <h2>{prop.title}</h2>
              <button onClick={changeContent2} className="arrow">
                <BsArrowReturnLeft width={28} hieght={28} />
              </button>
            </div>
            <div className="pop_up_content">
              {prop.map((pro, j) => {
                console.log("first pro", pro);
                return (
                  <>
                    <h2 className="pop_title">{pro.title}</h2>
                    <div key={j} className="last_pop_up">
                      {pro.description}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};
export default Project;
