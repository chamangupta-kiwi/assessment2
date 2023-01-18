import * as yup from "yup";

 export const validate = yup.object({  
    email:yup.string()
    .required("Email is required*")
    .email("Invalid Email"),
    password:yup.string()
    .required("Password is Required*")
    .min(6,"minimum 6 character"),
  })