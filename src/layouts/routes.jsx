import { createBrowserRouter } from "react-router-dom";
import Categories from "../components/web/categories/Categories.jsx";
import Home from "../components/web/home/Home.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import Layout from "./Layout.jsx";
import HomeDashboard from "./../components/dashboard/home/Home.jsx";
import CategoriesDashboard from "./../components/dashboard/categories/Categories.jsx";
import Regestor from "../components/web/regestor/Regestor.jsx";
import Login from "../components/web/login/Login.jsx";
import Cart from "../components/web/cart/Cart.jsx";
import CategorieaDetails from "../components/web/categories/CategoriesDetails.jsx";
import Product from "../components/web/products/Product.jsx";
import ProtectedRoute from "../components/web/protectedRoute/ProtectedRoute.jsx";
import Profile from "../components/web/profile/Profile.jsx";
import SendCode from "../components/web/login/SendCode.jsx";
import ForgetPassword from "../components/web/login/ForgetPassword.jsx";
import UserInfo from "../components/web/profile/UserInfo.jsx";
import UserContact from "../components/web/profile/UserContact.jsx";
import Order from "../components/web/order/Order.jsx";
import GetOrder from "../components/web/order/GetOrder.jsx";
import Products from "../components/web/products/Products.jsx";
import Review from "../components/web/products/Review.jsx";
import FirstPage from "../components/web/home/FirstPage.jsx";

export const router = createBrowserRouter([ 
    {
        path: '/',
        element: <Layout /*user={user} setUser={setUser}*/ />,
        children: [
            {
                path: 'regestor',
                element: <Regestor />
            },
            {
                path: 'login',
                element:<Login />
            },
            {
                index: true,
                element: <Home />
            },
            {
                path: '/',
                element: <FirstPage />
            },
            {
                path: 'categories',
                element: <Categories />
            },
            {
                path: 'cart',
                element: <ProtectedRoute>
                    <Cart />
                </ProtectedRoute>
            },
            {
                path: 'order',
                element: <Order />
            },
            
            {
                path: 'profile',
                element: 
                <ProtectedRoute>
                    <Profile />    
                </ProtectedRoute>,
                children:[
                    {
                        index:true,
                        element: <UserInfo/>
                    },
                    {
                        path:'contact',
                        element: <UserContact/>
                    },
                    {
                        path: 'getOrder',
                        element: <GetOrder />
                    }
                ]
            },
            {
                path: 'products/category/:categoryId',
                element: <CategorieaDetails />
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'sendCode',
                element: <SendCode />
            },
            {
                path: 'forgetPassword',
                element: <ForgetPassword />
            },
            {
                path: 'product/:productId',
                element: <Product />
            },
            {
                path: 'product/:productId/review',
                element: <Review />
            },
            {
                path: '*',
                element: <h2>page not found --- web</h2>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [{
            path: 'home',
            element: <HomeDashboard />
        }
            , {
            path: 'categories',
            element: <CategoriesDashboard />
        },
        {
            path: '*',
            element: <h2>page not found --- dashboard</h2>
        }
        ]


    }
]);
