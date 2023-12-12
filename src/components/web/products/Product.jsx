import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify';
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

    const {data,isLoading} = useQuery('products details',getProduct);

    if(isLoading) return <p>Loading...</p>


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    {
                        
                        data.subImages.map((img,index)=>  
                        <React.Fragment key={index}>    
                            <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img.secure_url
                            },
                            largeImage: {
                                src:img.secure_url,
                                width: 1000,
                                height: 1800
                            },
                            isHintEnabled:true,    
                            enlargedImageContainerDimensions:{
                                width:500,
                                height:500,
                            },
                            enlargedImagePosition:'over',
                        }} /> 
                        </React.Fragment>
                        // <div className="images mt-3">
                        // <img src={img.secure_url} />
                        // </div>  
                        )    
                    }
                </div>
                <div className='col-lg-8'>
                    <h2>{data.name}</h2>
                    <p>{data.price}</p>
                    <button className='btn btn-outline-success' onClick={()=>addToCart(data._id)}>Add to Cart</button>
                </div>
            </div>
            
        </div>
    )
}
