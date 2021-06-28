import React from 'react';
import { Header, Main, ProjectsArea, CreateProjectsArea } from './mainStyles';
import { GlobalStyle } from './globalStyles';
import CreateProject from './components/CreateProject';
import Project from './components/Project';

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
        <ProjectsArea>
          <Project />
          <Project />
          <Project />
          <Project />
        </ProjectsArea>
        <CreateProjectsArea>
          <CreateProject />
        </CreateProjectsArea>
      </Main>
    </>
  );
}

export default App;
