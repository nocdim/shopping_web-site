import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

const App = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
    </div>
  )
}

export default App