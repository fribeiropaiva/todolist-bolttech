import { useState } from 'react';
import { Container } from './styles';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ToDoProps } from '../../App';
import ToDo from '../ToDo';

interface ProjectProps {
  todos: Array<ToDoProps>;
  name: string;
  id: string;
  deleteProject: (id: string) => void;
  editProject: (id:string, newProjectName:string) => void;
}

const Project = ({ todos, name, id, deleteProject, editProject }:ProjectProps) => {
  const [projectTodos, setProjectTodos] = useState(todos);
  const [newTodo, setNewTodo] = useState('');
  const [dones, setDones] = useState<Array<ToDoProps>>([]);
  const [editingMode, setEditingMode] = useState(false);
  const [newProjectName, setNewProjectName] = useState(name);

  const handleTodoCreation = () => {
    const todo = {
      name: newTodo,
      id: name + newTodo + id,
      isCompleted: false,
    }

    setProjectTodos((projectTodos) => [...projectTodos, todo]);
  }

  const handleTodoDeletion = (id: string) => {
    const updatedTodos = projectTodos.filter(todo => todo.id !== id);

    setProjectTodos(updatedTodos);
  }

  const handleTodoCompletion = (id: string) => {
    const updatedTodos = projectTodos.filter(todo => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
      return todo;
    });

    const completedTodos = updatedTodos.filter(todo => todo.isCompleted === true);

    setProjectTodos(updatedTodos);
    setDones(completedTodos);
  }

  const handleTodoEditing = (id: string, newTodo: string) => {
    const updatedTodos = projectTodos.filter(todo => {
      if (todo.id === id) {
        todo.name = newTodo;
      }
      return todo;
    });

    setProjectTodos(updatedTodos);
  }

  const handleProjectDeletion = (id: string) => {
    deleteProject(id);
  }

  const handleProjectEditing = (id: string, newProjectName: string) => {
    editProject(id, newProjectName);
    setEditingMode(false);
  }

  return (
    <Container key={id} >
      <header>
        <div className='header__inner-container'>
          {editingMode ?
            <label>
              <input
                className='project-editing-input'
                type='text'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProjectName(e.target.value)}
                value={newProjectName}
              />
              <button
                className='save-project-editing'
                type='button'
                onClick={() => handleProjectEditing(id, newProjectName)}
                >Save</button>
            </label>
            :
            <>
              <p>{name}</p>
              <div className='buttons-container'>
                <button onClick={() => setEditingMode(true)}><MdEdit size={15} /></button>
                <button onClick={() => handleProjectDeletion(id)}><RiDeleteBinLine size={15} /></button>
              </div>
            </>
          }
        </div>
      </header>
      <div className='content'>
        <div className='content__inner-container'>
          <div className='todos-container'>
            <p>To Do</p>
            <ul>
              {projectTodos.map((todo:ToDoProps) => {
                return <ToDo id={todo.id} taskName={todo.name} isChecked={todo.isCompleted} editTodo={handleTodoEditing} deleteTodo={handleTodoDeletion} completeTodo={handleTodoCompletion} />
              })}
            </ul>
          </div>
          <div className='dones-container'>
            <p>Done</p>
            <ul className='todo-list'>
              {dones.map((todo: ToDoProps) => {
                  if (todo.isCompleted) {
                    return <ToDo id={todo.id} taskName={todo.name} isChecked={todo.isCompleted} editTodo={handleTodoEditing} deleteTodo={handleTodoDeletion} completeTodo={handleTodoCompletion} />
                  }
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <input value={newTodo} type='text' placeholder='task' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}/>
        <button onClick={handleTodoCreation}>Add</button>
      </footer>
    </Container>
  )
}

export default Project;