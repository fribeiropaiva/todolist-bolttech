import React, { useState } from 'react';
import { Header, Main, ProjectsArea, CreateProjectsArea } from './mainStyles';
import { GlobalStyle } from './globalStyles';
import CreateProject from './components/CreateProject';
import Project from './components/Project';

export interface ToDoProps {
  name: string;
  id: string;
  isCompleted: boolean;
}

interface ProjectProps {
  name: string;
  id: string;
  createDate: Date,
  todos: Array<ToDoProps>;
  dones: Array<ToDoProps>;
}

function App() {
  const [projects, setNewProjects] = useState<Array<ProjectProps>>([]);

  const createNewProject = (projectName: string) => {
    if (!projectName) return;

    const now = new Date();
    const newProject = {
      name: projectName,
      id: projectName + now,
      createDate: now,
      todos: [],
      dones: []
    }

    //send to db

    setNewProjects((projects: Array<ProjectProps>) => [...projects, newProject]);
  }

  const handleProjectDeletion = (id:string) => {
    const updatedProjects = projects.filter(project => project.id !== id);

    setNewProjects(updatedProjects);
  }

  const handleProjectEditing = (id:string, newProjectName:string) => {
    const updatedProjects = projects.filter(project => {
      if (project.id === id) {
        project.name = newProjectName;
      }
      return project;
    });

    setNewProjects(updatedProjects);
  }

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
          {projects.map(project => {
            return <Project key={project.id} todos={project.todos} id={project.id} name={project.name} deleteProject={handleProjectDeletion} editProject={handleProjectEditing} />
          })}
        </ProjectsArea>
        <CreateProjectsArea>
          <CreateProject handleCreateNewProject={createNewProject} />
        </CreateProjectsArea>
      </Main>
    </>
  );
}

export default App;
