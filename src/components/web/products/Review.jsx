
import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { reatingOrderSchema } from '../valedation/valedation.js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';


export default function Review() {

    const {productId} = useParams();
    let token = localStorage.getItem("userToken");
    
    const navigate = useNavigate();
    
    

    const initialValues = {
        comment: '',
        rating: '',
    }
    const onSubmit= async (addReview) => {
        try{
            
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/products/${productId}/review`,addReview,
            {headers:{Authorization:`Tariq__${token}`}}
            )
        if(data.message == 'success'){ 
                localStorage.setItem("userToken",data.token);
                setUserToken(data.token);
            formik.resetForm();
        toast.success('thank you for reviewing 💖', {
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
        navigate(`/products/${productId}`);
    }catch(error){
        return error;
    }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: reatingOrderSchema,
    })

    const inputs = [
        
        {
            id: "comment",
            type: "text",
            name: "comment",
            title: "Comment",
            value: formik.values.comment,
        },
        {
            id: "rating",
            type: "number",
            name: "rating",
            title: "Rating",
            value: formik.values.rating,
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
            <h2 className='text-center mb-4 text-danger'>Review & Reating</h2>
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

