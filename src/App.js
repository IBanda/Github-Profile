import { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Search from './features/search';
import SearchResult from './features/search-result';
import Toggle from './toggle';

const GlobalStyles = createGlobalStyle`
html{
  height:100%;
}
*{
  box-sizing:border-box;
}
body{
 margin:0;
 background-color:${(props) => props.theme.bg}
}
`;
function App() {
  const [theme, setTheme] = useState({ bg: '#fff' });
  const onToggle = () => {
    setTheme((prev) =>
      prev.bg === '#3c4f65'
        ? { ...prev, bg: '#fff' }
        : { ...prev, bg: '#3c4f65' }
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <Toggle onToggle={onToggle} />
      <GlobalStyles />
      <Search />
      <SearchResult />
    </ThemeProvider>
  );
}

export default App;
