import styled from 'styled-components';

const Index = () => {
  return (
    <Container id='zero-state'>
      <div>
        <h2>This is a demo for React Glass.</h2>
        <br />
        Check out{' '}
        <a href='https://github.com/Rohit-Saini7/glass-components'>
          for source code of all components
        </a>
        .
      </div>
      <p>Made with React and styled-components by Palak and Rohit.</p>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background: var(--container-bg-color);
  border-radius: 10px;
  border: 1px solid var(--container-bg-color);
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  color: var(--font-color);
  box-shadow: var(--shadow);
  padding-top: 2rem;
  text-align: center;
`;
