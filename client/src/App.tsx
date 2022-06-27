import React, { useEffect } from 'react';
import ProductContainer from './components/ProductContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';


const App = () => {
  // const dispatch = useAppDispatch()
  // const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <div>
      {/* { isLoading && <h1>Loading...</h1> }
      { error && <h1>{error}</h1> }
      {JSON.stringify(users, null, 2)} */}
      <ProductContainer />
    </div>
  )
}

export default App