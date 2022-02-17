
import './App.css';
import { Details } from './Components/Details';
import {Edit} from './Components/Edit';
import {Home} from './Components/Home';
import {Navbar} from './Components/Navbar';
import { Todo } from './Components/Todo';

import {
  Routes,
  Route
} from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

function App() {
 
  // const todo = useSelector( (store) => store.todos );
  // console.log(todo)

  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route  path="/" element={<Home/>}> </Route>
            <Route  path="/todo" element={<Todo/>}> </Route>
            <Route  path="/todo/:id" element={<Details/>}> </Route>
            <Route  path="/todo/:id/edit" element={<Edit/>}> </Route>
        
        </Routes>
        
    </div>
  );
}

export default App;


