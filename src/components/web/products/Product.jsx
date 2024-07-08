import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { CartContext } from '../context/Cart.jsx';


export default function Product() {

    const {productId} = useParams();
    const {addToCartContext} = useContext(CartContext);
    
    const getProduct = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
        return data.product;
    }


    const  addToCart = async(productId)=>{
        const res = await addToCartContext(productId);
        return res;
    }

    const getStars = (rate) => {
        let stars = [];
        for (let haveRate = 0; haveRate < rate; haveRate++) {
        stars.push(<FaStar color="gold" />);
        }
        
        return stars;
    };

    const {data,isLoading} = useQuery('products details',getProduct);

    if(isLoading) return <p>Loading...</p>


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2'>
                    {                        
                        data.subImages.map((img,index)=>  
                        <React.Fragment key={index}>  
                        <div className="images mt-3">
                        <img src={img.secure_url} />
                        </div>  
                        </React.Fragment>                        
                        )    
                    }
                </div>
                <div className='col-lg-6'>
                    <h2 className='fs-6'>{data.name}</h2>
                    <p>${data.price}</p>
                    <p><b>Short Discription about your lovely product 😊: </b>{data.description}</p>
                    <button className='btn btn-outline-success' onClick={()=>addToCart(data._id)}>Add to Cart</button>
                </div>
                
            </div>
            {data.reviews.map((review)=><div className='text-center'>
                        <img src={review.createdBy.image.secure_url} />
                        <p>{review.createdBy.userName}</p>
                        <p>{getStars(review.rating)}</p>
                        <p>{review.comment}</p>
                        <hr />
                        </div>
                )}
            <Link to='review' className={`text-decoration-none text-success `}>Add your Review</Link>
        </div>
    )
}
