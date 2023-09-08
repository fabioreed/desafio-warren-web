import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #00555A;
    --green: #6FD660;
    --yellow: #E4F23C;
    --white: #FFFFFF;
    --black: #000000;
    --light-gray: #E1DECD;
    --gray: #282828;
    --grey: #868e96;
    --alert-negative: #FD4D56;
  }

  body {
    background-color: var(--white);
    font-family: 'Quicksand', sans-serif;
  }

  button {
    border-radius: 6px;
  }

  option {
    max-height: 100px;
  }

  *{
    scrollbar-width: thin;
    scrollbar-color: var(--primary-color) ;
  }
  *::-webkit-scrollbar {

  }
  *::-webkit-scrollbar-track {
    background: none;
  }
  *::-webkit-scrollbar-thumb {
    background-color: var(--primary-color);    
  }
`

export default GlobalStyle