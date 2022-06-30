import './App.css';
import ToDoList from './components/ToDoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="App">
      <ToDoList />
      <AddTodo />
    </div>
  );
}

export default App;
