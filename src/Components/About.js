import React, { useState } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './About.css';

import { ImArrowDown } from 'react-icons/im';
import {
   FaGithub,
   FaTwitter,
   FaLinkedin,
   FaTelegram,
   // FiMail,
   FaBars,
} from 'react-icons/fa';
import { HiBadgeCheck } from 'react-icons/hi';
import { VscCalendar } from 'react-icons/vsc';
import { GiSkills } from 'react-icons/gi';
import './Home.css';
import useLocalStorage from 'use-local-storage';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import Helmet from 'react-helmet';
import Projects from './Projects/Project';
import MyProjects from './Projects2/MyProjects';
import Ytvideos from './Ytvideos';

function About() {
   let x = ' ✋';

   const [isMobile, setIsMobile] = useState(false);
   const showSidebar = () => setIsMobile(!isMobile);

   const [isActive, setIsActive] = useState(false);
   const disAble = () => setIsActive(!isActive);

   const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

   const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
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
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
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
                                    <a href="#education">Education</a>
                                 </li>
                                 <li>
                                    <a href="#expirience">Experience</a>
                                 </li>
                                 <li>
                                    <a href="#skills">Skills</a>
                                 </li>
                                 <li>
                                    <a href="#openSource"> Source</a>
                                 </li>
                                 <li>
                                    <a href="#research">Research</a>
                                 </li>
                                 <li>
                                    <a href="#interest">interest</a>
                                 </li>
                                 <li>
                                    <a href="#project">Project</a>
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
                        {theme === 'dark' ? (
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
               <ul className={isMobile ? 'active' : 'sidebar'}>
                  <li className="home">
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <a href="#about">About</a>
                  </li>
                  <li>
                     <a href="#education">Education</a>
                  </li>
                  <li>
                     <a href="#expirience">Experience</a>
                  </li>
                  <li>
                     <a href="#skills">Skills</a>
                  </li>
                  <li>
                     <a href="#openSource"> Source</a>
                  </li>
                  <li>
                     <a href="#research">Research</a>
                  </li>
                  <li>
                     <a href="#interest">interest</a>
                  </li>
                  <li>
                     <a href="#project">Project</a>
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
                     <p>Smart Contract Engineer/Auditor</p>
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
                     {/* <li>
                <a
                  href="https://prosperauthor@gmail.com"
                  alt="gmail"
                  aria-label="my mail"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiMail />
                </a>
              </li> */}
                  </ul>
               </header>
               <section className="about" id="about">
                  <h2 className="title">Objective</h2>
                  <hr className="hr" />
                  <p className="aboutme">
                     Seeking a position as a Smart Contract Security Analyst to
                     leverage my expertise in cybersecurity and smart contract
                     audits, with a focus on reviewing and enhancing blockchain
                     projects security.
                  </p>

                  <h2 className="title">Summary</h2>
                  <p className="aboutMe">
                     Experienced Smart contract Engineer professional with a
                     strong background in smart contract security auditing and
                     blockchain technologies. Adept at identifying
                     vulnerabilities, providing actionable recommendations, and
                     mentoring engineering teams in security best practices.
                  </p>
               </section>
               {/* <section className="about">
            <Projects />
          </section> */}

               {/* <section className="about" id="myprojects">
            <MyProjects />
          </section> */}

               <section className="about" id="expirience">
                  <h2 className="title">Experience</h2>
                  <hr className="hr" />

                  <div className="expdiv">
                     <HiBadgeCheck className="check" />
                     <span>Smart Contract Engineer @Posley</span>
                     <br />
                     <VscCalendar className="check" />

                     <span>January 2023.... Present</span>
                     <div className="Item">
                        <li>conduct internal audits of smart contracts.</li>
                        <li>
                           Developed and worked on DeFi protocols and smart
                           contracts, strengthening knowledge in blockchain
                           security.
                        </li>
                        <li>
                           Proactively solved problems and played a key role in
                           mitigating security risks.
                        </li>
                        <li>
                           Proactively solved problems and played a key role in
                           mitigating security risks.
                        </li>
                        <li>participated in writing smart contracts.</li>
                        <li>participated in research work.</li>
                     </div>
                     <div className="skills">
                        <GiSkills className="check" />
                        <span>Skills:</span>
                        <p>
                           Solidity, Typescripts, DeFi Protocols, Security
                           Assessment, Research, Slither, Echidna, Hardhat.
                        </p>
                        <hr className="hrexpirience" />
                     </div>
                  </div>

                  <div className="expdiv">
                     <HiBadgeCheck className="check" />
                     <span>Smart Contract Auditor/Engineer @Nethermind.io</span>
                     <br />
                     <VscCalendar className="check" />

                     <span>October 2022 - December 2022</span>
                     <div className="Item">
                        <li>participated in audits of smart contracts.</li>
                        <li>participated In the documentation of reports.</li>
                        <li>participated in writing smart contracts.</li>
                        <li>participated in research work</li>
                        <li>
                           Reviewed and analyzed numerous smart contracts to
                           ensure compliance with the highest industry security
                           standards.
                        </li>
                        <li>
                           Conducted comprehensive audits of solidity smart
                           contracts, identifying vulnerabilities, design flaws,
                           and quality improvement opportunities.
                        </li>
                        <li>
                           Utilized JavaScript/TypeScript for security
                           assessments and contributed to unit and integration
                           testing efforts.
                        </li>
                        <li>
                           Demonstrated expertise in Solidity, EVM, and
                           blockchain-specific security considerations.
                        </li>
                        <li>
                           Leveraged development frameworks like Hardhat and
                           Foundary, Slither for smart contract assessment in
                           local environments.
                        </li>
                        <li>
                           Applied fuzzing and formal verification techniques to
                           proactively identify security risks.
                        </li>
                        <li>
                           Developed and worked on DeFi protocols and smart
                           contracts, strengthening knowledge in blockchain
                           security.
                        </li>
                        <li>
                           Proactively solved problems and played a key role in
                           mitigating security risks.
                        </li>
                     </div>
                     <div className="skills">
                        <GiSkills className="check" />
                        <span>Skills:</span>
                        <p>
                           Solidity, Cairo, Typescripts, Python, Research,
                           Reverse Engineering, Slither, Echidna, Hardhat, and
                           Starknet.
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
                        <li>Lead smart contract engineer.</li>
                        <li>
                           Mentored and educated internal engineering teams on
                           security best practices, contributing to enhanced
                           security awareness.
                        </li>
                        <li>
                           Collaborated with developers and stakeholders to
                           communicate security issues, providing clear and
                           concise reports and actionable recommendations.
                        </li>
                        <li>
                           Managing the technical platform and smart contract
                           architecture.
                        </li>
                        <li>
                           Providing weekly and monthly developers` reports.
                        </li>
                        <li>
                           Providing items for smooth integrations and guiding
                           junior developers.
                        </li>
                        <li>Automated testing for smart contracts.</li>
                        <li>Smart contract audit.</li>
                        <li>
                           Research on the User experience and ideas that can be
                           added to the smart contracts.
                        </li>
                        <li>
                           Led the team in the development of DApps using MERN
                           stack and Integration with Blockchain
                           (web3JS/EthersJS)
                        </li>
                        <div className="skills">
                           <GiSkills className="check" />
                           <span>Skills:</span>
                           <p>
                              Solidity, Typescript, NodeJS, Javascript, Hardhat,
                              Truffle, Slither, Echidna, Manticore, Reverse
                              Engineering, Golang, React, MongoDB, Git. Project
                              delivery, Openzeppelin, Cairo, Starknet, Nile
                           </p>
                           <hr className="hrexpirience" />
                        </div>
                     </div>
                  </div>
                  <div className="expdiv">
                     <HiBadgeCheck className="check" />
                     <span>
                        Head of Engineering (contract-based) @Martianplace
                     </span>
                     <br />
                     <VscCalendar className="check" />
                     <span>December 2020 - Mar 2021</span>
                     <div className="Item">
                        <li>
                           Got reports from all engineering activities from the
                           lead developers
                        </li>
                        <li>
                           supervised the growth and progress of engineers. .
                        </li>
                        <li>Software Project Management.</li>
                     </div>
                     <div className="skills">
                        <GiSkills className="check" />
                        <span>Skills:</span>
                        <p>
                           Solidity, Typescript, Javascript, the IPFS storage
                           file system, NextJS, Web3JS, and EthersJS.
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
                           investigated innovative ways for blockchain to
                           benefit during COVID.
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
                        <li>Smart contract security audits.</li>
                        <li>Upgradeable Contract..</li>
                        <li>Betting platform.</li>
                        <li>
                           Research on the User experience and ideas that can be
                           added to the smart contracts.
                        </li>
                        <li>created a bridge platform (ETH-BSC).</li>
                        <li>Documentations.</li>
                        <li>Custom DApps</li>
                     </div>
                     <div className="skills">
                        <GiSkills className="check" />
                        <span>Skills:</span>
                        <p>
                           Solidity, NodesJS, Typescript, Javascript, Angular,
                           React, Slither, Echidna, Manticore, Hardhat, Truffle,
                           web3JS, and EthersJS.
                        </p>
                        <hr className="hrexpirience" />
                     </div>
                  </div>
                  <div className="expdiv">
                     <HiBadgeCheck className="check" />
                     <span> Supervisor @MetaMate Nig. Ltd.</span>
                     <br />
                     <VscCalendar className="check" />
                     <span>April 2019 - June. 2019</span>
                     <div className="Item">
                        <li>supervised the production of steel.</li>
                        <li>Documentation of outflow/inflow materials.</li>
                     </div>
                     <div className="skills">
                        <GiSkills className="check" />
                        <span>Skills:</span>
                        <p>Leadership, supervised, and timeliness.</p>
                        <hr className="hrexpirience" />
                     </div>
                  </div>
                  <div className="expdiv">
                     <HiBadgeCheck className="check" />
                     <span>Solo Audits</span>
                     <br />

                     <div className="soloAudits">
                        <GiSkills className="check" />
                        <span>
                           <a
                              href="https://www.dexfinance.com/audits/"
                              target="_blank"
                              aria-label="dex finance"
                              rel="noreferrer"
                           >
                              <span>Dex Finance</span>
                           </a>
                        </span>
                        <br />
                        <span>
                           <GiSkills className="check" />
                           <a
                              href="https://eu.docs.wps.com/l/sALmM9UutssFV6P24hKynFA"
                              target="_blank"
                              aria-label="rigel protocol farming"
                              rel="noreferrer"
                           >
                              <span>
                                 BIDA VESTING SMART CONTRACT SECURITY AUDIT
                              </span>
                           </a>
                        </span>

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
                        OpenZeppelin, Web3.js, EthersJS, Truffle, Hardhat,
                        Slither, Echidna.
                     </li>
                     <li>Googling</li>
                     <li>Git, CI/CD</li>
                     <li>Node.js</li>
                     <li>Googling</li>
                     <li>Git</li>
                  </div>
               </section>

               <section className="about" id="myProjects">
                  <MyProjects />
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
                     My enthusiasm for the Ethereum community has led me to
                     contribute to the following open-source projects.
                  </p>
                  <p className="fade">
                     participated in the discussion, development, and review of
                     EIP-5008.
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
                     created an issue and a bug fix PR on the update of
                     Openzeppelin to enable ECDSA signature malleability In
                     Lukso network.
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
                     created a bug Fix PR which fixed the <b>Deployment MD</b>
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
                     participated in creating a fixed document for the{' '}
                     <b>
                        PollingBlockTracker when trying to update the latest
                        block in #3357
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
                     created an Open-source library for{' '}
                     <b>centralized exchange</b>
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

               <section className="about" id="education">
                  <h2 className="title">Education</h2>
                  <hr className="hr" />
                  <div></div>

                  <div className="education">
                     <div className="divspan">
                        <span>DAMBIS Institute of Technology</span>
                        <span>2014 - 2017</span>
                     </div>
                     <p>Software Engineering</p>

                     <div className="divspan">
                        <span>
                           Federal University of Technology Minna (Nigeria)
                        </span>
                        <span>2017 - 2021</span>
                     </div>
                     <p>Building Engineering</p>

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

               <section className="about" id="research">
                  <h2 className="title">Research</h2>
                  <hr className="hr" />
                  <div></div>

                  <div className="Item">
                     <li>MEV</li>
                     <li>Account Abstraction.</li>
                     <li>Sharding.</li>
                     <li>
                        Research on the ETH Proof-of-work and Proof-of-stake
                        algorithm.
                     </li>
                     <li>Research of Starknet Layer II protocol.</li>
                     <li>Defi, and Smart Contracts Hacks.</li>
                     <li>CAIRO SHA 256 Algorithm.</li>
                  </div>
               </section>
               <section className="about" id="project">
                  <h2 className="title">Projects</h2>
                  <Helmet>
                     <meta
                        name="description"
                        content="Lead Blockchain Engineer"
                     />
                  </Helmet>
                  <hr className="hr" />
                  <div></div>
                  <p className="fade">
                     Direct cross-chain swapping without order books, deposits,
                     or coin wrapping High-yield annual interest for RGP token
                     holders and liquidity providers
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
                     Yield farming, also referred to as liquidity mining, is a
                     way to generate rewards with cryptocurrency holdings. In
                     simple terms, it means locking up cryptocurrencies and
                     getting rewards.
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
                     Rigel Protocol Special Pool: where you stake your RGP token
                     and You can refer a friend to earn more rewards.
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
                     The Rigel Protocol Collections will be unlike most NFTs we
                     see. ongoing in the Defi ecosystem. As NFTs are not going
                     to be minted and worthless images are made available for
                     you to hold, while Just keep them shining in your wallets.{' '}
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
                     Where bidding occurs and the top three (3) winners are
                     determined qualify for a reward, and some sets of random
                     addresses are in the pool.
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
                     Projects to succeed in the highly competitive Blockchain
                     industry and fund their development needs. At the same
                     time, participating projects have access to the wide
                     platform community and full support from the Rigel Protocol
                     team
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
                     Rigel Protocol created the Gift DApp, which includes
                     extremely good features. The gifting system permits
                     influencers and projects to gift or reward their fans or
                     community in crypto
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
                     Decentralized Exchanges. Where rewards are automatically
                     claimed in various situations currency and auditing.
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
                     Token migration requires balance, according to the Dexira
                     Migration Token from V1. transfers of investors from
                     previous tokens into Ethereum wallets to a new token. This
                     happens when a token is converted to a new address because
                     a bug was discovered in the previous deployment.
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
                     BSC Games promised to be a GameFi project on the Binance
                     Smart Chain. The primary aim of BSC Games is to turn gaming
                     from just leisure activity into a cash cow by merging
                     gaming
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
                     an industry that specialized in the buying of crypto
                     currency. process of selling: Create an account. Transfer
                     your currency into a specially generated address for your
                     account. sell to the platform.
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
                     Cheetah. The finance token is a token based on the
                     conservation of the animal kingdom. Dedicated to ecotourism
                     and wildlife conservation cheetahs.
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
                     I love football, music, and object-oriented programming
                     too. I'm always interested in innovation regarding
                     blockchain, innovation tools
                  </p>
               </section>
               <section className="about" id="contact">
                  <h2 className="title">Contact</h2>
                  <hr className="hr" />
                  <div></div>
                  <p>
                     open to getting in touch with awesome people and projects.
                  </p>
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
                     {/* <li>
                <a
                  href="https://prosperauthor@gmail.com"
                  target="_blank"
                  aria-label="my telegram"
                  rel="noreferrer"
                >
                  <FiMail />
                </a>
              </li> */}
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
