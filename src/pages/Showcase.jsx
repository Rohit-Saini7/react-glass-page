import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { componentList } from '../assets/componentList';

const Showcase = () => {
  const component = useLoaderData();
  return <div>{component.name}</div>;
};

export default Showcase;

export async function loader({ params }) {
  const component = componentList.find(
    (comp) => comp.name === params.component
  );
  if (!component) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    });
  }
  return component;
}
