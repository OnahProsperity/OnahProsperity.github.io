import React, { useState } from "react";

import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./About.css";

import { ImArrowDown } from "react-icons/im";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaTelegram,
  FaBars,
} from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { VscCalendar } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";
import "./Home.css";
import useLocalStorage from "use-local-storage";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import Helmet from "react-helmet";
import Projects from "./Projects/Project";
import MyProjects from "./Projects2/MyProjects";
import Ytvideos from "./Ytvideos";

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
      padding: 5px;
      display: flex;
      justify-content: flex-end;
      color: var(--text-primary);
      text-decoration: none;
    }

    .navbar-nav,
    .nav-link {
      height: 60px;
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
      padding-bottom: 0px;
      width: 60px;
    }
  `;
  return (
    <div data-theme={theme}>
      <Helmet>
        <title>Prosperity Onah | Web and Blockchain Developer</title>
        <meta
          name="description"
          content="giving you the the best is our watchword"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Prosperity Onah,
          Web Developer,
           Blockchain Developer,
           Software Engineer, 
          Persionate About Ethereum"
        />
      </Helmet>
      <Styles>
        <Navbar>
          <Nav>
            <div className="menu-bar">
              <Link to="/" className="nav-btn">
                Home
              </Link>
              <ul>
                <li>
                  <a className="details">
                    Details
                    <ImArrowDown />
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
              <i onClick={switchTheme}>
                {theme === "dark" ? (
                  <HiMoon size={25} aria-label="my himoon" />
                ) : (
                  <CgSun size={25} aria-label="my cgsun" />
                )}
              </i>
            </div>
          </Nav>
          <div className="mobileMenu">
            <FaBars onClick={showSidebar} aria-label="my fabars" />
          </div>
        </Navbar>
      </Styles>

      <div className="container-1">
        <div className="leftside" onClick={showSidebar}>
          <ul className={isMobile ? "active" : "sidebar"}>
            <li className="home">
              <Link to="/">Home</Link>
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
                <a
                  href="https://github.com/OnahProsperity"
                  target="_blank"
                  rel="noreferrer"
                  alt="github"
                  aria-label="my github"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/OnahProsperity"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="my twitter"
                  alt="twitter"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/prosper-o-3050791a6/"
                  target="_blank"
                  aria-label="my linkedin"
                  alt="linkedin"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Encryption01"
                  alt="telegram"
                  aria-label="my telegram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegram />
                </a>
              </li>
            </ul>
          </header>
          <section className="about" id="about">
            <h2 className="title">About</h2>
            <hr className="hr" />
            <p className="aboutme">
              I'm Onah Prosper with over 3 years of experience in blockchain
              technology. After graduating as a Software Engineer at Dambis
              Institute of Technology in 2017, I got a position to supervise @
              <b>Metamate</b> Nig. Ltd, a steel production company, where I
              learned how to manage, document, and supervise workers, before
              migrating to learning the technology behind Blockchain in 2019.
              Currently I am the Lead Blockchain Software Engineer at {"  "}
              <b />
              <a
                href="https://www.rigelprotocol.com/"
                target="_blank"
                aria-label="rigel protocol com"
                rel="noreferrer"
              >
                Rigel Protocol Lab.
              </a>
              {"  "}I am constantly looking for and experimenting with new tools
              and opportunities for innovation.
            </p>
          </section>
          {/* <section className="about">
            <Projects />
          </section> */}
          <section className="about" id="myProjects">
            <MyProjects />
          </section>

          <section className="about" id="education">
            <h2 className="title">Education</h2>
            <hr className="hr" />
            <div></div>

            <div className="education">
              <div className="divspan">
                <span>Dambis Institue of Technology</span>
                <span>2014 - 2017</span>
              </div>
              <p>Software Engineering</p>
              <div className="divspan">
                <span>DApp University </span>
                <span>2021</span>
              </div>
              <p>Blockchain Development</p>
              <div className="divspan">
                <span>Advance Solidity Engineer (Udemy) </span>
                <span>2022</span>
              </div>
              <p>Advance Solidity: Yul and Assembly</p>
            </div>
          </section>
          <section className="about" id="expirience">
            <h2 className="title">Experience</h2>
            <hr className="hr" />

            <div className="expdiv">
              <HiBadgeCheck className="check" />
              <span>Smart Contract Auditor/Enginee @Nethermind.io</span>
              <br />
              <VscCalendar className="check" />

              <span>October 2022.... Present</span>
              <div className="Item">
                <li>Participated in Audits of smart contracts.</li>
                <li>Participated In the Documentation of reports.</li>
                <li>Participated in writing smart contracts.</li>
                <li>Participated in Research</li>
              </div>
              <div className="skills">
                <GiSkills className="check" />
                <span>Skills:</span>
                <p>
                  Solidity, Cairo, Typescripts, Python, Research, Reverse
                  Engineering, Slither, Echidna, Hardhat, Starknet.
                </p>
                <hr className="hrexpirience" />
              </div>
            </div>

            <div className="expdiv">
              <HiBadgeCheck className="check" />
              <span>Lead Blockchain Engineer @RigelProtocol</span>
              <br />
              <VscCalendar className="check" />
              <span>Mar 2021 - October 2022</span>
              <div className="Item">
                <li>Head of Smart Contract.</li>
                <li>
                  Managing Technical platform and Smart Contracts Achitectture
                </li>
                <li>Providing weekly and monthly developer reports</li>
                <li>
                  Providing items for smooth integrations and guiding junior
                  developers.
                </li>
                <li>Automated testing for smart contracts.</li>
                <li>Smart contracts Audits.</li>
                <li>
                  Research on User experience and ideas that can be added to the
                  smart contracts.
                </li>
                <li>
                  Led the team to build DApps using MERN stack and Integrating
                  to Blockchain (web3JS/EthersJS)
                </li>
                <div className="skills">
                  <GiSkills className="check" />
                  <span>Skills:</span>
                  <p>
                    Solidity, Typescript, NodeJS, Javascript, Hardhat, Truffle,
                    Slither, Echidna, Manticore, Reverse Engineering, Golang,
                    React, MongoDB, Git. Project delivery, Openzeppelin, Cairo,
                    Starknet, Nile
                  </p>
                  <hr className="hrexpirience" />
                </div>
              </div>
            </div>
            <div className="expdiv">
              <HiBadgeCheck className="check" />
              <span>Head of Engineer (Contract-based) @Martianplace</span>
              <br />
              <VscCalendar className="check" />
              <span>December 2020 - Mar 2021</span>
              <div className="Item">
                <li>
                  Got reports from all Engineering activities from the lead
                  devs. .
                </li>
                <li>Participated In the Documentation of reports.</li>
                <li>Supervised the growth and progress of Engineers. .</li>
                <li>Software Project Management.</li>
              </div>
              <div className="skills">
                <GiSkills className="check" />
                <span>Skills:</span>
                <p>
                  Solidity, Typescript, Javascript, IPFS storage files system,
                  NextJS, Web3JS, EthersJS.
                </p>
                <hr className="hrexpirience" />
              </div>
            </div>
            <div className="expdiv">
              <HiBadgeCheck className="check" />
              <span>
                Smart Contract Solidity Developer (open-source) @DoinGud
              </span>
              <br />
              <VscCalendar className="check" />
              <span>Sep 2020 - Mar 2021</span>
              <div className="Item">
                <li>
                  Investigated innovative ways for blockchain to benefit during
                  COVID.
                </li>

                <div className="skills">
                  <GiSkills className="check" />
                  <span>Skills:</span>
                  <p>Solidity, NodeJS, Web3JS, Infura.io.</p>
                  <hr className="hrexpirience" />
                </div>
              </div>
            </div>
            <div className="expdiv">
              <HiBadgeCheck className="check" />
              <span>Blockchain Developer Freelance</span>
              <br />
              <VscCalendar className="check" />
              <span>Jul 2019 - Mar 2021</span>
              <div className="Item">
                <li>Smart contract security Audits.</li>
                <li>Upgradeable Contract..</li>
                <li>Betting platform.</li>
                <li>Created a bridge Platform (ETH-BSC)</li>
                <li>Documentations.</li>
                <li>Custom DApps</li>
              </div>
              <div className="skills">
                <GiSkills className="check" />
                <span>Skills:</span>
                <p>
                  Solidity, NodesJS, Typescript, Javascript, Angular, React,
                  Slither, Echidna, Manticore, Hardhat, Truffle, web3JS,
                  EthersJS.
                </p>
                <hr className="hrexpirience" />
              </div>
            </div>
            <div className="expdiv">
              <HiBadgeCheck className="check" />
              <span> Supervisor @MetaMate Nig. Ltd.</span>
              <br />
              <VscCalendar className="check" />
              <span>April 2018 - Aug. 2018</span>
              <div className="Item">
                <li>Supervised the production of steel.</li>
                <li>Documentation of outflow/inflow materials.</li>
              </div>
              <div className="skills">
                <GiSkills className="check" />
                <span>Skills:</span>
                <p>Leadership, Supervised, Timeliness.</p>
                <hr className="hrexpirience" />
              </div>
            </div>
          </section>
          <section className="about" id="skills">
            <h2 className="title">Skills</h2>
            <hr className="hr" />
            <div className="Item">
              <li>Blockchain, Smart Contracts Audits, DApps, NFT</li>
              <li>Solidity, YUL, CAIRO, Starknet, GO, NodeJS,</li>
              <li>Javascript, Typescript, React, theGraph.</li>
              <li>
                OpenZeppelin, Web3.js, EthersJS, Truffle, Hardhat, Slither,
                Echidna.
              </li>
              <li>Googling</li>
              <li>Git, CI/CD</li>
              <li>Node.js</li>
              <li>Googling</li>
              <li>Git</li>
            </div>
          </section>

          <section className="about" id="ytVideos">
            <Ytvideos />
          </section>

          {/* PROJECTS */}
          <section className="about" id="openSource">
            <h2 className="title">Open-source / Achievement</h2>
            <hr className="hr" />
            <div></div>
            <p>
              My enthusiasm for the Ethereum community has led me to contribute
              to the following open-source projects.
            </p>
            <p className="fade">
              Participated in the discussion, development, and review of
              EIP-5008
            </p>
            <a
              href="https://github.com/ethereum/EIPs/pull/5008"
              target="_blank"
              rel="noreferrer"
              aria-label="rigel protocol farming"
            >
              <b>Ethereum Foundation:</b>
            </a>
            <p className="fade">
              Created an Issue and a bug fix PR on the Update of Openzeppelin to
              enable ECDSA Signature Malleability In Lukso Network.
            </p>
            <a
              href="https://github.com/ethereum/EIPs/pull/5008"
              target="_blank"
              aria-label="rigel protocol farming"
              rel="noreferrer"
            >
              <b>Lukso:</b>
            </a>
            <p className="fade">
              Created a bug Fix PR which fixed the <b>Deployment MD</b>
            </p>
            <a
              href="https://github.com/lukso-network/lsp-smart-contracts/pull/183"
              target="_blank"
              aria-label="rigel protocol farming"
              rel="noreferrer"
            >
              <b>Deployment MD</b>
            </a>
            <p className="fade">
              Participated in creating a fixed document for the{" "}
              <b>
                PollingBlockTracker when trying to update the latest block in
                #3357
              </b>
            </p>
            <a
              href="https://github.com/ethereum/EIPs/pull/5008"
              target="_blank"
              aria-label="rigel protocol farming"
              rel="noreferrer"
            >
              <b>Truffle:</b>
            </a>
            <p className="fade">
              Created an Open-source Library for <b>Centralized Exchange</b>
            </p>
            <a
              href="https://www.npmjs.com/package/cexdb"
              target="_blank"
              aria-label="rigel protocol farming"
              rel="noreferrer"
            >
              <b> Open-source:</b>
            </a>
          </section>
          <section className="about" id="research">
            <h2 className="title">Research</h2>
            <hr className="hr" />
            <div></div>

            <div className="Item">
              <li>MEV</li>
              <li>Account Abstraction.</li>
              <li>Sharding.</li>
              <li>
                Research on the ETH Proof-of-work and Proof-of-stake algorithm.
              </li>
              <li>Research of Starknet Layer II protocol.</li>
              <li>Defi, and Smart Contracts Hacks.</li>
              <li>CAIRO SHA 256 Algorithm.</li>
            </div>
          </section>
          <section className="about" id="project">
            <h2 className="title">Projects</h2>
            <Helmet>
              <meta name="description" content="Lead Blockchain Engineer" />
            </Helmet>
            <hr className="hr" />
            <div></div>
            <p className="fade">
              Direct cross chain swapping without order books, deposits or coin
              wrapping. High Yield Annual Interest for RGP token holders and
              Liquidity Providers.
            </p>
            <a
              href="https://smartswap.rigelprotocol.com/#/swap"
              alt="rigelprotocol"
              target="_blank"
              aria-label="rigel protocol"
              rel="noreferrer"
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
              aria-label="rigel protocol farming"
              rel="noreferrer"
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
              aria-label="rigel protocol staking"
              rel="noreferrer"
            >
              Special Pool
            </a>
            <p className="fade">
              The Rigel Protocol Collections will be unlike most NFTs we see
              ongoing in the Defi ecosystem. As NFTs are not going to be just
              minted and worthless images put out there for you to hold, whilst
              just keeping them shining in your wallets{" "}
            </p>
            <a
              href="https://smartswap.rigelprotocol.com/#/nft"
              target="_blank"
              aria-label="rigel protocol com"
              rel="noreferrer"
            >
              Rigel NFT
            </a>
            <p className="fade">
              Where bidding takes place and the top three (3) winners are
              qualify for reward and some set of random address in the pool.
            </p>
            <a
              href="https://smartswap.rigelprotocol.com/#/smartbid"
              target="_blank"
              aria-label="rigel protocol smartbib"
              rel="noreferrer"
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
            <a
              href="https://launchpad.rigelprotocol.com/"
              target="_blank"
              aria-label="launchpad rigel protocol"
              rel="noreferrer"
            >
              Launchpad
            </a>
            <p className="fade">
              The Gift DApp is fabricated by Rigel Protocol and it comes with
              extremely good features. The gifting system permits influencers
              and projects to gift/reward their fans/community in crypto.
            </p>
            <a
              href="https://gift.rigelprotocol.com/"
              target="_blank"
              aria-label="gift rigel protocol"
              rel="noreferrer"
            >
              GiftDApp
            </a>

            <p className="fade">
              An Individual Retirement Account designed specifically for
              Decentralized Exchanges. Where reward are auto claim in different
              currency and Audit.
            </p>
            <a
              href="https://www.dexfinance.com/dexira/"
              target="_blank"
              aria-label="dex finance dexira"
              rel="noreferrer"
            >
              DexIRA.Finance
            </a>
            <br />
            <a
              href="https://www.dexfinance.com/wp-content/uploads/2022/01/DEXIRA-SMART-CONTRACT-SECURITY-AUDIT.pdf"
              target="_blank"
              aria-label="dexfinace content uploads"
              rel="noreferrer"
            >
              DexIRA.Finance Audit
            </a>
            <br />
            <p className="fade">
              Dexira Migration token from V1. Token migration involves balance
              transfers of investors from previous token in investor Ethereum
              wallets to a new token. This happen when a token is transision to
              a new address because bug was discovered in the previous
              deployment.
            </p>
            <a
              href="https://tikiswapfrontend.netlify.app/"
              target="_blank"
              aria-label="tikiSwap frontend"
              rel="noreferrer"
            >
              Dex Migration
            </a>
            <p className="fade">
              BSC Games promised to be a GameFi project on the Binance Smart
              Chain. The primary aim of BSC Games is to turn gaming from just
              leisure activity to a cash cow by merging gaming
            </p>
            <a
              href="https://casino.bscgames.win/"
              target="_blank"
              aria-label="casino games"
              rel="noreferrer"
            >
              BSCG Game
            </a>
            <p className="fade">
              An industry that specialized in buying of crypto currency. -
              process of selling: Create an account. Transfer your currency into
              a generated address specially for your account. sell to the
              platform.
            </p>
            <a
              href="https://jdbglobal.netlify.app/user/login"
              target="_blank"
              aria-label="global netlify"
              rel="noreferrer"
            >
              JDBGlobal
            </a>
            <p className="fade">
              Cheetah.Finance token is a token based on the conservation of the
              animal kingdom. Destined to Ecotourism and the conservation of
              cheetahs.
            </p>
            <a
              href="https://tokencheetah.com/"
              target="_blank"
              aria-label="token cheetah"
              rel="noreferrer"
            >
              Cheetah.finance
            </a>
            <p className="fade">Bida.Finance ICO contract audit</p>
            <a
              href="https://eu.docs.wps.com/l/sALmM9UutssFV6P24hKynFA"
              target="_blank"
              aria-label="docs wps"
              rel="noreferrer"
            >
              Bida Finance ICO Audit
            </a>
            <br />
            <a
              href="https://bida.finance/quickstart"
              target="_blank"
              aria-label="bida finance"
              rel="noreferrer"
            >
              Bida Finance ICO
            </a>
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
                <a
                  href="https://github.com/OnahProsperity"
                  target="_blank"
                  aria-label="my github"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/OnahProsperity"
                  target="_blank"
                  aria-label="my twitter"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/prosper-o-3050791a6/"
                  target="_blank"
                  aria-label="my linkedin"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Encryption01"
                  target="_blank"
                  aria-label="my telegram"
                  rel="noreferrer"
                >
                  <FaTelegram />
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
