import React from 'react'
import {useForm} from "react-hook-form"
import signupSchema from '../validations/signupschemas.js'
import { yupResolver } from "@hookform/resolvers/yup";

import {TextField , Button , Box} from "@mui/material"

// text field ==> input field , 
// buttton => button , 
// box = styling

const signup = () => {
    const {register , handleSubmit , formstate:{error}}= useForm({
        resolver : yupResolver(signupSchema),
    })

    const onSubmit = (data)=>{
        console.log(data)
    }

  return (
    <div>
        <h1>Yeh signup page hai</h1>
    </div>
  )
}

export default signup