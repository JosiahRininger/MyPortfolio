import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`

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
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
      <Cell
      title={cell.title}
      image={cell.image} />
    ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage