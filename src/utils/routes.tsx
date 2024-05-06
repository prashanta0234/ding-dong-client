import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Use typeof to refer to the type of App
export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

export default routes;
