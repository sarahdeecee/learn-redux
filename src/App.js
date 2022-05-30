import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, login} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const num = 5;
  
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <div>
        Counter number: {num}
      </div>
      <div>
        <button onClick={() => dispatch(increment(num))}>+</button>
        <button onClick={() => dispatch(decrement(num))}>-</button>
      </div>

      <button onClick={() => dispatch(login())}>{isLogged ? 'Logout' : 'Login'}</button>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
