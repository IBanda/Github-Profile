import { useState } from 'react';
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  background-color: ${(props) => (props.isToggled ? '#ebebeb' : '#fff')};
  width: 50px;
  position: absolute;
  top: 1em;
  right: 1em;
  border-radius: 999px;
  cursor: pointer;
  & > .toggle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #94b4a4;
    transition: transform 500ms;
    transform: translateX(${(props) => (props.isToggled ? 30 : 0)}px);
  }
`;

export default function Toggle({ onToggle }) {
  const [isToggled, setToggled] = useState(false);
  const onClick = () => {
    setToggled((prev) => !prev);
    onToggle();
  };
  return (
    <ToggleWrapper isToggled={isToggled} onClick={onClick}>
      <div className="toggle" />
    </ToggleWrapper>
  );
}
