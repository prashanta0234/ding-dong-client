import React from "react";
import ReactDOM from "react-dom/client";

import { CssBaseline } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import routes from "./utils/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HelmetProvider>
			<RouterProvider router={routes} />
			<CssBaseline />
		</HelmetProvider>
	</React.StrictMode>
);
