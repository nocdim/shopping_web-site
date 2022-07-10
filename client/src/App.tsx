import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { MainContainer } from './components/styled/AppRouter';
import GlobalStyle from './components/styled/Global';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <MainContainer>
        <AppRouter />
      </MainContainer>
    </BrowserRouter>
  )
}

export default App