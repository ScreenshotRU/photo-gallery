import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2d2c40;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App {
  max-width: 1280px;
  margin: 0 auto;
  background-color: #2d2c40;
}

.link {
  padding: 5px;
  color: #f5f5f5;
}

.link:hover {
  color: #daa520;
}

.link.album-title {
  margin: 1em;
}
`;


export default GlobalStyle;
