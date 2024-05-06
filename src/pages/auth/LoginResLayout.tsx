import React, { ReactNode } from "react";
import { theme } from "../../utils/theme";
import { Box } from "@mui/material";

const LoginResLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Box
				sx={{
					backgroundColor: theme.palette.secondary.main,
					minHeight: "100vh",
					margin: 0,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{children}
			</Box>
		</>
	);
};

export default LoginResLayout;
