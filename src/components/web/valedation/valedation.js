import * as yup from "yup";
export const regesterSchema = yup.object({
    userName:yup.string().required('user name is required').min(3,'must be at least 3 char').max(30,'max is 30 char'),
    email:yup.string().required('email is required').email(),
    password:yup.string().required('password is required').min(3,'at least 3 char').max(30,'max is 30 char')
})

export const loginSchema = yup.object({
    email:yup.string().required('email is required').email(),
    password:yup.string().required('password is required').min(3,'at least 3 char').max(30,'max is 30 char')
})

export const resetPasswordSchema = yup.object({
    email:yup.string().required('email is required').email(),
})

export const resetForggetenPasswordSchema = yup.object({
    email:yup.string().required('email is required').email(),
    password:yup.string().required('password is required').min(3,'at least 3 char').max(30,'max is 30 char'),
    code:yup.string().required('code is required').min(4,'only 4 characters').max(4,'only 4 characters')
})

export const orderSchema = yup.object({
    address:yup.string().required('address is required'),
    phone:yup.string().required('phone is required')
})


   // const validate = values => {
    //     let errors = {};
    //     if (!values.userName) {
    //         errors.userName = 'user name is required';
    //     }
    //     if (!values.email) {
    //         errors.email = 'email is required';
    //     }
    //     if (!values.password) {
    //         errors.password = 'password is required';
    //     }
    //     return errors;
    // }