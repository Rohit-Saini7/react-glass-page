import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeSwitch from './ThemeSwitch';

const Titlebar = () => {
  return (
    <Container>
      <Link to='/'>React Glass</Link>
      <ThemeSwitch />
    </Container>
  );
};

export default Titlebar;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1350px;
  margin: auto;
  background: var(--container-bg-color);
  border-radius: 10px;
  margin-top: 2rem;
  border: 1px solid var(--container-bg-color);
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  font-size: 1.25rem;
  user-select: none;
  color: var(--font-color);
  box-shadow: var(--shadow);
  position: relative;
  svg {
    height: 20px;
    width: 20px;
  }
  & > a {
    font-family: 'Glass Antiqua', cursive;
    text-decoration: none;
    color: var(--font-color);
    font-size: 2.5rem;
  }
`;
