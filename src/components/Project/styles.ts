import styled from 'styled-components';

export const Container = styled.article`
  width: 50%;
  border: 1px solid #efefef;
  border-radius: 5px;
  overflow: hidden;

  header {
    height: 40px;
    width: 100%;
    background-color: #efefef;
    color: #5b5954;

    .header__inner-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;

      .buttons-container {
        button {
          border: none;
          background: transparent;
          margin-right: 3px;

          svg {
            fill: #89b0c2;
          }
        }
      }
    }
  }

  .content {
    .content__inner-container {
      padding: 25px 10px 0;
    }
    .todos-container,
    .dones-container {
      p {
        font-size: 1rem;
        color: #5b5954;
      }

      ul {
        width: 100%;
        padding: 10px;
        list-style: none;
      }
    }

    .dones-container {
      padding-bottom: 10px;
      border-bottom: 1px solid #efefef;
    }
  }

  footer {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    input {
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #efefef;
      width: 69%;
    }

    button {
      padding: 10px 35px;
      color: white;
      background-color: #00c137;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
    }
  }
`