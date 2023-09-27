import { createBrowserRouter } from "react-router-dom";
import Form from "../pages/form";
import CSV from "../pages/csv";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Form/>
    },
    {
        path: "/csv",
        element: <CSV/>
    }
])

export default router;