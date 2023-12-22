import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'

export default function CategorieaDetails() {

    const { categoryId } = useParams();

    const gateGoryDetails = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
        return data.products;
    }



    const { data, isLoading } = useQuery('category_details', gateGoryDetails);

    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <div className='container p-5'>
        <div className=' row'>
            {data.length ? data.map((product) => 
            <div className=" col-md-4 text-center ">
                    <img src={product.mainImage.secure_url} className="pb-3" />
                    <p>{product.name}</p>
                    <Link to={`/product/${product._id}`} className={`text-decoration-none text-success`}>Details</Link>
            </div>
            ) : <h2>no product found</h2>}
        </div>
</div>

    )
}
