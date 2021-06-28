import { useState } from 'react';
import { Container } from './styles';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';

export interface ToDoProps {
  id: string;
  taskName: string;
  isChecked: boolean;
  editTask: (id:number, newTaskName:string) => void;
  deleteTodo: (id:string) => void;
  handleTaskCompletion: (id:number) => void;
}

const ToDo = ({id, taskName, isChecked, editTask, deleteTodo, handleTaskCompletion }: ToDoProps) => {
  const [editingMode, setEditingMode] = useState(false);
  const [newTaskName, setNewTaskName] = useState('')

  function handleTaskEditing(id:number, newTaskName:string) {
    editTask(id, newTaskName);
    setEditingMode(false);
  }

  return (
    <Container key={id} id={taskName}>
      <div className={`${isChecked ? 'completed' : ''} task-check`}>
        <label className='checkbox-container'>
          <input
            type='checkbox'
            readOnly
            checked={isChecked}
            onChange={() => console.log('completing')}
          />
          <span className='checkmark'></span>
        </label>
        {editingMode ?
        <label>
          <input
            className='task-editing-input'
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTaskName(e.target.value)}
            value={newTaskName}
          />
          <button
            className='save-task-editing'
            type='button'
            onClick={() => console.log('editing')}
            >Save</button>
        </label>
        : <p>{taskName}</p>
        }
      </div>
      <div className='action-buttons'>
        <button className='edit-button' type='button' onClick={() => console.log('editing')}><MdEdit size={15}/></button>
        <button className='delete-button' type='button' onClick={() => deleteTodo(id)}><RiDeleteBinLine size={15}/></button>
      </div>
    </Container>
  )
}

export default ToDo;