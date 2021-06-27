import { useState } from 'react';
import { Container } from './styles';

const CreateProject = () => {
  const [projectName, setProjectName] = useState('');

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setProjectName(e.currentTarget.value);
  }

  return (
    <Container>
      <div className="inner-container">
        <h1>Create a new project</h1>
        <input value={projectName} type='text' placeholder='Project name' onChange={(e: React.FormEvent<HTMLInputElement>) => handleNameChange(e)} />
        <button>Create Project</button>
      </div>
    </Container>
  )
}

export default CreateProject;