// import logo from './logo.svg';
import {useState} from 'react';
import './App.scss';
import Minus from './components/btnMinus';
import Plus from './components/btnPlus';

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Counter: {count} time(s)</p>
      <button onClick={ () => setCount(Plus(count)) }> + </button>
      <Minus count={count} setCount={setCount} />
    </div>
  )
}

export default Counter;
