import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"
import ExperienceCell from "../components/ExperienceCell"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Josiah Rininger</h1>
        <p>Positive, energetic iOS Developer who loves fitness</p>
        <Wave />
      </div>
      <div className="AboutSection" id={"about"}>
        <h2>About</h2>
        <p>
        Hello, my name’s Josiah Rininger and I’m an iOS Developer!
        In December 2020, I will be graduating from MTSU with a degree in Computer Science and a double minor in Mathematics and Health & Human Performance.
        I’m also a super positive, high-energy fitness nut who is extremely passionate about learning.
        I'm always in constant pursuit of expanding my knowledge with every opportunity I get so feel free to reach out or connect with me on LinkedIn!
        </p>
      </div>
      <div className="Cards" id={"projects"}>
        <h2>Applications</h2>
        <div className="CardGroup">
          <Card
            title="iHeartRadio"
            link="https://apps.apple.com/us/app/iheart-radio-music-podcasts/id290638154"
            text="App Store Link"
            image={require("../images/ihr_Appstore_icon.png")}
          />
          <Card
            title="My Disney Experience"
            link="https://apps.apple.com/us/app/my-disney-experience/id547436543"
            text="App Store Link"
            image={require("../images/app-icon-mdx-1024.png")}
          />
          <Card
            title="Disneyland®"
            text="App Store Link"
            link="https://apps.apple.com/us/app/disneyland/id1022164656"
            image={require("../images/app-icon-dlr-1024.png")}
          />
          <Card
            title="MTSU Mobile"
            text="App Store Link"
            link="https://apps.apple.com/us/app/mtsu-mobile/id494081469"
            image={require("../images/mtsu-app-icon.png")}
          />

          <Card
            title="m.power"
            text="Company Website"
            link="https://www.mobile-mentor.com"
            image={require("../images/m.power-app-icon.png")}
          />
          <Card
            title="Intervally"
            text="Github Link"
            link="https://github.com/JosiahRininger/Intervally"
            image={require("../images/intervally-app-icon.png")}
          />

          <Card
            title="Spyfall ∙ Mobile"
            text="App Store Link"
            link="https://apps.apple.com/us/app/spyfall-mobile/id1499561444"
            image={require("../images/spyfall-app-icon.png")}
          />

          <Card
            title="Spyfall+ ∙ Mobile"
            text="App Store Link"
            link="https://apps.apple.com/us/app/spyfall-mobile/id1501939797"
            image={require("../images/spyfallplus-app-icon.png")}
          />

          <Card
            title="BMI Calculator"
            text="App Store Link"
            link="https://apps.apple.com/us/app/bmi-calculator-fast-simple/id1467544257"
            image={require("../images/bmi-app-icon.png")}
          />
        </div>
      </div>
      <div id={"experience"} className="ExperienceSection">
        <h2>Experience</h2>
        <ExperienceCell
          image={require("../images/iheart-logo.jpg")}
          company="iHeartMedia"
          position="iOS Engineer"
          time="2020 Apr - Current"
          details="At iHeartMedia, the parent company of iHeartRadio, I work on a team of developers as an Associate iOS Engineer utilizing an agile workflow. I work primarily on maintaining and updating the flagship iOS Application. We use many tools and frameworks, such as, Swift, Objective-C, Realm, TestFlight, Jenkins, BAPromise, and much more."
        />
        <ExperienceCell
          image={require("../images/TWDC.png")}
          company="The Walt Disney Company"
          position="iOS Developer Intern"
          time="2020 Jan - 2020 Apr"
          details="Spring of 2020, I had the privilege of being a Professional Intern at The Walt Disney Company. During the internship, I worked as an iOS Developer Intern on the PhotoPass Team. PhotoPass is a feature in the Disney World and Disneyland apps that allows users to access photos taken at the park. The most unique part of this role was getting to work on a dynamic framework in conjunction with many other frameworks that other teams at Disney managed which are all used in Disney’s flagship park applications. Working with my team gave me the chance to learn about many tools and frameworks, including Carthage, Charles, Accessibility Inspector, and many iOS photo editing tools."
        />
        <ExperienceCell
          image={require("../images/mtsu-logo.png")}
          company="Middle Tennessee State University"
          position="iOS Developer"
          time="2019 Jan - Current"
          details="At MTSU, the university that I’m currently attending, I’m working on their Mobile Team as an iOS Developer. This was my first full-time iOS Developing position and gave me a great foundation in iOS Development. I have contributed to a team of 9 developers that maintain the iOS and Android mobile applications that are used by the MTSU student body (30k+ students). I have worked mainly on the new version of MTSU Mobile, which is a brand new application using only the latest tools in iOS Development. During my time on the team, I’ve gotten the chance to contribute to a large codebase using an MVVM architecture and reactive programming through RxSwift."
        />
        <ExperienceCell
          image={require("../images/mm.png")}
          company="Mobile Mentor"
          position="iOS Developer Intern"
          time="2019 Apr - 2020 Feb"
          details="At Mobile Mentor’s Nashville branch, a company who’s primary focus at the time was to build iOS apps for healthcare companies on contract, I got hired on with the task of building their entire client-facing Zendesk in-House iOS application and to contribute to their team of 6 iOS Developers on select features. While on the team, I go the chance to build many features for physician and client facing applications that would be used for one of the nation’s largest healthcare. On the in-House application I built, I had many responsibilities that led me to working with multiple tools, frameworks, services, such as, AzureAD Identity, Azure Identity Platform, Azure Blob Storage, Server-less Azure Functions, MSAL & ADAL Authentication Libraries, Urban Airship, JSON Web Tokens, OAuth 2.0, OpenID Connect, Zendesk SDK, Firebase Analytics and Crashlytics."
        />
      </div>

      <div id={"contact"}>
        <h2>Contact</h2>
        <ContactSection>
          <Contact
            logo={require("../images/logo-github2.png")}
            link="https://github.com/JosiahRininger"
            title="Github"
          />
          <Contact
            logo={require("../images/logo-linkedin.png")}
            link="https://www.linkedin.com/in/josiahrininger/"
            title="LinkedIn"
          />
          <Contact
            logo={require("../images/logo-email.png")}
            link="mailto: josiahrininger@gmail.com"
            title="Email"
          />
        </ContactSection>
      </div>
    </div>
  </Layout>
)

export default IndexPage

const ContactSection = styled.div`
  margin: 0 auto;
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
`

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
