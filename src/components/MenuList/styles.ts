import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  background-color: ${cores.BrancoAmarelado};
`

export const List = styled.div`
  display: inline-flex;
  margin-bottom: 40px;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
`

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 60px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
