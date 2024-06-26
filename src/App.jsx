
import React from 'react';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
  return <ul>{listItems}</ul>;
}

function App() {
  const numbersArray = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Number List</h1>
      <NumberList numbers={numbersArray} />
    </div>
  );
}

export default App;