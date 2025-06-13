import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Logo = styled.img`
  width: 125px;
  margin-top: 40px;
  margin-bottom: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 20px;
    margin-bottom: 100px;
  }
`

export const Image = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    height: 300px;
    margin-bottom: 40px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  width: 539px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    width: 300px;
  }
`
