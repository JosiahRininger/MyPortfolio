import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
      <h1>Josiah Rininger</h1>
      <p>iOS Developer</p>
      <Link to="/page-2/">Download Resume</Link>
      <div className="Logos">
        {/* <img src={require('../images/logo-sketch.png')}
        width="50" />
        <img src={require('../images/logo-figma.png')}
        width="50" />
        <img src={require('../images/logo-studio.png')}
        width="50" />
        <img src={require('../images/logo-framer.png')}
        width="50" />
        <img src={require('../images/logo-react.png')}
        width="50" />
        <img src={require('../images/logo-swift.png')}
        width="50" /> */}
        </div>
        <Wave />
        </div>
      </div>
      <div className="Cards">
        <h2>Projects</h2>
        <div className="CardGroup">
          <Card
          title="BMI Calculator"
          text="Project 1"
          image={require('../images/wallpaper.jpg')} />
          <Card
          title="Spyfall"
          text="Project 2"
          image={require('../images/wallpaper2.jpg')} />
          <Card
          title="Git Job"
          text="Project 3"
          image={require('../images/wallpaper3.jpg')} />
          <Card
          title="Portfolio Website"
          text="Project 4"
          image={require('../images/wallpaper4.jpg')} />
       </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="About Me"
      text="I'm a positive, energetic iOS Developer who loves fitness! I’m trying to take advantage of every opportunity that comes my way!"
    />
  </div>
)

export default IndexPage