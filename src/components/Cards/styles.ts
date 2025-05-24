import styled from 'styled-components'
import { cores } from '../../styles'
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
  border: 1px solid ${cores.salmao};
  border-top: none;
  background-color: ${cores.branco};
`

export const CardsContainer = styled.div`
  max-width: 472px;
  margin: 40px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const InfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;
  font-size: 18px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 8px;
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
`
