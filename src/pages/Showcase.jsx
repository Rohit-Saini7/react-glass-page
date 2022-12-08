import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { componentList } from '../assets/componentList';
import { GetDemoComponent } from '../components/DemoComponent';

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

const Showcase = () => {
  const { name, description, props, demoComponent, codeSnippit } =
    useLoaderData();
  return (
    <Container>
      <LeftSection>
        <ComponentName>{name}</ComponentName>
        <ComponentDescription>{description}</ComponentDescription>
        <PropsWrapper>
          <div className='headRow'>
            <div className='item'>Name</div>
            <div className='item'>Type</div>
            <div className='item'>Example</div>
          </div>
          {props.map(({ propName, propsType, propsExample }, index) => (
            <div className='bodyRow' key={index}>
              <div className='item'>{propName}</div>
              <div className='item'>{propsType}</div>
              <div className='item'>{propsExample}</div>
            </div>
          ))}
        </PropsWrapper>
      </LeftSection>
      <RightSection>
        <DemoWrapper>{GetDemoComponent(name)}</DemoWrapper>
        <CodeContainer>
          Code:
          <CodeWrapper>
            <Code>{codeSnippit}</Code>
          </CodeWrapper>
        </CodeContainer>
      </RightSection>
    </Container>
  );
};

export default Showcase;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--container-bg-color);
  border-radius: 10px;
  border: 1px solid var(--container-bg-color);
  align-items: center;
  font-size: 1.25rem;
  color: var(--font-color);
  box-shadow: var(--shadow);
  position: relative;
  display: grid;

  @media (max-width: 700px) {
  }
  @media (min-width: 701px) {
    max-height: 70vh;
    grid-template-columns: 4fr 3fr;
  }
`;

const LeftSection = styled.section`
  height: 100%;
  padding: 2rem;
  border-right: 1px solid var(--border-bottom-color);

  @media (max-width: 700px) {
    padding: 2rem 0.5rem;
  }
`;

const ComponentName = styled.h1`
  text-transform: capitalize;
  font-size: 2.5rem;
  height: 3.5rem;
`;

const ComponentDescription = styled.p`
  text-indent: 3rem;
  text-align: justify;
  margin: 1rem 0 2rem;
  height: max-content;
`;

const PropsWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  & > .headRow,
  & > .bodyRow {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    gap: 5px;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    grid-template-columns: 1fr 1fr 2fr;
  }
  & > .headRow > .item:nth-of-type(even),
  & > .bodyRow > .item:nth-of-type(even) {
    text-align: center;
  }
  & > .bodyRow {
    background: transparent;
  }
  & > .bodyRow:nth-of-type(odd) {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const RightSection = styled.section`
  height: 100%;
  padding: 2rem;
  @media (max-width: 700px) {
    padding: 2rem 0.5rem;
  }
`;

const DemoWrapper = styled.div`
  height: 9rem;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const CodeContainer = styled.div`
  margin-top: 2rem;
  overflow: scroll;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const CodeWrapper = styled.pre`
  font-size: 1.1rem;
`;

const Code = styled.code``;
