import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { componentList } from '../assets/componentList';

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
        <PropsWrapper cellPadding='0' cellSpacing='0' border='0'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map(({ propName, propsType, propDescription }) => (
              <tr>
                <td>{propName}</td>
                <td>{propsType}</td>
                <td>{propDescription}</td>
              </tr>
            ))}
          </tbody>
        </PropsWrapper>
      </LeftSection>
      <RightSection>
        <DemoWrapper
          dangerouslySetInnerHTML={{ __html: demoComponent }}
        ></DemoWrapper>
        <CodeWrapper>
          <Code>{codeSnippit}</Code>
        </CodeWrapper>
      </RightSection>
    </Container>
  );
};

export default Showcase;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background: var(--container-bg-color);
  border-radius: 10px;
  border: 1px solid var(--container-bg-color);
  align-items: center;
  font-size: 1.25rem;
  color: var(--font-color);
  box-shadow: var(--shadow);
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

const LeftSection = styled.section`
  height: 100%;
  padding: 2rem;
  border-right: 1px solid var(--border-bottom-color);
`;

const ComponentName = styled.h1`
  text-transform: capitalize;
  font-size: 2.5rem;
  height: 3.5rem;
`;

const ComponentDescription = styled.p`
  text-indent: 3rem;
  text-align: justify;
  margin: 1rem 0;
  height: 7rem;
`;

const PropsWrapper = styled.table`
  width: 100%;
  & > thead {
    text-align: left;
  }
  & > thead > tr > th {
    border-bottom: 1px solid var(--border-bottom-color);
  }
  & > tbody > tr > td {
    border-bottom: 1px solid var(--border-bottom-color);
  }
  & > tbody > tr:last-of-type > td {
    border-bottom: 1px solid transparent;
  }
`;

const RightSection = styled.section`
  height: 100%;
  padding: 2rem;
`;

const DemoWrapper = styled.div`
  height: 11.5rem;
`;

const CodeWrapper = styled.pre`
  margin-top: 1rem;
`;

const Code = styled.code``;
