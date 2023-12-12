import axios from "axios";
import { createContext, useState } from "react";
import { toast } from 'react-toastify';


export const CartContext = createContext(null);

export function CartContextProvider({children}){

    let [counts, setCounts] = useState(0);

    


    const addToCartContext = async(productId)=>{
        try{
            const toket = localStorage.getItem("userToken");
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,{productId},{headers:{Authorization:`Tariq__${toket}`}});
            if(data.message='success'){
                toast.success('successfully added to cart', {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
            return data;
        }catch(error){
            return error; 
        }
    }


    const getCartContext = async ()=>{
        
        try{
            const token = localStorage.getItem("userToken");
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
            {headers:{Authorization:`Tariq__${token}`}});
            setCounts(data.count);  
            return data;
            
        }catch(error){
            return error; 
        }
    }

    
    

    const removeItemContext = async (productId)=>{
        try{
            const token = localStorage.getItem("userToken");
            const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,{productId},
            {headers:{Authorization:`Tariq__${token}`}}
            );
            return data;
            
        }catch(error){
            return error; 
        }
        
    }

    return <CartContext.Provider value={{addToCartContext,getCartContext,removeItemContext,counts,setCounts}}>  
        {children}
    </CartContext.Provider>; 
}