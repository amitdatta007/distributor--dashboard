import DashboardLayout from "@/layout/DashboardLayout";
import DashBoard from "@/pages/Dashboard/DashBoard";
import Login from "@/pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            {
                path: '/',
                element: <DashBoard />
            }
        ]
    }
]);

export default router;