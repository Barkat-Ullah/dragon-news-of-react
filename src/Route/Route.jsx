import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";

const router = createBrowserRouter([

    {
        path: "/",
        element:<Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
]);
export default router;