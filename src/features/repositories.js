import { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRepositories, selectAll } from './repositoriesSlice';
const RepoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  & > li {
    background-color: #302b27;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-bottom: 5px;
    & > a {
      text-decoration: none;
      color: #fff;
      font-size: 20px;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export default function Repositories({ username }) {
  const repos = useSelector((state) => selectAll(state));
  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(fetchRepositories(username));
    }
  }, [username, dispatch]);

  return (
    <RepoList>
      {status === 'idle' &&
        repos.map((repo) => (
          <li key={repo?.id}>
            <a href={repo?.html_url}>{repo?.name}</a>
          </li>
        ))}
    </RepoList>
  );
}
