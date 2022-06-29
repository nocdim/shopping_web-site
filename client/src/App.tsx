import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import GlobalStyle from './components/styled/Global';
import { useAppDispatch, useAppSelector } from './hooks/redux';


const App:React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App