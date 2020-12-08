import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  border: 1px solid white;
  background-color: #576ca8;
  width: 130px;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  border: none;
  & > h3,
  p {
    margin: 5px 0;
  }
`;
export default function Count({ name, count }) {
  return (
    <Div>
      <h3>{name}</h3>
      <p>{count}</p>
    </Div>
  );
}
