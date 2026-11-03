import * as yup from "yup"


const signupSchema = yup.object({
    fullName : yup
    .string()
    .required("Full Name is Required"),

    email : yup
    .string()
    .email("Plz enter A valid email")
    .required("email is Req"),

    password : yup
    .string()
    .max(16 , "password connot be excess 16 Character")
    .required("password is required")

})

export default signupSchema