import styled from 'styled-components'
import { cores } from '../../styles'

export const ImageHeader = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
`

export const Title = styled.h3`
  font-size: 32px;
  font-weight: bold;
  color: ${cores.branco};
  margin-top: 15%;
`

export const Category = styled.h3`
  font-size: 32px;
  margin-top: 25px;
  font-weight: 100;
  font-family: sans-serif;
  font-stretch: ultra-condensed;
  color: rgb(255 255 255 / 75%);
`
