import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DataSaverOnTwoToneIcon from '@mui/icons-material/DataSaverOnTwoTone';

export const GrossoryShowSingleList = ({list, deleteHandeler}) =>{
    return( <div className="singleItem"> 
                <strong>Product : <span className="red">{list.prName}</span></strong>
                <strong>Quantity : <span className="blue">{list.qty}</span></strong>
                <strong> <span className="green">
                {list.status?"already baught":"Still pending to buy"}
                </span></strong> 
                <div>
                
                 <DeleteTwoToneIcon color="error"  
                  sx={{ fontSize: 30 }}
                  onClick={() => {
                     deleteHandeler(list.uid) 
                  }}
                  />
                 <ModeEditOutlineTwoToneIcon color="primary"  sx={{ fontSize: 30 }} />
                 </div>
               

              
                
            </div> )
};
