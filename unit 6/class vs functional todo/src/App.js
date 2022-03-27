import logo from './logo.svg';
import './App.css';
import { TodoInput } from './Components/TodoInput';
import { Class_based_todo } from './Components/Class_based_todo';
import { Func_based_todo } from './Components/Func_based_todo';

function App() {
  return (
    <div className="App">
       {/* <TodoInput/> */}
       <Class_based_todo/>
       <Func_based_todo/>
    </div>
  );
}

export default App;
