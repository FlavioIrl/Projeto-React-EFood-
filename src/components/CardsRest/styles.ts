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
  display: grid;

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
export const WindowContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  > div {
    background-color: ${cores.salmao};
    padding: 32px;
    display: flex;
    color: ${cores.branco};
    max-width: 1024px;
  }

  img {
    width: 280px;
    height: 280px;
    margin-right: 16px;
  }

  p {
    margin: 16px 0;
  }

  ${ButtonContainer} {
    background-color: ${cores.amareloQueimado};
    color: ${cores.salmao};
    font-size: 14px;
    width: 304px;
    margin: 0px;
  }
`
