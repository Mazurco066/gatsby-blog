import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #___gatsby {
    height: 100%;
    background-color: #E0E0E0;
  }

  main {
    padding-top: 80px;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  /* Post embedded content */
  .article-content p {
    line-height: 2;
    margin: 1.5em 0;
    font-size: 1rem;
  }

  .article-content p pre {
    background-color: #212121;
    color: #FFFFFF;
    border-radius: 4px;
    padding: 0.5rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: break-all;
    font-size: .75rem;
  }
`;