import React, { useState } from 'react'
import Me from './assets/ME.webp'
import Congrats from './assets/graduate-me.png'
import Resume from './assets/NAB-resume.pdf'
import ResumeImg from './assets/resume.png'

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterSquare,
  AiFillDribbbleSquare,
  AiFillBehanceSquare,
  AiOutlineMail,
  AiFillInstagram
  
} from "react-icons/ai";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNodedotjs,
  SiMaterialui,
  SiReact,
  SiGo,
  SiPhp,
  SiMysql,
  SiAngular,
  SiPython,

} from "react-icons/si";

import {
  BsTelephone
} from "react-icons/bs"


const About = () => {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  
  const MyName = "Neil Adrian C. Balmes"

  return (
    <div className='page pb-24 pt-24'>
      <div className="flex justify-center max-[838px]:flex-col-reverse max-[838px]:items-center gap-4 mb-8">
        <div className='max-w-sm'>
          <h2 className="text-center text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl md:text-left">About Me</h2>
          <p className="text-justify text-md py-2 leading-snug leading-8 text-gray-800 dark:text-gray-200">
            Hello! I am <span className="text-teal-500"> {MyName} </span>I'm a Front-end Developer from the Philippines, Who want to be a Fullstack Developer
          </p>
          <p className="text-justify text-md py-2 leading-snug leading-8 text-gray-800 dark:text-gray-200">
            On a journey of non-stop learning new exciting things and keeping up with what's latest in tech.
          </p>
        </div>
        <img src={Me} alt="" className='max-w-[20rem] rounded-lg' width={'90%'} />
      </div>
      <div className='section-body'>
        <div className='about-grid grid grid-cols-about-grid grid-rows-[1fr] gap-[32px]'>
          {/* <div className='about-grid-item about-grid--1 bg-card-bg-light text-gray-600 dark:text-gray-400 dark:bg-card-bg-dark'>

          </div> */}

          <div className='about-grid-item about-grid--2  bg-card-bg-light text-gray-600 dark:text-gray-400 dark:bg-card-bg-dark' data-about='lang'>
            <div className="card-wrapper">
              <div className="card__header">Languages</div>
              <div className="card__body">
                <div className="card-grid">
                  <div className="card-grid__item">
                    <SiHtml5 />
                    <div>HTML</div>
                  </div>
                  <div className="card-grid__item">
                    <SiCss3 />
                    <div>CSS</div>
                  </div>
                  <div className="card-grid__item">
                    <SiJavascript />
                    <div>JavaScript</div>
                  </div>
                  <div className="card-grid__item">
                    <SiGo />
                    <div>Go</div>
                  </div>
                  <div className="card-grid__item">
                    <SiPhp />
                    <div>PHP</div>
                  </div>
                  <div className="card-grid__item">
                    <SiMongodb />
                    <div>MonggoDB</div>
                  </div>
                  <div className="card-grid__item">
                    <SiMysql />
                    <div>SQL</div>
                  </div>
                  <div className="card-grid__item">
                    <SiPython />
                    <div>Python</div>
                  </div>
                  <div className="card-grid__item">
                    <SiAngular/>
                    <div>Angular</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='about-grid-item about-grid--3 bg-card-bg-light text-gray-600 dark:text-gray-400 dark:bg-card-bg-dark' data-about='libfram'>
            <div className="card-wrapper">
              <div className="card__header">Libraries & Frameworks</div>
              <div className="card__body">
                <div className="card-grid">
                  <div className="card-grid__item">
                    <SiReact />
                    <div>ReactJs</div>
                  </div>
                  <div className="card-grid__item">
                    <SiNodedotjs />
                    <div>NodeJS</div>
                  </div>
                  <div className="card-grid__item">
                    <SiExpress />
                    <div>Express</div>
                  </div>
                  <div className="card-grid__item">
                    <SiRedux />
                    <div>Redux</div>
                  </div>
                  <div className="card-grid__item">
                    <SiJquery />
                    <div>Jquery</div>
                  </div>
                  <div className="card-grid__item">
                    <SiBootstrap />
                    <div>Bootstrap</div>
                  </div>
                  <div className="card-grid__item">
                    <SiTailwindcss />
                    <div>Tailwind</div>
                  </div>
                  <div className="card-grid__item">
                    <SiMaterialui />
                    <div>Material UI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='about-grid-item about-grid--4 bg-card-bg-light text-gray-600 dark:text-gray-400 dark:bg-card-bg-dark' data-about='resume'>
            <div className="card-wrapper">
              <div className="card__header">Resume</div>
              <div className="card__body">
                <a href={Resume} target="_blank" rel="noopener noreferrer" title="Click to view">
                  <img src={ResumeImg} alt="resume Image" />
                </a>
              </div>
            </div>
          </div>

          <div className='about-grid-item about-grid--5 bg-card-bg-light text-gray-600 dark:text-gray-400 dark:bg-card-bg-dark hover:animate-[pulse-light_1.25s_infinite] dark:hover:animate-[pulse-dark_1.25s_infinite]' data-about='call'>
          <a href="tel:+639666640405" title="+639666640405">
							<BsTelephone className='h-[80px] w-[80px]'/>
						</a>
          </div>

          <div className='about-grid-item about-grid--6  bg-card-bg-light text-gray-600 dark:text-gray-400 dark:bg-card-bg-dark' data-about='social'>
            <div className="card-wrapper">
              <div className="card__header">Contact</div>
              <div className="card__body">
                <div className="card-grid">
                <div className="card-grid__item">
                    <div className="social-inner">
                      <a className="social" href="https://github.com/nabalmes" target="_blank">
                        <AiFillGithub/>
                        <h5>Github</h5>
                      </a>
                    </div>
                  </div>
                  <div className="card-grid__item">
                    <div className="social-inner">
                      <a className="social" href="mailto:neilbalmes4200@gmail.com" target="_blank">
                        <AiOutlineMail/>
                        <h5>Email</h5>
                      </a>
                    </div>
                  </div>
                  <div className="card-grid__item">
                    <div className="social-inner">
                      <a className="social" href="https://www.linkedin.com/in/adrian-balmes-64990a258/" target="_blank">
                       <AiFillLinkedin/>
                        <h5>LinkedIn</h5>
                      </a>
                    </div>
                  </div>
                  <div className="card-grid__item">
                    <div className="social-inner">
                      <a className="social" href="https://twitter.com/Adrianbgdck" target="_blank">
                        <AiFillTwitterSquare/>
                        <h5>Twitter</h5>
                      </a>
                    </div>
                  </div>
                  <div className="card-grid__item">
                    <div className="social-inner">
                      <a className="social" href="https://www.instagram.com/balmesneil/" target="_blank">
                        <AiFillInstagram/>
                        <h5>Instagram</h5>
                      </a>
                    </div>
                  </div>
                  <div className="card-grid__item">
                    <div className="social-inner">
                      <a className="social" href="https://dribbble.com/NeilAdrian" target="_blank">
                        <AiFillDribbbleSquare/>
                        <h5>Dribbble</h5>
                      </a>
                    </div>
                  </div>
                  <div className="card-grid__item">
                    <div className="social-inner">
                      <a className="social" href="https://www.behance.net/NeilAdrian" target="_blank">
                        <AiFillBehanceSquare/>
                        <h5>Behance</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='about-grid-item about-grid--7 bg-card-bg-light text-gray-600 dark:text-gray-400 dark:bg-card-bg-dark' data-about='location'>
          <div class="grid__item-inner" title="Batangas City">
          <iframe src="https://embed.waze.com/iframe?zoom=16&lat=13.763021&lon=121.075966&ct=livemap" width="100%" height="100%" allowfullscreen></iframe>
						</div>
          </div>

          <div className='about-grid-item about-grid--8 bg-card-bg-light text-gray-600 dark:text-gray-400 dark:bg-card-bg-dark' data-about="dp-slider">
          <div className="image-wrapper">
							<div className="image" title="it's me, on drums">
								<img src={Congrats} alt="its me graduated"  title='My dream photo'/>
							</div>
						</div>
          </div>

          <div className='about-grid-item about-grid--9 bg-card-bg-light text-gray-600 dark:text-gray-400 dark:bg-card-bg-dark'>
            <div className="card-wrapper">
              <div className="card__header">What's Next?</div>
              <div class="card__body">
								<h3 className='text-center text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl'>Get in Touch</h3>
								<p className="text-center mb-5 text-md py-2 leading-8 text-gray-800 dark:text-gray-200">Wanna work together for something great or just wanna say hello?</p>
								<a href="mailto:neilbalmes4200@gmail.com" className="talk-btn h-10 px-6 font-semibold rounded-md bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white" title="neilbalmes4200@gmail.com">Let's Talk!</a>
							</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
