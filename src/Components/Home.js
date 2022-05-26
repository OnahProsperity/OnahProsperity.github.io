import React from "react";
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

  const x = "👍";
  // const y = "🥇";

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
              <a href="https://github.com/OnahProsperity" target=" _blank">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/OnahProsperity" target=" _blank">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/prosper-otor-3050791a6" target=" _blank">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+2348136213958" target="_blank">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </header>
        <p>{x}</p>
        <hr className="hr" />
      </div>
    </div>
  );
}

export default Home;
