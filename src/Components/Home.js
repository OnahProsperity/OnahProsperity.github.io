import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTelegram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { RiFoldersFill } from 'react-icons/ri';
import useLocalStorage from 'use-local-storage';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import Helmet from 'react-helmet';
function Home() {
   const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

   const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
   };

   const x = '👍';

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
                     {theme === 'light' ? (
                        <HiMoon size={25} />
                     ) : (
                        <CgSun size={25} />
                     )}
                  </i>
               </div>
               <div>
                  <h1 className="engrave">Onah Prosper</h1>
                  <h3>
                     {' '}
                     Blockchain security researcher/Smart Contract Engineer
                  </h3>
               </div>
               <Link to="/about" className="discover">
                  <RiFoldersFill />
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
                        href="https://www.linkedin.com/in/prosper-o-3050791a6/"
                        alt="linkeden"
                        aria-label="my linkedin"
                        target=" _blank"
                     >
                        <FaLinkedin />
                     </a>
                  </li>
                  <li>
                     <a
                        href="https://t.me/Encryption01"
                        alt="telegram"
                        aria-label=" my telegram"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <FaTelegram />
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
