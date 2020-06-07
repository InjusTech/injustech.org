import React from "react"
import styled from "styled-components"

const Background = styled.div`
  background: #78c0e0;
  color: white;
  padding: 8rem 0;
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 10%;
  text-align: center;
`

export default ({ title }) => (
  <Background>
    <h1>{title}</h1>
  </Background>
)
