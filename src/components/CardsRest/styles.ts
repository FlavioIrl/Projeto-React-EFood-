import styled from 'styled-components'
import { breakpoints, color } from '../../styles'
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
  background-color: ${color.salmon};
  color: #ffebd9;
  padding: 8px;
  width: 100%;
  max-width: 322px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${ButtonContainer} {
    background-color: ${color.whitishYellow};
    color: ${color.salmon};
    font-size: 14px;
    margin-top: auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 304px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const TopWindow = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    h3 {
      margin: 0 auto;
    }
  }
`
export const CloseIcon = styled.img`
  object-fit: cover;
  height: 16px;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    top: 12px;
    right: 12px;
  }
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
  padding: 16px;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }

  > .content {
    background-color: ${color.salmon};
    padding: 24px;
    display: flex;
    flex-direction: row;
    max-width: 1024px;
    width: 100%;
    z-index: 1;
    position: relative;
    color: ${color.white};

    > img {
      width: 280px;
      height: 280px;
      margin-right: 16px;
      object-fit: cover;
    }

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 90%; // <--- Aumenta a largura no mobile

      > img {
        margin: 0 0 16px 0;
        width: 100%;
        max-width: 210px;
        height: auto;
      }
    }
  }

  p {
    margin: 16px 0;
  }

  ${ButtonContainer} {
    background-color: ${color.whitishYellow};
    color: ${color.salmon};
    font-size: 14px;
    width: 100%;
    max-width: 304px;
    margin: 0px auto;
  }
`
