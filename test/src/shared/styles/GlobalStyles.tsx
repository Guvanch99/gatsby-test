import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #gatsby-focus-wrapper, #___gatsby {
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`

