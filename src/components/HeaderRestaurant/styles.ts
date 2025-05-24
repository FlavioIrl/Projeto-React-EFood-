import styled from 'styled-components'
import {cores} from '../../styles'

export const ImageHeader = styled.div`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
`
export const Title = styled.h3`
    font-size: 32px;
    font-weight: 100;
    color: ${cores.branco};
`

export const Category = styled.h3`
    font-size: 32px;
    margin-top: 25px; 
    font-weight: 100;
    color: ${cores.branco};
`