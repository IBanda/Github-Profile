import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SearchForm from './search-form';

const Div = styled.div`
  background: #1b264f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 330px;
  width: 100%;
  padding-bottom: 55px;
  & > h1 {
    color: #fff;
    font-size: 3em;
    margin: 0;
    margin-bottom: 16px;
  }

  & > .alert {
    background-color: #ec5858;
    color: #fff;
    margin-top: 10px;
    font-size: 12px;
    padding: 5px 20px;
    border-radius: 5px;
    text-align: center;
  }
`;

export default function Search() {
  const { message } = useSelector((state) => state.user);

  return (
    <Div>
      <h1>Github Profile</h1>
      <SearchForm />
      {!!message && <div className="alert">{message}</div>}
    </Div>
  );
}
