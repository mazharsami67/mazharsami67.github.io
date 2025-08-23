import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hi, I’m <strong>Mazhar Sami</strong> — a software engineering student at COMSATS University with a passion for building creative and practical digital solutions. Over time, I’ve explored a wide range of skills, from front-end development (React, JavaScript, HTML, CSS) to Java and Python programming, as well as hands-on work with data structures, object-oriented programming, and GUI applications.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I enjoy turning ideas into projects — whether it’s a study planner app, interactive games like tic-tac-toe, or e-commerce concepts like Ethnify, which bring together culture, technology, and design. Alongside coding, I’m deeply curious about digital marketing, UI/UX design, and problem-solving that connects technology with real-world needs.

            I consider myself a logical yet creative thinker, a little introverted but always open-minded, and driven by self-improvement. I love experimenting, learning new tools, and building things that make an impact.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              When I’m not coding, you’ll probably find me exploring filmmaking techniques, reading about science, or imagining new projects to work on. My goal is to keep growing as a developer, collaborate with inspiring people, and eventually create products that blend innovation with cultural identity.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
