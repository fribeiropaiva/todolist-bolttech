import { Container } from './styles';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

const Project = () => {
  return (
    <Container>
      <header>
        <div className='header__inner-container'>
          <p>Project Name</p>
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
              <li>This</li>
              <li>This</li>
              <li>This</li>
              <li>This</li>
            </ul>
          </div>
          <div className='dones-container'>
            <p>Done</p>
            <ul className='todo-list'>
              <li>This</li>
              <li>This</li>
              <li>This</li>
              <li>This</li>
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