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
}

const Project = ({ todos, name, id}:ProjectProps) => {
  const [projectTodos, setProjectTodos] = useState(todos);
  const [newTodo, setNewTodo] = useState('');

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

  return (
    <Container key={id} >
      <header>
        <div className='header__inner-container'>
          <p>{name}</p>
          <div className='buttons-container'>
            <button><MdEdit size={15} /></button>
            <button><RiDeleteBinLine size={15} /></button>
          </div>
        </div>
      </header>
      <div className='content'>
        <div className='content__inner-container'>
          <div className='todos-container'>
            <p>To Do</p>
            <ul>
              {projectTodos.map((todo:ToDoProps) => {
                return <ToDo id={todo.id} taskName={todo.name} isChecked={todo.isCompleted} editTask={() => console.log('editing')} deleteTodo={handleTodoDeletion} handleTaskCompletion={() => console.log('completing')} />
              })}
            </ul>
          </div>
          <div className='dones-container'>
            <p>Done</p>
            <ul className='todo-list'>
              {projectTodos.map((todo: ToDoProps) => {
                  if (todo.isCompleted) {
                    return <ToDo id={todo.id} taskName={todo.name} isChecked={todo.isCompleted} editTask={() => console.log('editing')} deleteTodo={handleTodoDeletion} handleTaskCompletion={() => console.log('completing')} />
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