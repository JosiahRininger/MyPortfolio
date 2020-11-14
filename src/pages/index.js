import React from "react"

import Layout from "../components/layout"
import Card from "../components/Card"
import Wave from "../components/Wave"
import styled from "styled-components"
import ExperienceCell from "../components/ExperienceCell"
import ArticleCell from "../components/ArticleCell"
import Contact from "../components/Contact"
import Resume from "../components/Resume"
import pdf from '../files/Resume.pdf'

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Josiah Rininger</h1>
        <p>Positive, Energetic iOS Developer at iHeartMedia</p>
    <a href={pdf}>
          <Resume
          title="Download Resume"
        /></a>
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

      <div id={"experience"} className="ExperienceSection">
        <h2>Experience</h2>
        <ExperienceCell
          image={require("../images/iheart-logo.jpg")}
          link="https://www.iheartmedia.com"
          company="iHeartMedia"
          position="iOS Engineer"
          time="Apr 2020 - Current"
          details="At iHeartMedia, the parent company of iHeartRadio, I work on a team of developers as an Associate iOS Engineer utilizing an agile workflow. I work primarily on maintaining and updating the flagship iOS Application with a high focus on monetization and have had the opportunity to build out entire features. We use many tools and frameworks, such as Swift, Objective-C, Realm, TestFlight, Jenkins, BAPromise, AppCenter, and much more."
        />
        <ExperienceCell
          image={require("../images/TWDC.png")}
          link="https://thewaltdisneycompany.com"
          company="The Walt Disney Company"
          position="iOS Developer Intern"
          time="Jan 2020 - Apr 2020"
          details="While working as a Professional Intern at The Walt Disney Company, I worked as an iOS Developer Intern on the PhotoPass Team. PhotoPass is a feature in the Disney World and Disneyland apps that allow users to access photos taken at the park. I worked primarily on a dynamic framework in conjunction with many other frameworks that other teams at Disney managed which are all used in Disney’s flagship park applications. Working with my team gave me the chance to learn about many tools and frameworks, including Carthage, Charles, Accessibility Inspector, and many iOS photo editing libraries."
        />
        <ExperienceCell
          image={require("../images/mm.png")}
          link="https://www.mobile-mentor.com"
          company="Mobile Mentor"
          position="iOS Developer Intern"
          time="Apr 2019 - Feb 2020"
          details="During my time at Mobile Mentor, I got the chance to work on a team of 6 iOS Developers building many features for physician and client-facing applications that would be used for one of the nation’s largest healthcare companies, HCA. The primary task of my internship was building their client-facing Zendesk in-House iOS app. This led me to working with multiple tools, frameworks, and services, such as Azure Identity Platform, Azure Blob Storage, Server-less Azure Functions, MSAL & ADAL Authentication Libraries, Urban Airship, OAuth 2.0, OpenID Connect, Zendesk SDK, and Firebase Analytics/Crashlytics."
        />
        <ExperienceCell
          image={require("../images/mtsu-logo.png")}
          link="https://www.mtsu.edu"
          company="Middle Tennessee State University"
          position="iOS Developer"
          time="Jan 2019 - Current"
          details="At MTSU, the university that I’m currently attending, I’m working on their mobile team as an iOS Developer. This was my first iOS developing position and gave me a great foundation in iOS Development. I have contributed to a team of 9 developers that maintain the iOS and Android mobile apps that are used by the MTSU student body (30k+ students). During my time on the team, I’ve gotten the chance to contribute to a large codebase using an MVVM architecture and reactive programming through RxSwift."
        />
      </div>

      <div className="Cards" id={"applications"}>
        <h2>Apps</h2>
        <div className="CardGroup">
          <Card
            title="iHeartRadio"
            link="https://apps.apple.com/us/app/iheart-radio-music-podcasts/id290638154"
            text="App Store Link"
            disc="worked on"
            image={require("../images/ihr_Appstore_icon.png")}
          />
          <Card
            title="My Disney Experience"
            link="https://apps.apple.com/us/app/my-disney-experience/id547436543"
            text="App Store Link"
            disc="worked on"
            image={require("../images/app-icon-mdx-1024.png")}
          />
          <Card
            title="Disneyland®"
            text="App Store Link"
            disc="worked on"
            link="https://apps.apple.com/us/app/disneyland/id1022164656"
            image={require("../images/app-icon-dlr-1024.png")}
          />
          <Card
            title="MTSU Mobile"
            text="App Store Link"
            disc="worked on"
            link="https://apps.apple.com/us/app/mtsu-mobile/id494081469"
            image={require("../images/mtsu-app-icon.png")}
          />

          <Card
            title="m.power"
            text="Company Website"
            disc="built on contract"
            link="https://www.mobile-mentor.com"
            image={require("../images/m.power-app-icon.png")}
          />
          <Card
            title="Intervally"
            text="Github Link"
            disc="in progress"
            link="https://github.com/JosiahRininger/Intervally"
            image={require("../images/intervally-app-icon.png")}
          />

          <Card
            title="Spyfall ∙ Mobile"
            text="App Store Link"
            disc="built & own"
            link="https://apps.apple.com/us/app/spyfall-mobile/id1499561444"
            image={require("../images/spyfall-app-icon.png")}
          />

          <Card
            title="Spyfall+ ∙ Mobile"
            text="App Store Link"
            disc="built & own"
            link="https://apps.apple.com/us/app/spyfall-mobile/id1501939797"
            image={require("../images/spyfallplus-app-icon.png")}
          />

          <Card
            title="BMI Calculator"
            text="App Store Link"
            disc="built & own"
            link="https://apps.apple.com/us/app/bmi-calculator-fast-simple/id1467544257"
            image={require("../images/bmi-app-icon.png")}
          />
        </div>
      </div>

      <div id={"articles"} className="ArticlesSection">
        <h2>Articles</h2>
        <ArticleCell
          image={require("../images/BPLogo.png")}
          link="https://medium.com/better-programming/how-to-become-an-ios-developer-c542bf02fd2"
          company="How to Become an iOS Developer"
          position="A huge list of helpful resources to help you get started as an iOS developer today"
          time="Aug 2020"
          details="Selected by Medium Curators"
        />
        <ArticleCell
          image={require("../images/MediumLogo.png")}
          link="https://medium.com/@josiahrininger/how-do-spotify-and-apple-music-pay-artists-media-143189b12ef9"
          company="How do Spotify and Apple Music pay artists? — Media"
          position="Distribution model of large music streaming services"
          time="Dec 2020"
          details=""
        />
        <ArticleCell
          image={require("../images/BPLogo.png")}
          link="https://medium.com/better-programming/how-to-programmatically-add-shadow-rounded-corners-to-a-view-swift-df004ac98fa5"
          company="How To Programmatically Add Shadow and Rounded Corners to a View — Swift"
          position="It’s not always enough to just define your properties and add a corner radius"
          time="Aug 2019"
          details=""
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
