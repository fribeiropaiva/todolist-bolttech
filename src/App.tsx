import React from 'react';
import { Header, Main, ProjectsArea, CreateProjectsArea } from './mainStyles';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header className="App-header">
        <div className="header__inner-container">
          <p>EDirectInsure TODO List</p>
          <div>
            <ul>
              <li>Filipe Ribeiro</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </Header>
      <Main>
        <ProjectsArea></ProjectsArea>
        <CreateProjectsArea></CreateProjectsArea>
      </Main>
    </>
  );
}

export default App;
