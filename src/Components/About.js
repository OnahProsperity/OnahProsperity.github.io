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

    .nav-btn:hover {
      border-bottom: 2px solid #1768ac;
      padding-bottom: 5px;
      width: 60px;
    }
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
                <a href="https://github.com/OnahProsperity">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/OnahProsperity">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/prosper-otor-3050791a6">
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
          <section className="about" id="about">
            <h2 className="title">About</h2>
            <hr className="hr" />
            {/* <div>
              <span> I'm Prosperity</span>
            </div> */}
            <p>
              I'm a Blockchain Core/Software Engineer continually seeking and
              testing new tools and opportunities for innovation. I'm maniacally
              passionate about Ethereum Eco-System (EVM).
            </p>
          </section>
          <section className="about" id="expirience">
            <h2 className="title">Experience</h2>
            <hr className="hr" />
            <div></div>
            <p>
              I was involved as technical expert in several Projects, national
              and regional research projects. Now, I'm working to build the next
              generation web3 amazing projects.
            </p>
          </section>
          <section className="about" id="about">
            <h2 className="title">Rigel's Protocol</h2>
            <hr className="hr" />
            <div>
              <span className=""> Lead Blockchain Engineer.</span>
            </div>
            <p classname="fade"> March 2021 - Present</p>
            <p className="fade">
              Direct cross chain swapping without order books, deposits or coin
              wrapping. High Yield Annual Interest for RGP token holders and
              Liquidity Providers.
            </p>
            <a
              href="https://smartswap.rigelprotocol.com/#/swap"
              target="_blank"
            >
              Direct cross chain swapping
            </a>
            <p className="fade">
              Yield farming, also referred to as liquidity mining, is a way to
              generate rewards with cryptocurrency holdings. In simple terms, it
              means locking up cryptocurrencies and getting rewards.
            </p>
            <a
              href="https://smartswap.rigelprotocol.com/#/farming-v2"
              target="_blank"
            >
              Yield Farm
            </a>
            <p className="fade">
              Rigel Protocol Special pool: where you stake your RGP token and
              you can refer a friend to earn more rewards
            </p>
            <a
              href="https://smartswap.rigelprotocol.com/#/farming-v2/staking-RGPv2"
              target="_blank"
            >
              Special Pool
            </a>
            <p className="fade">
              The Rigel Protocol Collections will be unlike most NFTs we see
              ongoing in the Defi ecosystem. As NFTs are not going to be just
              minted and worthless images put out there for you to hold, whilst
              just keeping them shining in your wallets{" "}
            </p>
            <a href="https://smartswap.rigelprotocol.com/#/nft" target="_blank">
              Rigel NFT
            </a>
            <p className="fade">
              Twhere bidding takes place and the top three (3) winners are
              qualify for reward and some set of random address in the pool.
            </p>
            <a
              href="https://smartswap.rigelprotocol.com/#/smartbid"
              target="_blank"
            >
              smart Bid
            </a>
            <p className="fade">
              The Rigel Protocol Launchpad Platform helps innovative DeFi
              Projects to succeed in the highly competitive Blockchain industry
              and fund their development needs. At the same time, participating
              projects have access to the wide platform community and full
              support from the Rigel Protocol team
            </p>
            <a href="https://launchpad.rigelprotocol.com/" target="_blank">
              Launchpad
            </a>
            <p className="fade">
              The Gift DApp is fabricated by Rigel Protocol and it comes with
              extremely good features. The gifting system permits influencers
              and projects to gift/reward their fans/community in crypto.
            </p>
            <a href="https://gift.rigelprotocol.com/" target="_blank">
              GiftDApp
            </a>
          </section>
          <section className="about" id="project">
            <h2 className="title">Project</h2>
            <hr className="hr" />
            <div></div>
            <p>
              I was involved as technical expert in several EU, national and
              regional research projects. Now, I'm working to build the next
              generation web apps supporting startups and amazing projects.
            </p>{" "}
            <br />
            <p className="fade">
              An Individual Retirement Account designed specifically for
              Decentralized Exchanges. Where reward are auto claim in different
              currency and Audit.
            </p>
            <a href="https://www.dexfinance.com/dexira/" target="_blank">
              DexIRA.Finance
            </a>{" "}
            <br />
            <a
              href="https://www.dexfinance.com/wp-content/uploads/2022/01/DEXIRA-SMART-CONTRACT-SECURITY-AUDIT.pdf"
              target="_blank"
            >
              DexIRA.Finance Audit
            </a>{" "}
            <br />
            <p className="fade">
              Dexira Migration token from V1. Token migration involves balance
              transfers of investors from previous token in investor Ethereum
              wallets to a new token. This happen when a token is transision to
              a new address because bug was discovered in the previous
              deployment.
            </p>
            <a href="https://tikiswapfrontend.netlify.app/" target="_blank">
              Dex Migration
            </a>
            <p className="fade">
              BSC Games promised to be a GameFi project on the Binance Smart
              Chain. The primary aim of BSC Games is to turn gaming from just
              leisure activity to a cash cow by merging gaming
            </p>
            <a href="https://casino.bscgames.win/" target="_blank">
              BSCG Game
            </a>
            <p className="fade">
              An industry that specialized in buying of crypto currency. -
              process of selling: Create an account. Transfer your currency into
              a generated address specially for your account. sell to the
              platform.
            </p>
            <a href="https://jdbglobal.netlify.app/user/login" target="_blank">
              JDBGlobal
            </a>
            <p className="fade">
              Cheetah.Finance token is a token based on the conservation of the
              animal kingdom. Destined to Ecotourism and the conservation of
              cheetahs.
            </p>
            <a href="https://tokencheetah.com/" target="_blank">
              Cheetah.finance
            </a>
            <p className="fade">Bida.Finance ICO contract audit</p>
            <a
              href="https://eu.docs.wps.com/l/sALmM9UutssFV6P24hKynFA"
              target="_blank"
            >
              Bida Finance ICO Audit
            </a>
            <br />
            <a href="https://bida.finance/quickstart" target="_blank">
              Bida Finance ICO
            </a>
          </section>
          <section className="about" id="openSource">
            <h2 className="title">Open source</h2>
            <hr className="hr" />
            <div></div>
            <p>
              My Love and passion toward Ethereum Community has driven me to
              contribute to Ethereum Improvement Protocol (EIP) Open source
            </p>
            <p className="fade">
              EIPs are standards specifying potential new features or processes
              for Ethereum, it contain technical specifications for the proposed
              changes and act as the “source of truth” for the community.
              Network upgrades and application standards for Ethereum are
              discussed and developed through the EIP process.
            </p>
            <a href="https://github.com/OnahProsperity/EIPs" target="_blank">
              EIP Contribution
            </a>
            <p className="fade">
              Release an Open source Centralized Exchange npm package with the
              database schema to enable easy installation open for contribution
            </p>
            <a href="https://www.npmjs.com/package/cexdb" target="_blank">
              Centralized Exchange NPM
            </a>
          </section>
          <section className="about" id="education">
            <h2 className="title">Education</h2>
            <hr className="hr" />
            <div></div>
            <p>
              I studied Software Engineering and I have performed several
              research projects during my undergraduate anf after.
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
            <p className="fade">
              Research on ETH Prove of work algorithm, alway join the CoreDev
              team weekly meeting in other to follow the Merge to POS
            </p>
          </section>
          <section className="about" id="skills">
            <h2 className="title">Skills</h2>
            <hr className="hr" />
            <div className="Item">
              <li>Blockchain, Smart Contracts, DApps, NFT</li>
              <li>
                EVMs supported Networks such as: Ethereum, Layer II, Binance
                Smart Chain, Polygon Network. E.T.C
              </li>
              <li>
                OpenZeppelin, Solidity, Web3.js, EthersJS, Truffle, Hardhat,
                MetaMask
              </li>
              <li>
                ERC20, ERC721, ERC1155, EIP2981, ERC1363, EIP2535, EIP-2612,
                ERC-4626.
              </li>
              <li>Supervision of Full Stack</li>
              <li>Javascript, Typescript, React, theGraph</li>
              <li>Node.js</li>
              <li>Googling</li>
              <li>Git</li>
            </div>
          </section>
          <section className="about" id="interest">
            <h2 className="title">Interest</h2>
            <hr className="hr" />
            <div></div>
            <p>
              I love Footbal, music, and object-oriented programming too. I'm
              always interested in innovation regarding blockchain and
              innovation tools
            </p>
          </section>
          <section className="about" id="contact">
            <h2 className="title">Contact</h2>
            <hr className="hr" />
            <div></div>
            <p>Open to getting in touch with awesome people and projects.</p>
          </section>
          <div className="Header">
            <ul className="social">
              <li>
                <a href="https://github.com/OnahProsperity" target="_blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/OnahProsperity" target="_blank">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/prosper-otor-3050791a6"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://wa.me/+2348136213958" target="_blank">
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
