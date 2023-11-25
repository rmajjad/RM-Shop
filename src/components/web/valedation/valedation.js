import * as yup from "yup";
export const regesterSchema = yup.object({
    userName:yup.string().required('user name is required').min(3,'must be at least 3 char').max(30,'max is 30 char'),
    email:yup.string().required('email is required').email(),
    password:yup.string().required('password is required').min(3,'at least 3 char').max(30,'max is 30 char')
})