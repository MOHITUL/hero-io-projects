import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";

import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/apps',
                element: <Apps />,
            },
            {
                path: '/installation',
                element: <Installation />,
            },
        ],
    },
    

])

export default router