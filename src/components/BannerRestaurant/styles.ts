import styled from 'styled-components'
import { ButtonLink } from '../Button/styles'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;

  ${ButtonLink} {
    background-color: transparent;
    font-size: 18px;
    color: ${cores.salmao};
    font-weight: bold;
    padding: 0;
    margin: 0;

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

export const LogoImage = styled.img``

export const Carrinho = styled.p`
  font-size: 18px;
  font-weight: bold;
`
