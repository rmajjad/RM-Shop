import { createBrowserRouter } from "react-router-dom";
import Categories from "../components/web/categories/Categories.jsx";
import Home from "../components/web/home/Home.jsx";
import DashboardLayout from "./DashboardLayout.jsx";
import Layout from "./Layout.jsx";
import HomeDashboard from "./../components/dashboard/home/Home.jsx";
import CategoriesDashboard from "./../components/dashboard/categories/Categories.jsx";
import Regestor from "../components/web/regestor/Regestor.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path:'regestor',
                element:<Regestor/>
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'categories',
                element: <Categories />
            },
            {
                path: '*',
                element: <h2>page not found - web</h2>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'home',
                element: <HomeDashboard />
            },
            {
                path: 'categories',
                element: <CategoriesDashboard />
            },
            {
                path: '*',
                element: <h2>page not found-dashboard</h2>
            }

        ]
    }
]);