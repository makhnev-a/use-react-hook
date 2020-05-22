import React from 'react';

function App() {
  let numbers = [1, 2, 3];

  const addNumber = () => {
    numbers.push(4);
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
