import React, { useContext } from 'react'
import Input from '../../pages/Input.jsx'
import { useFormik } from 'formik';
import { orderSchema } from '../valedation/valedation.js';
import axios from 'axios';
import style from './Order.module.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/Cart.jsx';
import { useQuery } from 'react-query';



export default function Order() {

    const { getCartContext } = useContext(CartContext);

    const getCart = async () => {
        const res = await getCartContext();
        return res;
    }
    const { data, isLoading } = useQuery("cart", getCart);
    console.log(data);

    const navigate = useNavigate();

    const initialValues = {
        copunName: '',
        address: '',
        phone: '',
    }

    const onSubmit = async users => {

        try {
            const token = localStorage.getItem("userToken");
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/order`, users, { headers: { Authorization: `Tariq__${token}` } })
            console.log(data);
            if (data.message == 'success') {
                formik.resetForm();
                toast.success('YOUR ORDER CREATED IS PENDING', {
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
        } catch (error) {
            return error;
        }
        navigate('/');
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
        validationSchema: orderSchema,
    })

    const inputs = [
        {
            id: 'copunName',
            type: 'text',
            name: 'copunName',
            title: 'copun name',
            value: formik.values.copunName,
        },
        {
            id: 'address',
            type: 'text',
            name: 'address',
            title: 'user address',
            value: formik.values.address,
        },
        {
            id: 'phone',
            type: 'number',
            name: 'phone',
            title: 'user phone',
            value: formik.values.phone,
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

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <>
            {data?.products ? (
                data.products.map((product) =>
                    <div className={`${style.ordDet}`}> 
                        <img src={product.details.mainImage.secure_url} />
                        <div className={`${style.proDet}`}>
                            <p>{product.quantity}</p>
                            <h2 className={`${style.proName}`}>{product.details.name}</h2>
                        </div>
                    </div>
                )
            ) : <h2>No order</h2>
            }
            <div className='container d-flex align-items-center flex-column mt-5'>
                <h2 className={`${style.order}`}>Complete the Order</h2>
                <div className='w-50'>
                    <form onSubmit={formik.handleSubmit} className='text-center reg-form rounded-5' encType="multipart/form-data">
                        {renderInputs}
                        <button type='submit' disabled={!formik.isValid} className='rounded-pill py-1 px-3 reg-submit btn btn-dark text-white'>Create Order</button>
                    </form>
                </div>
            </div>
        </>
    )
}

