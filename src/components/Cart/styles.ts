import styled from 'styled-components'
import lixeira from '../../assets/images/lixeiraDeReciclagem.png'
import { breakpoints, color } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${color.salmon};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 30px 8px 0 8px;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${color.whitishYellow};
    text-align: center;
  }

  ${ButtonContainer} {
    background-color: ${color.whitishYellow};
    font-size: 14px;
    color: ${color.salmon};
    width: 100%;
    margin: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 230px;
  }
`

export const Prices = styled.div`
  margin-top: 34px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  color: ${color.whitishYellow};
  font-size: 14px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const CartItems = styled.li`
  background-color: ${color.whitishYellow};
  display: flex;
  width: 100%;
  height: 100px;
  position: relative;
  margin-bottom: 16px;

  h2 {
    margin-top: 8px;
    font-size: 18px;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      font-size: 14px;
    }
  }

  p {
    display: block;
    margin-bottom: 9px;
  }

  img {
    background-color: ${color.salmon};
    margin: 8px;
    width: 80px;
    height: 80px;
  }

  button {
    background: transparent;
    background-image: url(${lixeira});
    background-size: cover;
    background-repeat: no-repeat;

    position: absolute;
    top: 76px;
    left: 316px;

    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      top: 76px;
      left: 190px;
    }
  }

  div {
    display: block;
  }
`
