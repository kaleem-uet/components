import { useRoutes } from "react-router-dom";
import SignIn from "../pages/SIgnIn";
import Dashboard from "../Dashboard";
import AdminLayout from "../layouts/adminLayout";
import Home from "../pages/Home";

function CustomRouts() {
  const router = useRoutes([
    { path: "/", element: <SignIn /> },
    {
      path: "/dashboard",
      element: <AdminLayout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "order", element: <Dashboard /> },
      ],
    },
  ]);
  return router;
}

export default CustomRouts;
