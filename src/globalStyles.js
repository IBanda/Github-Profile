import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
html{
  height:100%;
}
*{
  box-sizing:border-box;
}
body{
 margin:0;
}
body.light{
background-color:#fff;
.toggle-wrapper{
background-color:#fff;
.toggle{
  transform: translateX(0);
}
}
.results{
  background-color:#f5f3f5;
  color:#000;
}
}
body.dark{
  background-color:#3c4f65;
  .toggle-wrapper{
background-color:#ebebeb;
  .toggle{
  transform: translateX(20px);
}
  }
  .results{
  background-color:#213e3b;
  color:#fff;
  }
}
`;

export default GlobalStyles;
