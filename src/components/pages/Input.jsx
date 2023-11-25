import React from 'react'

export default function Input({type='text',id,name,title,value,onChange,errors,toutched,onBlur}) {
    return (
        <>
        <div className='input-group mb-3 '>
            <label className='me-3 fw-bold' htmlFor={id}>{title}</label>
            <input  type={type} name={name} className='form-control rounded-pill me-3' value={value} onChange={onChange} id={id} onBlur={onBlur}/>
        </div>
        {errors[name] && toutched[name] && <p className='text text-danger text-start'>{errors[name]}</p> }
        </>
    )
}
