import React from 'react'
import LoginSchema from '../validations/loginschema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Login = () => {

    const {register , handleSubmit , formState:{errors} }= useForm({
        resolver: yupResolver(LoginSchema)
    })


  return (
    <div>
        <h1>Login page Hai</h1>
    </div>
  )
}

export default Login