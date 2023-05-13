import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ThemeSwitch from './ThemeSwitch';
import { Burger } from 'react-glass-comps';

const Titlebar = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <Container>
      <Burger
        className='burger'
        size={30}
        spacing={4}
        transitionTime={400}
        opened={isNavOpen}
        color='var(--font-color)'
        onClick={() => setIsNavOpen((o) => !o)}
      />
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

  @media (max-width: 700px) {
    padding: 1rem;
    justify-content: space-between;
  }
  @media (min-width: 701px) {
    padding: 1rem 5rem;
    justify-content: space-between;
    & > .burger {
      display: none;
    }
  }
`;
