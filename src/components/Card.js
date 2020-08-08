import React from "react"
import styled from "styled-components"

const Card = props => (
  <Container target='_blank' href={props.link}>
    <BackImage src={props.image} />
    <Overlay>
    <Title>{props.title}</Title>
    <Subtext>{props.text}</Subtext>
    </Overlay>
  </Container>
)

export default Card

const Container = styled.a`
  width: 230px;
  height: 230px;
  position: relative;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`

const BackImage = styled.img`
  position: absolute;
  top: 0;
  height: 100%;
  z-index: -1;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    transform: translateY(-5%);
  }
`

const Overlay = styled.div`
  width: 230px;
  height: 230px;
  position: relative;
  overflow: hidden;
  border-radius: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.63);
    transform: scale(1.1);
  }
`

const Title = styled.h3`
  color: white;
  font-size: 25px;
  text-align: center;
`

const Subtext = styled.h4`
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  font-weight: 380;
  font-size: 20px;
  text-align: center;

  margin: 0 auto;
`

// import React from "react"
// import styled from "styled-components"

// const Card = props => (
//   <Container target='_blank' href={props.link}>
//     <BackImage src={props.image} />
//     <Overlay>
//     <Title>{props.title}</Title>
//     <Subtext>{props.text}</Subtext>
//     </Overlay>
//   </Container>
// )

// export default Card

// const Container = styled.a`
//   width: 230px;
//   height: 230px;
//   position: relative;
//   overflow: hidden;
//   border-radius: 40px;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//   display: grid;
//   grid-template-rows: 1fr 1fr;
//   transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

//   &:hover {
//     transform: scale(1.1);
//   }
// `
// const BackImage = styled.img`
//   position: absolute;
//   top: 0;
//   height: 100%;
//   z-index: -1;
//   transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
// `

// const Overlay = styled.div`
//   width: 230px;
//   height: 230px;
//   position: relative;
//   overflow: hidden;
//   border-radius: 40px;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
//   display: grid;
//   grid-template-rows: 1fr 1fr;
//   transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
//   opacity: 0;

//   &:hover {
//     opacity: 1;
//     background: rgba(0, 0, 0, 0.63);
//     transform: scale(1.1);
//   }
// `

// const Title = styled.h3`
//   color: white;
//   font-size: 25px;
//   text-align: center;
// `

// const Subtext = styled.h4`
//   color: rgba(255, 255, 255, 0.8);
//   text-transform: uppercase;
//   font-weight: 380;
//   font-size: 20px;
//   text-align: center;

//   margin: 0 auto;
// `