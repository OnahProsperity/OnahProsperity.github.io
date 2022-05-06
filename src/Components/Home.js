import React from "react";
import logo1 from "./logo1.png";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import useLocalStorage from "use-local-storage";

function Home() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <div className="App">
        <header className="App-header">
          <div className="theme-toggle">
            <i onClick={switchTheme} class="fas fa-toggle-on"></i>
          </div>
          <div>
            <h1>Onah Prosper</h1>
            <h3>Web and Blockchain Developer</h3>
          </div>
          <Link to="/about" className="discover">
            Discover More
          </Link>
          <ul>
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
          <hr className="hr" />
        </header>
      </div>
    </div>
  );
}

export default Home;
