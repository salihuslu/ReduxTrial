import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/counterSlice';
import UserList from './UserList';
function App() {

  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);

  return (

    <div>
      <UserList />
      <div>{value}</div>
      <div> <button onClick={() => dispatch(increment())}>Arttır</button> <button onClick={() => dispatch(decrement())}>Azalt</button></div>
    </div>



  )
}

export default App
