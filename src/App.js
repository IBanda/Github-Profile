import { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
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
function addClass(mode) {
  const body = document.body;
  if (mode === 'light') {
    body.classList.remove('dark');
    body.classList.add(mode);
  } else {
    body.classList.remove('light');
    body.classList.add(mode);
  }
}
function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState({ mode: 'light' });

  useEffect(() => {
    setTheme({ mode: localStorage.getItem('theme') });
  }, []);

  const onToggle = () => {
    setTheme((prev) => {
      const prevTheme = { mode: prev.mode === 'light' ? 'dark' : 'light' };
      addClass(prevTheme.mode);
      window.localStorage.setItem('theme', prevTheme.mode);
      return prevTheme;
    });
  };
  return (
    <>
      <Toggle onToggle={onToggle} />
      <GlobalStyles />
      <Search />
      <SearchResult />
    </>
  );
}

export default App;
