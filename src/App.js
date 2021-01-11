import Search from './features/search';
import SearchResult from './features/search-result';
import Toggle from './toggle';
import GlobalStyles from './globalStyles';

function App() {
  // eslint-disable-next-line no-unused-vars

  return (
    <>
      <Toggle />
      <GlobalStyles />
      <Search />
      <SearchResult />
    </>
  );
}

export default App;
