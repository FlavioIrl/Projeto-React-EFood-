import { createGlobalStyle } from 'styled-components'

export const cores = {
  BrancoAmarelado: '#FFF8F2',
  branco: '#fff',
  salmao: '#E66767',
  preta: '#111',
  amareloQueimado: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.BrancoAmarelado};
    color: ${cores.salmao};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  @media(max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
