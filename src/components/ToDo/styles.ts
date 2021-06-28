import styled from 'styled-components';

export const Container = styled.li`
  margin-bottom: 15px;
  list-style: none;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  .task-check {
    display: flex;
    align-items: center;

    .checkbox-container {
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      margin-right: 10px;

      input[type='checkbox'] {
        width: 0;
        height: 0;
        opacity: 0;
        position: absolute;
        left: 0;
        cursor: pointer;

        &:checked {
          & ~ .checkmark {
            background: #34C37A;
            border: 1px solid #34C37A;
          }
          & ~ .checkmark:after {
            display: block;
          }
        }
      }

      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 1px solid;
        border-radius: 2px;

        &:after {
          content: '';
          position: absolute;
          display: none;
          left: 7px;
          top: 3px;
          height: 8px;
          width: 4px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }

  .task-editing-input {
    margin-right: 10px;
    border-radius: 6px;
    border-style: groove;
    padding: 3px;
  }

  .save-task-editing {
    padding: 5px;
    &:hover {
      background-color: #ffc107;
      border: 1px solid #ffc107;
      color: initial;
    }
  }

  .action-buttons {
    margin-left: 5px;

    button {
      border: none;
      background: transparent;
      margin-right: 3px;
      cursor: pointer;

      svg {
        fill: #89b0c2;
      }
    }
  }
`;