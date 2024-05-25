import React from 'react'
import { TextField } from '@mui/material'
function InputTest() {
    return (
        <>
            <TextField
                type='text'
                placeholder='name'
                variant='standard'
                sx={{ margin: "30px" }}
            /><br/>

            <TextField
                type='text'
                placeholder='name'
                variant='outlined'
                sx={{ margin: "30px" }}
            /><br/>

            <TextField
                type='text'
                placeholder='name'
                variant='filled'
                sx={{ margin: "30px" }}
            />
        </>
    )
}

export default InputTest