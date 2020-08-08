import React from "react"
import styled from "styled-components"

const Resume = props => (
    <Container target='_blank' href={props.link}>
      <Title>{props.title}</Title>
    </Container>
)

export default Resume

const Container = styled.p`
  width: 60%;
  height: 50px;
  margin: 40px auto;
  background: black;
  border-radius: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);

  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
      transform: scale(1.05);
  }

  @media (max-width: 640px) {
    width: 90%;
    margin: 40px auto;
  }

  @media (max-width: 420px) {
    width: 90%;
    margin: 40px auto;
    height: 100px;
  }
`

const Title = styled.p`
  color: white;
  font-size: 12px;
  text-align: center;
  color: white;
  margin: 40px auto;
`