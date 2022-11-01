import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';



const ModalFooter = () => {
    return (
            <Stack direction="row" spacing={1} justifyContent="center">
                <IconButton aria-label="delete" size="large" onClick={()=> {alert("you clicked delete")}}>
                    <DeleteIcon fontSize="inherit"/>
                </IconButton>
            </Stack>
    )
}

export default ModalFooter;