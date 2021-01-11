import { useState, useEffect } from 'react';
import styled from 'styled-components';
import addClassToBody from './util';

const ToggleWrapper = styled.div`
  width: 50px;
  height: 25px;
  padding: 0 5px;
  position: absolute;
  display: flex;
  align-items: center;
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
  }
`;

export default function Toggle() {
  const [isToggled, setToggled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
  }, []);

  const onToggle = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      addClassToBody(nextTheme);
      window.localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };
  const onClick = () => {
    setToggled((prev) => !prev);
    onToggle();
  };
  return (
    <ToggleWrapper
      className="toggle-wrapper"
      isToggled={isToggled}
      onClick={onClick}
    >
      <div className="toggle" />
    </ToggleWrapper>
  );
}
