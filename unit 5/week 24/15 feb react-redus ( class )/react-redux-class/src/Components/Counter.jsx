import { useSelector,useDispatch } from 'react-redux';
import {incCount, decCount } from '../Redux/action'

function Counter() {
  const entireStore = useSelector( (store) => store.count);
  const dispatch = useDispatch();

  return (
    <div>
       <h1> Count : { entireStore }  </h1>
        <button onClick={() =>{
           dispatch( decCount(1) )
       }}>DEC 1</button>
       
       <button onClick={() =>{
           dispatch( incCount(1) )
       }}>ADD 1</button>
    </div>
  );
}

export { Counter }
