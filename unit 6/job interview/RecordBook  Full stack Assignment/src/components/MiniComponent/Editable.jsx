import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange
}) => {
  return (
    <tr>
        <td><input type="text" value={editFormData.student_name} name="student_name"/></td>
        <td><input type="number" value={editFormData.rank} name="rank" /></td>
        <td className='cp cp1'><span className="dp dp1">
            <input list="browsers" name="college_preference1" id="clist" value={editFormData.college_preference1} onChange={handleEditFormChange} required/>
              <datalist id="browsers">
                <option value="IIT KANPUR"/>
                <option value="IIT MADRAS"/>
                <option value="IIT BOMBAY"/>
                <option value="IIIT HYDERABAD"/>
                <option value="IIT ROORKEE"/>
                <option value="IIM AHMEDABAD"/>
              </datalist></span></td>
        <td className='cp cp2'><span className="dp dp1"> <input list="browsers" name="college_preference1" id="clist" value={editFormData.college_preference1} onChange={handleEditFormChange} required/></span></td>
        <td className='cp cp3'><span className="dp dp1"> <input list="browsers" name="college_preference1" id="clist" value={editFormData.college_preference1} onChange={handleEditFormChange} required/></span></td>
    </tr>
  );
};

export default EditableRow;
