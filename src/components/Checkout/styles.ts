import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputGroupProps = {
  maxWidth?: string
}

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  color: ${cores.amareloQueimado};
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const SideBar = styled.div`
  background-color: ${cores.salmao};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  padding: 30px 8px 0 8px;

  h3 {
    font-size: 16px;
  }

  ${ButtonContainer} {
    background-color: ${cores.amareloQueimado};
    font-size: 14px;
    color: ${cores.salmao};
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
    background-color: ${cores.amareloQueimado};
    border: 1px solid ${cores.amareloQueimado};
    padding: 8px;
  }
`

export const Local = styled.div`
  display: flex;
  flex: auto;
  flex-direction: row;
  justify-content: space-between;

  div {
    input {
      padding: 8px 3px;
    }
  }
`

export const Card = styled.div`
  margin: 16px 0;
`

export const InputGroupPag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div:first-child {
    width: 228px;
    input {
      width: 100%;
    }
  }

  > div:last-child {
    width: 87px;
    input {
      width: 100%;
    }
  }
`
