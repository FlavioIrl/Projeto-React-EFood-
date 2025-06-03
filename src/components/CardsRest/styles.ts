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
    background-color: ${cores.amareloQueimado};
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
  object-fit: cover;
  cursor: pointer;
`

export const TopWindow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CloseIcon = styled.img`
  object-fit: cover;
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
  top: -25px;
  left: 26px;
`

export const WindowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }

  > .content {
    background-color: ${cores.salmao};
    padding: 32px;
    display: flex;
    max-width: 1024px;
    z-index: 1;
    position: relative;
    color: ${cores.branco};

    > img {
      width: 280px;
      height: 280px;
      margin-right: 16px;
      object-fit: cover;
    }
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
