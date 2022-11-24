import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            // {
            //     path: '/appointment',
            //     element: <Appointment></Appointment>
            // }
        ]
    },
    {
        path: '/dashboard',
        // errorElement: <DisplayError></DisplayError>,
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        // children: [
        //     {
        //         path: '/dashboard',
        //         element: <MyAppointment></MyAppointment>
        //     },
        //     // {
        //     //     path: '/dashboard/allusers',
        //     //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        //     // },
        //     // {
        //     //     path: '/dashboard/adddoctor',
        //     //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
        //     // },
        //     // {
        //     //     path: '/dashboard/managedoctors',
        //     //     element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
        //     // },
        //     // {
        //     //     path: '/dashboard/payment/:id',
        //     //     element: <AdminRoute> <Payment></Payment> </AdminRoute>,
        //     //     loader: ({ params }) => fetch(`http://localhost:8000/bookings/${params.id}`)

        //     // },
        // ]
    }
])

export default router;