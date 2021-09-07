import React from 'react'
import BackToTop from 'react-back-to-top-button'
import { IoArrowUpCircle } from 'react-icons/io5'

import Projects from '../components/Projects'
import Contacts from '../components/Contacts'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import portraitPicture from '../images/portrait.jpg'


function Home() {
  return (
    <>
      {/* <div className="background-img"></div> */}
      <section className="section top-page">
        <div class="title">
          <img className="portrait-picture" src="https://i.imgur.com/zEb2Kesb.jpg" alt="portrait picture" />
          {/* <a href="https://imgur.com/zEb2Kes"><img src="https://i.imgur.com/zEb2Kesb.jpg" title="source: imgur.com" /></a> */}
        </div>
        <div className="title">
          <h1>Elsa Guibert <small>(She/Her)</small></h1>
          <h2>Junior Web Developer</h2>
        </div>
        <hr />
        <div className="menu">
          <ul>
            <li><a href="#skills">skills</a></li>
            <li>|</li>
            <li><a href="#projects">projects</a></li>
            <li>|</li>
            <li><a href="#contacts">contacts</a></li>
          </ul>
        </div>
        <hr />
      </section>
      {/* <div className="background-img"></div> */}
      <Skills />
      {/* <div className="background-img"></div> */}
      <Projects />
      {/* <div className="background-img"></div> */}
      {/* <Experience />
      <div className="background-img"></div>
      <Education /> */}
      {/* <div className="background-img"></div> */}
      <Contacts />
      {/* <div className="background-img"></div> */}
      <BackToTop
        // showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutSine"
      >
        <span className="arrow"><IoArrowUpCircle /></span>


      </BackToTop>
    </>
  )
}
export default Home

// const Title = styled.h1`
//   justify-content: center;
//   align-items: center;
// `