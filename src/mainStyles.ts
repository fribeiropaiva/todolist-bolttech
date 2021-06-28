import styled from 'styled-components';

export const Header = styled.header`
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #efefef;
  margin: 0 auto;
  background: linear-gradient(360deg, rgba(249,249,249,1) 17%, rgba(253,253,253,1) 50%);

  .header__inner-container {
    padding: 1%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 1.2rem;
      color: gray;
    }

    div {
      width: 10%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      ul {
        list-style: none;
      }
    }
  }
`

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
`

export const ProjectsArea = styled.section`
  flex: 2;
  flex-wrap: wrap;
  padding: 1%;
  display: flex;
  justify-content: space-between;
`

export const CreateProjectsArea = styled.aside`
  flex: 1;
  padding: 1%;
`