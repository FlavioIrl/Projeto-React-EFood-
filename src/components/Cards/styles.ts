import styled from 'styled-components'
import { breakpoints, color } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Icon = styled.i`
  color: gold;
  font-size: 24px;
  padding: 1px;
  margin-left: 8px;
`

export const InfoTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Nota = styled.p`
  margin-top: 4px;
`

export const Infos = styled.div`
  padding-top: 10px;
  border: 1px solid ${color.salmon};
  border-top: none;
  background-color: ${color.white};
  padding-bottom: 17px;
`

export const CardsContainer = styled.div`
  max-width: 472px;
  position: relative;
  margin-top: 40px;

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 350px;
    margin: 0 auto;
  }
`

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  font-size: 18px;

  @media (max-width: ${breakpoints.tablet}) {
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 8px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const Evaluation = styled.div`
  font-weight: bold;
  display: flex;
  align-items: cente;
  margin-botton: 8px;
`

export const Image = styled.img`
  display: block;
  width: 472px;
  height: 217px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 350px;
    height: 220px;
  }
`
