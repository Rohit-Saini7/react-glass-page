import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Titlebar from '../components/Titlebar';
import { componentList } from '../assets/componentList';
import styled from 'styled-components';

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
    <React.Fragment>
      <Titlebar />
      <Container>
        <Navbar />
        <Outlet />
      </Container>
    </React.Fragment>
  );
};

export default Home;

const Container = styled.div`
  margin: auto;
  margin-top: 3rem;
  width: 100%;
  max-width: 1350px;
  height: 100%;
  max-height: 70vh;
  display: grid;
  grid-template-columns: minmax(300px, 400px) auto;
  gap: 3rem;
`;
