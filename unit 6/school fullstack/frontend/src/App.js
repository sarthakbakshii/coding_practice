import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Nav } from './Components/Dashboard/Nav';
import { Overview } from './Components/Dashboard/Overview';
import { useEffect } from 'react';
import { AddTeacher } from './Components/Dashboard/AddTeacher';
import { AddClass } from './Components/Dashboard/AddClass';

function App() {

  const navigate = new useNavigate()
  
  useEffect( () =>{
          let loginData = JSON.parse( sessionStorage.getItem("loginData")  );
          if( loginData ){
            navigate("/dashboard")
          }
          else{
            navigate("/")
          }
  }, []);

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Login/>}> </Route>
            <Route path='/dashboard' 
            element={ <div className='dashboardSaprator'>
                           <Nav/>
                           <Overview/>
                      </div>
                    }> 
            </Route>
            <Route path='/dashboard/add-teacher' 
            element={ <div className='dashboardSaprator'>
                           <Nav/>
                           <AddTeacher/>
                      </div>
                    }> 
            </Route>
            <Route path='/dashboard/add-class' 
            element={ <div className='dashboardSaprator'>
                           <Nav/>
                           <AddClass/>
                      </div>
                    }> 
            </Route>
        </Routes>
        
    </div>
  );
}

export default App;
