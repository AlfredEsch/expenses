import './App.css';

import Expenseitem from "./components/Expenseitem";

function App() {
    const expenses = [
        {
        date: new Date(2023, 0, 10),
        title: "New Book",
        price: 30.99
    },
        {
            date: new Date(2023, 0, 10),
            title: "New jeans",
            price: 99.99
        }
]
  return (
    <div className="App">
      <Expenseitem expenseData={expenses[0]}></Expenseitem>
        <Expenseitem expenseData={expenses[1]}></Expenseitem>
    </div>
  );
}

export default App;
