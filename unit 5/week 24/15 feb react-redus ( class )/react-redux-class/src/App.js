import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {Counter} from './Components/Counter';
import {Todo} from './Components/Todo'

function App() {
  const entireStore = useSelector( (store) => store.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div style={{textAlign : "left",
                    paddingLeft : "50px",
                    borderBottom : "1px solid",
                    width : "300px"}}>
                    Counter using react- redux
      </div>
      <Counter/>

      <div style={{textAlign : "left",
                    marginTop : "50px",
                    paddingLeft : "50px",
                    borderTop : "1px solid"}}>
                    Todo using react- redux
      </div>
      <Todo/>
    </div>
  );
}

export default App;

/*
 useSelector - get data
 useDispatch - dispatch an action 

*/
