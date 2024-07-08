import axios from 'axios';
//import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Categories.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/Cart.jsx';

export default function Categories() { 
    const getCategories = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=7`);
        return data;
    }

    const x = useContext(CartContext);

    const { data, isLoading } = useQuery('seb_categories', getCategories);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        
        <>
            
            <div className='container'>
            <div className='swiper-custom-pagination'></div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={5.3}
                    loop={true}
                    autoplay={{
                        delay:3000
                    }}
                    navigation
                    pagination={{ 
                        clickable: true,
                        el:'.swiper-custom-pagination', 
                    }}
                    // onSlideChange={() => }
                    // onSwiper={(swiper) => }
                >
                    {data?.categories.length ? data?.categories.map((category) =>
                    <SwiperSlide key={category._id} >
                        <Link to={`/products/category/${category._id}`}>
                        <div className="category">
                        <img src={category.image.secure_url} className='rounded-circle'/>
                        </div>
                        </Link>
                    </SwiperSlide>
                    ):'no category found'}
                </Swiper>
            </div>
            </>
        );

    
        
}



    // const [categories, setCategories] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    // const getCategories = async()=>{
    //     try{
    //         const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
    //         setCategories(data.categories);
    //     }catch(error){
    //         console.error(error);
    //     }finally{
    //         setIsLoading(false);
    //     }


    // }

    // useEffect(()=>{
    //     getCategories();
    // },[])

    // if(isLoading){
    //     return <h2>Loading...</h2>
    // }




{/* <div className='row'>
                {data?.categories.length ? data.categories.map((category) =>
                    <div className='col-lg-4' key={category._id}>
                        <h2>{category.name}</h2>
                        <img src={category.image.secure_url} />
                    </div>
                ):'no category found'}
            </div> */}



            /*{<div className='container'>
            <div className='row'>
                {categories.length ? categories.map((category) =>
                    <div className='col-lg-4' key={categories._id}>
                        <h2>{category.name}</h2>
                        <img src={category.image.secure_url} />
                    </div>
                ) : 'no category found'}
            </div>
    </div>}
    */