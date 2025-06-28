import styled from 'styled-components'
import { ButtonLink } from '../Button/styles'
import { breakpoints, color } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    > img {
      width: 110px;
    }
  }

  ${ButtonLink} {
    background-color: transparent;
    font-size: 18px;
    color: ${color.salmon};
    font-weight: bold;
    padding: 0;
    margin: 0;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }

    &:focus {
      outline: none;
    }
  }
`

export const Background = styled.div`
  width: 100%;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
`

export const ButtonCarrinho = styled.button`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${color.salmon};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    width: 80px;
  }
`
