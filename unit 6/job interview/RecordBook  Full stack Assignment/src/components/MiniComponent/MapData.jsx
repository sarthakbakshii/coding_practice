import axios from 'axios'
import React, { useState } from 'react'

function MapData({data, setData}) {
    const [seen,setSeen]= useState(-1)
    const handleEdit=(id)=>{
        setSeen(id)
    }

    const setNewData = (item) =>{
        axios.patch(`http://localhost:3001/students/${item.id}` , item )
        .then( res =>{
            console.log(res)
        })

        let newArr = data.map( a =>{
            if( a.id == item.id){
                a = item;
            }
            return a
        })
        setData([...newArr])

        console.log( "testing" , item)
    }

  return (
    <>
        {
            data.map( a =>{
                return <tr key={a.id} onClick={() => handleEdit(a.id)}>
                        { seen == a.id ?
                            <EditTr handleEdit={handleEdit} item={a} setNewData={setNewData} />
                            :
                            <NormalTr  handleEdit={handleEdit} item={a}/> 
                        }
                      </tr>
                       
            })
            
        }
    </>
  )
}

const EditTr = ({handleEdit , item , setNewData}) =>{

    const [editFormData, setEditFormData] = useState(item);

    const changeHandler = (e) =>{
        const {name} = e.target;
        setEditFormData({...editFormData , [name] : e.target.value })
        
    }
    // console.log( editFormData )

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
         setNewData(editFormData)
         handleEdit(-1)
        }
        else{
            changeHandler(event)
        }
    }

    return  < >
                    <td>
                       <input type="text" value={editFormData.student_name} onChange={ (e) => changeHandler(e) } 
                        onKeyDown={handleKeyDown} name="student_name"/>
                    </td>
                    <td>
                       <input type="number" name="rank" onChange={changeHandler} 
                       onKeyDown={handleKeyDown} value={editFormData.rank} />
                    </td>
                    <td className='cp cp1'>
                       <span className="dp dp1">

                            <input list="browsers" 
                             onChange={changeHandler} 
                            name="college_preference1"
                            onKeyDown={handleKeyDown}
                            defaultValue={editFormData.college_preference1} 
                            id="clist" required
                            />

                            <datalist id="browsers">
                                <option value="IIT KANPUR"/>
                                <option value="IIT MADRAS"/>
                                <option value="IIT BOMBAY"/>
                                <option value="IIIT HYDERABAD"/>
                                <option value="IIT ROORKEE"/>
                                <option value="IIM AHMEDABAD"/>
                            </datalist>

                       </span>
                    </td>
                    <td className='cp cp2'>
                        <span className="dp dp1"> 
                        
                             <input list="browsers"
                             onKeyDown={handleKeyDown}
                             onChange={changeHandler} 
                             name="college_preference2" 
                             value={editFormData.college_preference2} 
                             id="clist" required 
                             />

                        </span>
                    </td>
                    <td className='cp cp3'>
                        <span className="dp dp1"> 

                             <input list="browsers" 
                             onKeyDown={handleKeyDown}
                              onChange={changeHandler} 
                             name="college_preference3" 
                             value={editFormData.college_preference3} 
                             id="clist" required
                             />

                        </span>
                    </td>
                    
    
           </>
}

const NormalTr = ({handleEdit , item}) =>{
    return <>
                    <td>{item.student_name}</td>
                    <td>{item.rank}</td>
                    <td className='cp cp1'><span style={
                                                        
                        {
                            background: item.college_preference1==="IIT KANPUR"?"#c5dcef":item.college_preference1==="IIT MADRAS"?"rgb(248, 232, 169)":item.college_preference1==="IIT BOMBAY"?"#e0c5ef":item.college_preference1==="IIIT HYDERABAD"?"#edefc5":item.college_preference1==="IIM AHMEDABAD"?"#efc5dc":item.college_preference1==="IIT ROORKEE"?"#c7efc5":"#efd8c5"
                        }
                            } className="dp dp1">{item.college_preference1}</span></td>
                                <td className='cp cp2'><span  style={
                                                        
                                    {
                                        background: item.college_preference2==="IIT KANPUR"?"#c5dcef":item.college_preference2==="IIT MADRAS"?"rgb(248, 232, 169)":item.college_preference2==="IIT BOMBAY"?"#e0c5ef":item.college_preference2==="IIIT HYDERABAD"?"#edefc5":item.college_preference2==="IIM AHMEDABAD"?"#efc5dc":item.college_preference2==="IIT ROORKEE"?"#c7efc5":"#efd8c5"
                                    }
                                        } className="dp dp1">{item.college_preference2}</span></td>
                                <td className='cp cp3'><span style={
                                                        
                                {
                                    background: item.college_preference3==="IIT KANPUR"?"#c5dcef":item.college_preference3==="IIT MADRAS"?"rgb(248, 232, 169)":item.college_preference3==="IIT BOMBAY"?"#e0c5ef":item.college_preference3==="IIIT HYDERABAD"?"#edefc5":item.college_preference3==="IIM AHMEDABAD"?"#efc5dc":item.college_preference3==="IIT ROORKEE"?"#c7efc5":"#efd8c5"
                                }
                                    }  className="dp dp1">{item.college_preference3}</span></td>
            </>
}


export default MapData

