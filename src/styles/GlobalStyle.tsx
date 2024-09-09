import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    font-family: 'Arial', sans-serif;
    color: #333;
  }

  h1, h2, h3, h4 {
    color: #ffffff;
  }

  .container {
    max-width: 75rem;
    margin: 0 auto;
    padding: 1.25rem;
  }
`
