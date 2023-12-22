import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import style from './Products.module.css';
import { Link } from 'react-router-dom';

export default function Products() {

    let [product, setProduct] = useState();
    let [isLoading, setIsLoading] = useState(true);
    let [page,setPage] = useState(1);
    

    const getProducts = async (page) => {
        try{
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products?page=${page}`);
            setProduct(data);
            console.log(data.products[0].reviews);
            setIsLoading(false);    
        }catch(error){
            setIsLoading(false); 
            return error;
        }
    }
    const getPage = async (pageNumber) => {
        setPage(pageNumber);
        setIsLoading(true); 
        await getProducts(pageNumber);
    };


        const avgRate = (product) => {
            let sum = 0;
            product.reviews.map((review) =>
            (sum = sum + review.rating));
            return Math.round(sum / product.reviews.length);
        };
        
        const getStars = (avgerge) => {
            let stars = [];
            for (let haveRate = 0; haveRate < avgerge; haveRate++) {
            stars.push(<FaStar color="gold" />);
            }
            
            return stars;
        };


    useEffect(() => {
        getProducts(page);
    }, []);


    if (isLoading) {
        return <p>Loading...</p>
    }

    

    return (
        <>
            <div className='row text-center'>
                {product?.products ? product.products.map((product, index) =>
                    <React.Fragment key={index}>
                        <div className='col-md-3'>
                        <img src={product.mainImage.secure_url} className={`${style.proImg}`} />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <p>{avgRate(product)}<span className='ps-2'>{getStars(avgRate(product))}</span></p>
                        <Link to={`/product/${product._id}`} className={`text-decoration-none text-success`}>Details</Link>
                        </div>
                        
                    </React.Fragment>
                ):null}
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination ">
                <li className="page-item">
                <button
                    className="page-link text-success"
                    onClick={() => getPage(--page)}
                    disabled={page === 1}
                >
                    Previous
                </button>
                </li>


                    {Array.from({ length: product.total / product.page }).map((_, index) => (
                        <li className="page-item" key={index}>
                            <button
                                className="page-link text-success"
                                onClick={() => getPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}  

                    

                    <li className="page-item">
                        <button
                            className="page-link text-success"
                            onClick={() => getPage(++page)}
                            disabled={page === product.total / product.page}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>

        </>

    )
}
