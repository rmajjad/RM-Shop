import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'

export default function CategorieaDetails() {

    const {categoryId} = useParams();
    
    const gateGoryDetails = async()=>{
        const{data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
        return data.products;
    }

    

    const {data,isLoading} = useQuery('category_details', gateGoryDetails);

    if(isLoading){
        return <p>Loading...</p>
    }


    return (
        <div className='products'>
            {data.length ? data.map((product)=>
                <div className='product' key={product._id}>
                    <img src={product.mainImage.secure_url  } />
                    <h2>{product.name}</h2>
                    <Link to={`/product/${product._id}`}>details</Link>
                </div>
            ):<h2>no product found</h2>}
        </div>
        
        
    )
}
