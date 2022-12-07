import React, { useEffect } from 'react';
import { Form, NavLink, useLoaderData, useSubmit } from 'react-router-dom';
import { componentList } from '../assets/componentList';

export function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const components = componentList.filter((comp) => comp.name.includes(q));
  return { components };
}

const Navbar = () => {
  const { components, q } = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    document.getElementById('q').value = q;
  }, [q]);
  return (
    <div>
      <Form id='search-form' role='search'>
        <input
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
        />
        <div id='search-spinner' aria-hidden hidden={true} />
        <div className='sr-only' aria-live='polite'></div>
      </Form>
      <ul>
        {components.map((component) => (
          <li key={component.name}>
            <NavLink
              to={component.name}
              className={({ isActive, isPending }) =>
                isActive ? 'active' : isPending ? 'pending' : ''
              }
            >
              {component.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
