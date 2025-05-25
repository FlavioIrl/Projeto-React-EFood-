import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const CardsRestContainer = styled.div`
  background-color: ${cores.salmao};
  color: #ffebd9;
  padding: 8px;

  ${ButtonContainer} {
    background-color: ${cores.BrancoAmarelado};
    color: ${cores.salmao};
    font-size: 14px;
    width: 304px;
    margin: 0px;
  }
`
export const Image = styled.img`
  display: block;
  width: 304px;
  height: 170px;
`
