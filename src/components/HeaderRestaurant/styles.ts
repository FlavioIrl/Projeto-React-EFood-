import styled from 'styled-components'
import { breakpoints, color } from '../../styles'

export const ImageHeader = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    height: 200px;
  }

  .container {
    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
      height: 200px;
    }
  }
`

export const Title = styled.h3`
  font-size: 32px;
  font-weight: bold;
  color: ${color.white};
  margin-top: 15%;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`

export const Category = styled.h3`
  font-size: 32px;
  margin-top: 25px;
  font-weight: 100;
  font-family: sans-serif;
  font-stretch: ultra-condensed;
  color: rgb(255 255 255 / 75%);

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`
