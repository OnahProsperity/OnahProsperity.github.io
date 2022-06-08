import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

import useLocalStorage from "use-local-storage";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import Helmet from "react-helmet";
function Home() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const x = "👍";

  return (
    <div data-theme={theme}>
      <Helmet>
        <title>Prosperity Onah | Web and Blockchain Developer</title>
        <meta
          name="description"
          content="I'm a Blockchain Core/Software Engineer continually seeking and testing new tools and opportunities for innovation. I'm maniacally passionate about Ethereum Eco-System (EVM)"
        />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <div className="theme-toggle">
            <i onClick={switchTheme}>
              {theme === "light" ? <HiMoon size={25} /> : <CgSun size={25} />}
            </i>
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
              <a
                href="https://github.com/OnahProsperity"
                alt="github"
                aria-label="my github"
                target=" _blank"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/OnahProsperity"
                alt="twitter"
                aria-label="my twitter"
                target=" _blank"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/prosper-otor-3050791a6"
                alt="linkeden"
                aria-label="my linkedin"
                target=" _blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+2348136213958"
                alt="whatsapp"
                aria-label=" my whatsapp"
                target="_blank"
              >
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
