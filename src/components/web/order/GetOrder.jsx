import React, { useContext } from 'react'
import { CartContext } from '../context/Cart.jsx';
import { useQuery } from 'react-query';

export default function GetOrder() {
    const { getOrderContext } = useContext(CartContext);

    const getOrder = async () => {
        const res = await getOrderContext();
        return res;
    }

    const { data, isLoading } = useQuery("order", getOrder);
    console.log(data);
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <>

            <div>



                {data?.orders ? (
                    data.orders.map((order, index) => <>
                        <table className="table table-striped w-75 m-auto mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">Order #</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Copun Name</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">payment Type</th>
                                    <th scope="col">Stutas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr scope="row">
                                    <td>{index + 1}</td>
                                    <td>{order.address}</td>
                                    <td>{order.couponName}</td>
                                    <td>{order.phoneNumber}</td>
                                    <td>{order.paymentType}</td>
                                    <td>{order.status}</td>
                                </tr>
                            </tbody>
                            </table >
                        </>
                        )
                        ) : <h2>No order</h2>
                        }

                    
            </div>
        </>
    )
}
