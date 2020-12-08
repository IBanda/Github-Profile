import styled from 'styled-components';
import Avatar from './avator';
import { useSelector } from 'react-redux';
import Count from './count';
import Repositories from './repositories';

const ResultDiv = styled.div`
  max-width: 550px;
  margin: auto;
  padding: 1em;
  border-radius: 0 0 5px 5px;
  background-color: ${(props) =>
    props.theme.bg === '#fff' ? '#f5f3f5' : '#213e3b'};
  color: ${(props) => (props.theme.bg === '#fff' ? '#000' : '#fff')};
  & > .avatar-container {
    display: flex;
    position: relative;
    height: 50px;
    justify-content: center;
  }
  & > .username,
  .repos {
    text-align: center;
  }
  & > .details {
    display: flex;
    justify-content: space-around;
  }
`;

export default function SearchResult() {
  const { user } = useSelector((state) => state.user);
  return (
    <ResultDiv>
      <div className="avatar-container">
        <Avatar src={user?.avatar_url} />
      </div>
      <div className="username">
        <h2>{user?.login}</h2>
      </div>
      <div className="details">
        <Count name="Followers" count={user?.followers} />
        <Count name="Repositories" count={user?.public_repos} />
      </div>
      <div className="repos">
        <h3>Recently Upadated Repositories</h3>
        <Repositories username={user?.login} />
      </div>
    </ResultDiv>
  );
}
