import React from 'react';
import { Container, Header } from './mainStyles';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header className="App-header">
        <div className="header__inner-container">
          <p>EDirectInsure TODO List</p>
          <div>
            <ul>
              <li>Filipe Ribeiro</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </Header>
    </Container>
  );
}

export default App;
