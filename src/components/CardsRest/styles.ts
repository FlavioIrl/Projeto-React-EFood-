import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  width: 322px;

  ${ButtonContainer} {
    background-color: ${cores.amareloQueimado};
    color: ${cores.salmao};
    font-size: 14px;
    width: 100%;
    margin: 0px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 322px;
    margin: 0 auto;
  }
`
export const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 304px;
  height: auto;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  cursor: pointer;
`

export const TopWindow = styled.div`
  display: flex;
  justify-content: space-between;
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
    background-color: ${cores.salmao};
    padding: 24px;
    display: flex;
    flex-direction: row;
    max-width: 1024px;
    width: 100%;
    z-index: 1;
    position: relative;
    color: ${cores.branco};

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

      > img {
        margin: 0 0 16px 0;
        width: 100%;
        max-width: 280px;
        height: auto;
      }
    }
  }

  p {
    margin: 16px 0;
  }

  ${ButtonContainer} {
    background-color: ${cores.amareloQueimado};
    color: ${cores.salmao};
    font-size: 14px;
    width: 100%;
    max-width: 304px;
    margin: 0px auto;
  }
`
