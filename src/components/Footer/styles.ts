import styled from 'styled-components'
import { breakpoints, color } from '../../styles'

export const Container = styled.footer`
  background-color: #ffebd9;
  padding: 32px 0;
  font-size: 14px;
  width: 100%;
  justify-content: center;
  align-itens: center;
  margin-top: 100px;

  img {
    display: flex;
    margin: 0 auto;
  }

  p {
    text-align: center;
    font-size: 10px;
    font-weight: 400;
    width: 400px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      width: 300px;
    }
  }
`

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-itens: center;
  margin-top: 30px;
  margin-bottom: 80px;
`

export const Icons = styled.a`
  margin-inline: 8px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  color: ${color.whitishYellow};
  background-color: ${color.salmon};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  text-decoration: none;
`
