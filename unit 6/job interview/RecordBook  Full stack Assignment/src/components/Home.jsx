import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineArrowDropDownCircle,MdFormatAlignLeft } from "react-icons/md";
import React, { useState,useEffect } from 'react'
import Result from "./Result";
import './Common.css'
import axios from 'axios'
import Newentry from "./Newentry";
import MapData from "./MiniComponent/MapData";
const API_HOST = "http://localhost:3001";
const INVENTORY_API_URL = `${API_HOST}/students`;

function Home() {
    const [data,setData]=useState([])
    const [show,setShow]=useState(false)
    const [editFormData, setEditFormData] = useState({
        student_name: "",
        rank: "",
        college_preference1: "",
        college_preference2: "",
        college_preference3: ""
      });
    
      const [editContactId, setEditContactId] = useState(null);
      const [see,setSee]=useState(false)
  const handleSee=()=>{
    setSee(!see)
  }
    
    const handleShow=()=>{
        setShow(!show)
    }
    const getData=()=>{
        axios.get(`${INVENTORY_API_URL}`)
        .then(({data})=>setData(data))
    }

    useEffect(() => {
        getData()
    }, [])

    const handleSort=()=>{
        console.log("hell",data);
    }
    
  return (
    <div id='main'>
        <h4 className='head1'>Student List</h4>
        <table className='tableMain'>
            <thead className='tableHead'>
                <tr id='headDes'>
                    <th><MdFormatAlignLeft className="cd"/>Student Name<MdKeyboardArrowDown className="arrowd" onClick={handleSort}/></th>
                    <th><span className="hash">#</span>Rank<MdKeyboardArrowDown className="arrowd"/></th>
                    <th><MdOutlineArrowDropDownCircle className="cd"/>College Preference 1<MdKeyboardArrowDown onClick={handleSort} className="arrowd"/></th>
                    <th><MdOutlineArrowDropDownCircle className="cd"/>College Preference 2<MdKeyboardArrowDown className="arrowd"/></th>
                    <th><MdOutlineArrowDropDownCircle className="cd"/>College Preference 3<MdKeyboardArrowDown className="arrowd"/></th>
                </tr>
            </thead>
            <tbody className='tableBody'>
            <MapData data={data}  setData={setData}/>
            </tbody>
        </table>
        <div className="btnpart">
        <button className="btn btn1" onClick={handleShow}>Add New Student</button>
        <button className="btn btn2" onClick={handleSee}>Get Result</button>
        <div>{see?<Result handleSee={handleSee} getData={getData}/>:null}</div>
        <div>{show?<Newentry handleShow={handleShow} getData={getData}/>:null}</div>
        </div>
    </div>
  )
}

export default Home