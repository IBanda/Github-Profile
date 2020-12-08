import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchUser } from './searchSlice';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    padding: 10px;
    border: none;
    width: 310px;
    border-radius: 5px;
    outline: none;
    margin-bottom: 15px;
    display: block;
    &:focus {
      box-shadow: 1px 2px 10px 1px #576ca8;
    }
  }
  button {
    border: none;
    padding: 10px 20px;
    background: #576ca8;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default function SearchForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchUser(username));
  };
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <Form onSubmit={handleSearch}>
      <input value={username} onChange={handleInputChange} required />
      <button type="submit">Search</button>
    </Form>
  );
}
