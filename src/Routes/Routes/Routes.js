import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import CategoryProduct from "../../Pages/CatergoryProduct/CategoryProduct";
import AddProduct from "../../Pages/Dashboard/AddProducts/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Blogs from "../../Pages/Shared/Blogs/Blogs";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/categories/:id',
                element: <CategoryProduct></CategoryProduct>,
                loader: ({ params }) => fetch(`http://localhost:8000/categories/${params.id}`)
                ,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ],
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProducts',
                element: <AddProduct></AddProduct>,

            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>,

            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>,

            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportedItems></ReportedItems>,

            },
            {
                path: '/dashboard/myProduct',
                element: <MyProducts></MyProducts>,
                loader: () => fetch('http://localhost:8000/products'),
            },

        ]
    }
])

export default router;