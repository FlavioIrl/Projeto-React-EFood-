import styled from 'styled-components'
import { breakpoints, color } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  color: ${color.whitishYellow};
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.div`
  background-color: ${color.salmon};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 30px 8px 0 8px;

  h3 {
    font-size: 16px;
  }

  ${ButtonContainer} {
    background-color: ${color.whitishYellow};
    font-size: 14px;
    color: ${color.salmon};
    width: 100%;
    margin: 0;
    margin-top: 8px;
  }

  .marginTop {
    margin-top: 16px;
  }
  .marginBottom {
    margin-bottom: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 230px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: bold;
  }

  input {
    margin: 8px 0;
    background-color: ${color.whitishYellow};
    border: 1px solid ${color.whitishYellow};
    padding: 8px;
  }
`

export const Local = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;

  div {
    flex: 1 1 45%;
    min-width: 100px;

    input {
      padding: 8px 1px;
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    div {
      width: 100%;
    }
  }
`

export const Card = styled.div`
  margin: 16px 0;
`

export const InputGroupPag = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  flex-wrap: wrap;

  > div:first-child {
    flex: 1 1 60%;
    min-width: 150px;

    input {
      width: 100%;
    }
  }

  > div:last-child {
    flex: 1 1 35%;
    min-width: 87px;

    input {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`
