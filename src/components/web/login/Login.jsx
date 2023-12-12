import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { loginSchema } from '../valedation/valedation.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.jsx';


export default function Login() {

    let {userToken,setUserToken} = useContext(UserContext);

    
    const navigate = useNavigate();
    
    if(userToken){
        navigate(-1);
    }

    const initialValues = {
        email: '',
        password: '',
    }
    const onSubmit= async users => {
    
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`,users)
            if(data.message == 'success'){ 
                localStorage.setItem("userToken",data.token);
                setUserToken(data.token);
            formik.resetForm();
        toast.success('login successfully', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
        navigate('/');
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
    })

    const inputs = [
        
        {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'user email',
            value: formik.values.email,
        },
        {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'user password',
            value: formik.values.password,
        },
        
    ];


    const renderInputs = inputs.map((input, index) =>
        <Input
            type={input.type}
            id={input.id}
            name={input.name}
            title={input.title}
            key={index}
            value={input.value}
            errors={formik.errors}
            toutched={formik.touched}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
        />
    )

    return (
        <>
        <div className='container d-flex align-items-center flex-column mt-5'>
            <h2 className='text-center mb-4 text-danger'>login your account</h2>
            <div className='w-50'>
                <form onSubmit={formik.handleSubmit} className='text-center reg-form rounded-5'>
                    {renderInputs}
                    <button type='submit' disabled={!formik.isValid} className='rounded-pill py-1 px-3 reg-submit btn btn-dark text-white'>Login</button>
                </form>
                <Link to='/sendCode' className='text-black'>forgot your password?</Link>
            </div>
        </div>
        
        </>
    )
}

