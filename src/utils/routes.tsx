import { createBrowserRouter } from "react-router-dom";

import { lazy } from "react";

const Login = lazy(() => import("../pages/auth/Login"));
const Registration = lazy(() => import("../pages/auth/Registration"));
const Home = lazy(() => import("../pages/Home/Home"));

// Use typeof to refer to the type of App
export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/registration",
		element: <Registration />,
	},
]);

export default routes;
