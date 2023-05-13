import React, { useEffect } from 'react';
import { Form, NavLink, useLoaderData, useSubmit } from 'react-router-dom';
import styled from 'styled-components';
import { componentList } from '../assets/componentList';

export function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const components = componentList.filter((comp) => comp.name.includes(q));
  return { components };
}

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  const { components, q } = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    document.getElementById('q').value = q;
  }, [q]);
  return (
    <Container isNavOpen={isNavOpen}>
      <Form id='search-form' role='search'>
        <SearchBar
          id='q'
          aria-label='Search contacts'
          placeholder='Search'
          type='search'
          name='q'
          defaultValue={q}
          onChange={(event) => {
            const isFirstSearch = q == null;
            submit(event.currentTarget.form, {
              replace: !isFirstSearch,
            });
          }}
          autoComplete='off'
        />
        <div id='search-spinner' aria-hidden hidden={true} />
        <div className='sr-only' aria-live='polite'></div>
      </Form>
      <ListWrapper>
        <List>
          {components.map((component) => (
            <ListItem key={component.name}>
              <NavLink
                to={component.name}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
                onClick={() => setIsNavOpen((o) => !o)}
              >
                {component.name}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </ListWrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 100%;
  background: var(--container-bg-color);
  border-radius: 10px;
  border: 1px solid var(--container-bg-color);
  align-items: center;
  padding: 2rem;
  font-size: 1.25rem;
  user-select: none;
  color: var(--font-color);
  box-shadow: var(--shadow);
  position: relative;
  svg {
    height: 20px;
    width: 20px;
  }
  & > form {
    width: 100%;
    height: 3rem;
    margin: 0 0 2rem;
  }
  @media (max-width: 700px) {
    position: absolute;
    max-width: 100%;
    ${({ isNavOpen }) => (!!isNavOpen ? 'display:block' : 'display: none;')}
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 3rem;
  background-color: transparent;
  color: var(--font-color);
  border: 1px solid var(--font-color);
  border-radius: 10px;
  font-size: 1rem;
  padding: 0.9rem;
  outline: none;
`;

const ListWrapper = styled.div`
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const ListItem = styled.li`
  width: 100%;
  height: 3rem;
  padding: 0.9rem;
  text-align: center;
  color: var(--font-color);
  background: transparent;
  transition: 0.2s ease;
  text-transform: capitalize;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:hover {
    color: var(--hover-font-color);
    background: var(--hover-color);
  }

  & > a {
    text-decoration: none;
    color: var(--font-color);
  }
`;
