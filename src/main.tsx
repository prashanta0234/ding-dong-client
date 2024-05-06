import React from "react";
import ReactDOM from "react-dom/client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import routes from "./utils/routes.tsx";
import { theme } from "./utils/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HelmetProvider>
			<ThemeProvider theme={theme}>
				<RouterProvider router={routes} />
				<CssBaseline />
			</ThemeProvider>
		</HelmetProvider>
	</React.StrictMode>
);
