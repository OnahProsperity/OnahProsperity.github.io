import React, { useState, useEffect } from "react";

import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";

import "./About.css";

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa";
import "./Home.css";
import useLocalStorage from "use-local-storage";

function About() {
  let x = " ✋";

  const [isMobile, setIsMobile] = useState(false);
  const showSidebar = () => setIsMobile(!isMobile);

  const [isActive, setIsActive] = useState(false);
  const disAble = () => setIsActive(!isActive);

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const Styles = styled.div`
    .navbar {
      justify-content: flex-end;
      position: fixed;
      width: 100%;
      z-index: 1;
    }
    a {
      padding: 10px;
      display: flex;
      justify-content: flex-end;
      color: var(--text-primary);
      text-decoration: none;
    }

    .navbar-nav,
    .nav-link {
      padding: 10px;
      display: flex;
      justify-content: flex-end;
      color: var(--text-primary);
      text-decoration: none;
      border-bottom: 1px solid #eaecef;
      background-color: var(--background);
    }

    /* .nav-btn:hover {
      border-bottom: 3px solid #1768ac;
    } */
    .details {
      margin-left: -15px;
    }
  `;
  return (
    <div data-theme={theme}>
      <Styles>
        <Navbar>
          <Nav>
            <div className="menu-bar">
              <ul>
                <li>
                  <a className="nav-btn" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="details" href="#">
                    Details
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="#about">About</a>
                      </li>
                      <li>
                        <a href="#expirience">Expirience</a>
                      </li>
                      <li>
                        <a href="#project">Project</a>
                      </li>
                      <li>
                        <a href="#openSource"> Source</a>
                      </li>
                      <li>
                        <a href="#education">Education</a>
                      </li>
                      <li>
                        <a href="#research">Research</a>
                      </li>
                      <li>
                        <a href="#skills">Skills</a>
                      </li>
                      <li>
                        <a href="#interest">interest</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="theme-toggle">
              <i onClick={switchTheme} class="fa fa-toggle-on"></i>
            </div>
          </Nav>
          <div className="mobileMenu">
            <FaBars onClick={showSidebar} />
          </div>
        </Navbar>
      </Styles>

      <div className="container-1">
        <div className="leftside" onClick={showSidebar}>
          <ul className={isMobile ? "active" : "sidebar"}>
            <li className="home">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#expirience">Expirience</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#openSource">Open Source</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#research">Research</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#interest">interest</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#expirience">Expirience</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#openSource">Open Source</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#research">Research</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#interest">interest</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="rightside">
          <header className="Header">
            <div>
              <h2>Onah Prosper</h2>
              <p>Web and Blockchain Developer</p>
            </div>
            <ul className="social">
              <li>
                <a href="https://github.com/sundayonah">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+2348136213958">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </header>
          <section className="about" id="about">
            <h2 className="title">About</h2>
            <hr className="hr" />
            <div>
              <span> I'm xhunkleph and i'm a</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              nihil sed amet quas omnis dolorem est blanditiis? Dicta voluptatum
              eveniet saepe esse quis id architecto, impedit odit magni. Est
              maiores veniam distinctio, laboriosam amet fugiat fuga? Accusamus
            </p>
          </section>
          <section className="about" id="about">
            <h2 className="title">NONNON</h2>
            <hr className="hr" />
            <div>
              <span className=""> I'm xhunkleph and i'm a</span>
            </div>
            <p className="fade">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              nihil sed amet quas omnis dolorem est blanditiis? Dicta voluptatum
              eveniet saepe esse quis id architecto, impedit odit magni. Est
              maiores veniam distinctio, laboriosam amet fugiat fuga? Accusamus
            </p>
          </section>
          <section className="about" id="expirience">
            <h2 className="title">Epirience</h2>
            <hr className="hr" />
            <div></div>
            <p>
              I was involved as technical expert in several EU, national and
              regional research projects. Now, I'm working to build the next
              generation web apps supporting startups and amazing projects.
            </p>
          </section>
          <section className="about" id="project">
            <h2 className="title">Project</h2>
            <hr className="hr" />
            <div></div>

            <p>
              I was involved as technical expert in several EU, national and
              regional research projects. Now, I'm working to build the next
              generation web apps supporting startups and amazing projects.
            </p>
          </section>
          <section className="about" id="openSource">
            <h2 className="title">Open source</h2>
            <hr className="hr" />
            <div></div>

            <p>
              I was involved as technical expert in several EU, national and
              regional research projects. Now, I'm working to build the next
              generation web apps supporting startups and amazing projects.
            </p>
          </section>
          <section className="about" id="education">
            <h2 className="title">education</h2>
            <hr className="hr" />
            <div></div>

            <p>
              I was involved as technical expert in several EU, national and
              regional research projects. Now, I'm working to build the next
              generation web apps supporting startups and amazing projects.
            </p>
          </section>
          <section className="about" id="research">
            <h2 className="title">Research</h2>
            <hr className="hr" />
            <div></div>
            <p>
              I was involved as technical expert in several EU, national and
              regional research projects. Now, I'm working to build the next
              generation web apps supporting startups and amazing projects.
            </p>
          </section>
          <section className="about" id="skills">
            <h2 className="title">Skills</h2>
            <hr className="hr" />
            <div className="Item">
              <li>Web Applications and Integrated Systems</li>
              <li> RESTful Web Services and APIs</li>
              <li>Blockchain, Smart Contracts, DApps, NFT</li>
              <li> OpenZeppelin, Solidity, Web3.js, Truffle, Hardhat.</li>
              <li> ERC20, ERC721, ERC1363, BEP20</li>
              <li>Socket.io, WebRTC</li>
              <li>Git</li>
            </div>
          </section>
          <section className="about" id="interest">
            <h2 className="title">Interest</h2>
            <hr className="hr" />
            <div></div>
            <p>
              I was involved as technical expert in several EU, national and
              regional research projects. Now, I'm working to build the next
              generation web apps supporting startups and amazing projects.
            </p>
          </section>
          <section className="about" id="contact">
            <h2 className="title">Contact</h2>
            <hr className="hr" />
            <div></div>
            <p>
              I was involved as technical expert in several EU, national and
              regional research projects. Now, I'm working to build the next
              generation web apps supporting startups and amazing projects.
            </p>
          </section>
          <div className="Header">
            <ul className="social">
              <li>
                <a href="https://github.com/sundayonah" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
            <hr className="hr" />
            <p>{x}</p>
          </div>
          <h1 className="edit"></h1>
        </div>
      </div>
    </div>
  );
}

export default About;
