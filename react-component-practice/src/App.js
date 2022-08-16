import Expenses from "./components/Expenses";

function App() {
  const expense = [
    {
      id: "e1",
      title: `Toilet Paper`,
      amount: 94.12,
      date: new Date()
    },
    {
      id: "e2",
      title: `New TV`,
      amount: 799.67,
      date: new Date()
    },
    {
      id: "e3",
      title: `Car Insurance`,
      amount: 294.67,
      date: new Date()
    },
    {
      id: "e4",
      title: `New Desk`,
      amount: 450,
      date: new Date()
    }
  ];
  return (
    <div>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
