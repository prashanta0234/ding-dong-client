import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#07D127",
		},
		secondary: {
			main: "rgba(78, 237, 122, 0.4)",
		},
	},
	components: {
		// MuiButton: {
		// 	styleOverrides: {
		// 		root: {
		// 			":hover": {
		// 				backgroundColor: "#07D127", // Keeps the same background color on hover
		// 			},
		// 		},
		// 	},
		// },
	},
});
