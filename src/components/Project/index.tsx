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
              {todos.map((todo:ToDoProps) => {
                <ToDo id={todo.id} taskName={todo.name} isChecked={todo.isCompleted} editTask={() => console.log('editing')} deleteTask={() => console.log('deleting')} handleTaskCompletion={() => console.log('completing')} />
              })}
            </ul>
          </div>
          <div className='dones-container'>
            <p>Done</p>
            <ul className='todo-list'>
              {todos.map((todo: ToDoProps) => {
                  if (todo.isCompleted) {
                    return <ToDo id={todo.id} taskName={todo.name} isChecked={todo.isCompleted} editTask={() => console.log('editing')} deleteTask={() => console.log('deleting')} handleTaskCompletion={() => console.log('completing')} />
                  }
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <input type='text' placeholder='task' />
        <button>Add</button>
      </footer>
    </Container>
  )
}

export default Project;