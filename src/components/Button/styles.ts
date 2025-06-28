import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { color } from '../../styles'

export const ButtonContainer = styled.button`
  margin: 8px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${color.white};
  background-color: ${color.salmon};
  padding: 6px 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  margin: 8px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: ${color.white};
  background-color: ${color.salmon};
  padding: 6px 8px;
  cursor: pointer;
  text-decoration: none;
`
