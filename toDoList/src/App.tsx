import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onPlusClick = () => {
    setCounter((current) => current + 1);
  };
  const onMinusClick = () => {
    setCounter((current) => current - 1);
  };
  const onMultipleClick = () => {
    setCounter((current) => current * 2);
  };
  const onDivideClick = () => {
    setCounter((current) => current / 2);
  };
  return (
    <div>
      <h1>React Counter</h1>
      <h3>{counter}</h3>
      <button onClick={onPlusClick}>+클릭</button>
      <button onClick={onMinusClick}>-클릭</button>
      <button onClick={onMultipleClick}>X2 클릭</button>
      <button onClick={onDivideClick}>/2 클릭</button>
    </div>
  );
}

export default App;
