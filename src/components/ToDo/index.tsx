import { useState } from 'react';
import { Container } from './styles';
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';

export interface ToDoProps {
  id: string;
  taskName: string;
  isChecked: boolean;
  editTodo: (id:string, newTodoName:string) => void;
  deleteTodo: (id:string) => void;
  completeTodo: (id:string) => void;
}

const ToDo = ({id, taskName, isChecked, editTodo, deleteTodo, completeTodo }: ToDoProps) => {
  const [editingMode, setEditingMode] = useState(false);
  const [newTodoName, setNewTodoName] = useState(taskName);

  const handleTodoEditing = (id:string, newTodoName:string) => {
    editTodo(id, newTodoName);
    setEditingMode(false);
  }

  return (
    <Container key={id} id={id}>
      <div className={`${isChecked ? 'completed' : ''} task-check`}>
        <label className='checkbox-container'>
          <input
            type='checkbox'
            readOnly
            checked={isChecked}
            onChange={() => completeTodo(id)}
          />
          <span className='checkmark'></span>
        </label>
        {editingMode ?
        <label>
          <input
            className='task-editing-input'
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodoName(e.target.value)}
            value={newTodoName}
          />
          <button
            className='save-task-editing'
            type='button'
            onClick={() => handleTodoEditing(id, newTodoName)}
            >Save</button>
        </label>
        : <p>{taskName}</p>
        }
      </div>
      {!isChecked &&
        <div className='action-buttons'>
          <button className='edit-button' type='button' onClick={() => setEditingMode(true)}><MdEdit size={15}/></button>
          <button className='delete-button' type='button' onClick={() => deleteTodo(id)}><RiDeleteBinLine size={15}/></button>
        </div>
      }
    </Container>
  )
}

export default ToDo;