import React, { useState } from 'react';
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
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <React.Fragment>
      <Titlebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Container>
        <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <InnerContainer isNavOpen={isNavOpen}>
          <Outlet />
        </InnerContainer>
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
  gap: 3rem;
  @media (min-width: 701px) {
    display: grid;
    grid-template-columns: minmax(250px, 250px) auto;
    margin-bottom: 3rem;
  }
`;

const InnerContainer = styled.div`
  @media (max-width: 700px) {
    ${({ isNavOpen }) => (!isNavOpen ? 'display:block' : 'display: none;')}
  }
`;
