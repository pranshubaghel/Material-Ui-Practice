import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
function Form() {
    const [Input, setInputs] = useState({
        name: "",
        email: "",
        pswrd: ""
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value]
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Input)
    }
    return (
        <>
            <form onClick={handleSubmit}>
                <TextField
                    name="name"
                    value={Input.name}
                    onChange={handleChange}
                    type='text'
                    placeholder='name'
                    variant='standard'
                    sx={{ margin: "30px" }}
                ></TextField>
                <br />

                <TextField
                    name="email"
                    value={Input.mail}
                    onChange={handleChange}
                    type='text'
                    placeholder='email'
                    variant='outlined'
                    sx={{ margin: "30px" }}
                ></TextField><br />

                <TextField
                    name="pswrd"
                    value={Input.pswrd}
                    onChange={handleChange}
                    type='password'
                    placeholder='password'
                    variant='filled'
                    sx={{ margin: "30px" }}
                ></TextField>
                <br/>
                <Button type='submit'>Submit</Button>

            </form>
        </>
    )
}

export default Form