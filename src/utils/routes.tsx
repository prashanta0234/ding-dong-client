import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { lazy } from "react";

const Login = lazy(() => import("../pages/auth/Login"));
const Registration = lazy(() => import("../pages/auth/Registration"));

// Use typeof to refer to the type of App
export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
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
