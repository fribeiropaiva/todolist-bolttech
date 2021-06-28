import styled from 'styled-components';

export const Container = styled.section`
  height: 300px;
  width: 100%;
  background-color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  .inner-container {
    padding: 10%;
    flex-shrink: 0;

    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    input {
      padding: 9px 9px;
      border-radius: 5px;
      width: 100%;
      border: 1px solid lightgrey;
      margin-bottom: 6px;
    }

    button {
      width: 100%;
      padding: 9px;
      border-radius: 5px;
      border: none;
      background: #01b9de;
      color: white;
      font-size: 1rem;
    }
  }
`