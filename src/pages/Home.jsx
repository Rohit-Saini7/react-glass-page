import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Titlebar from '../components/Titlebar';
import { componentList } from '../assets/componentList';

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  let components = [];
  if (!!q) {
    components = componentList.filter((comp) => comp.name.includes(q));
  } else {
    components = componentList;
  }
  return { components, q };
}

const Home = () => {
  return (
    <div>
      <Titlebar />
      <Navbar />
      Home
      <Outlet />
    </div>
  );
};

export default Home;
