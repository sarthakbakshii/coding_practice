import { useState } from "react";
import "./gross.css"
import React from 'react'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export const GrossoryTodoInput = ({handleClick}) =>{

    const [prName, setPrName] = useState("");
    const [qty, setQty] = useState("");

    // -- empty field 
    const emptyInputbox = () =>{
        setPrName("");
        setQty("")
    }

    // ====== dialoge box if input empty
        const [open, setOpen] = React.useState(false);
        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };


    return (
        <div className="displayBox">
          
            <h1> Grossory List <ShoppingCartTwoToneIcon sx={{ fontSize: 30 }} /> </h1>
            <div className="inputsection">
                <input type="text" className="prName" 
                       placeholder="Enter the item in the list box"
                       value={ prName }
                       onChange={ (e) => {
                           console.log(e.target.value);
                           setPrName(e.target.value)
                       }}
                />

                <input type="text" className="prName"
                       placeholder="Enter quantity"
                       value={qty}
                       onChange={ (e) => {
                           console.log(e.target.value);
                           setQty(e.target.value)
                       }}
                />
                      <Button variant="contained" endIcon={<SendIcon />}
                      onClick={ () => {
                            if( prName == "" || qty == ""){
                               handleClickOpen()
                                // alert("Please fill the items first");
                                
                                emptyInputbox();
                                
                            }
                            else{
                                handleClick(prName,qty);
                                emptyInputbox();
                            }
                            
                        }}>
                            Send
                        </Button>

                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"Empty field elert"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                You can just left a field empty, go fill it up.
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Ok </Button>
                            
                            </DialogActions>
                        </Dialog>

                
            </div>
        </div>
    )
};
