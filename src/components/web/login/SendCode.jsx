import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { resetPasswordSchema } from '../valedation/valedation.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/User.jsx';


export default function SendCode() {

    let {userToken,setUserToken} = useContext(UserContext);

    
    const navigate = useNavigate();
    
    if(userToken){
        navigate('/forgetPassword');
    }

    const initialValues = {
        email: '',
    }
    const onSubmit= async users => {
    
        const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`,users)
            if(data.message == 'success'){ 
                localStorage.setItem("userToken",data.token);
                setUserToken(data.token);
            formik.resetForm();
        toast.success('write your information needed below to reset your password', {
            position: "top-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
        navigate('/forgetPassword');
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: resetPasswordSchema,
    })

    const inputs = [
        
        {
            id: 'email',
            type: 'email',
            name: 'email',
            title: 'user email',
            value: formik.values.email,
        }        
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
            <h2 className='text-center mb-4 text-danger'>Enter your Email</h2>
            <div className='w-50'>
                <form onSubmit={formik.handleSubmit} className='text-center reg-form rounded-5'>
                    {renderInputs}
                    <button type='submit' disabled={!formik.isValid} className='rounded-pill py-1 px-3 reg-submit btn btn-dark text-white'>Submit</button>
                </form>
            </div>
        </div>
        
        </>
    )
}

