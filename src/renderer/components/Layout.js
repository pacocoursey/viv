import React from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 50px;
  height: 100vh;
`;

const Main = styled.main`

`;

const Layout = ({ children }) => (
  <Wrapper>
    <Head>
      <title>Viv</title>
    </Head>

    <Main>
      { children }
    </Main>

    <GlobalStyle />
  </Wrapper>
);

export default Layout;
