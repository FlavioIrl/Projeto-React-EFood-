import styled from 'styled-components'
import { color } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${color.salmon};
  color: ${color.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
`
