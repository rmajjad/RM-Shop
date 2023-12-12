import React from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { regesterSchema } from '../valedation/valedation.js';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Regestor() {


    const initialValues = {
        userName: '',
        email: '',
        password: '',
        image: '',
    }



    const handelFieldChange = (event) => {
        formik.setFieldValue('image', event.target.files[0]);
    };


    const onSubmit= async users => {
        const formData = new FormData();
        formData.append("userName",users.userName);
        formData.append("email",users.email);
        formData.append("password",users.password);
        formData.append("image",users.image);

        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData)
        if(data.message == 'success'){ 
            formik.resetForm();
        toast.success('account created successfully, please verify your email to login', {
            position: "bottom-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
    }
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

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: regesterSchema,
    })

    const inputs = [
        {
            id: 'username',
            type: 'text',
            name: 'userName',
            title: 'user name',
            value: formik.values.userName,
        },
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
        {
            id: 'image',
            type: 'file',
            name: 'image',
            title: 'user image',
            onChange: handelFieldChange, 
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
            onChange={input.onChange || formik.handleChange}
        />
    )

    return (
        <div className='container d-flex align-items-center flex-column mt-5'>
            <h2 className='text-center mb-4 text-danger'>create account</h2>
            <div className='w-50'>
                <form onSubmit={formik.handleSubmit} className='text-center reg-form rounded-5' encType="multipart/form-data">
                    {renderInputs}
                    <button type='submit' disabled={!formik.isValid} className='rounded-pill py-1 px-3 reg-submit btn btn-dark text-white'>Regestor</button>
                </form>
            </div>
        </div>
    )
}

