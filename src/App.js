import React from 'react';

function App() {
  // let numbers = [1, 2, 3];
  const [numbers, setNumbers] = React.useState([1, 2, 3]);

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10);
    setNumbers([...numbers, randNumber]); //Очистить массив по клику
  };

  return (
    <div className="App">
      <ul>
        {
          numbers.map(num => <li key={num}>{num}</li>)
        }
      </ul>
      <button onClick={addNumber}>Введите число</button>
    </div>
  );
}

export default App;