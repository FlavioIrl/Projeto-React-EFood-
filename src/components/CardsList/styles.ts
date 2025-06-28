import styled from 'styled-components'
import { color } from '../../styles'

export const Container = styled.div`
  display: flex;
  background-color: ${color.whitishYellow};
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 40px;
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 40px;
`
