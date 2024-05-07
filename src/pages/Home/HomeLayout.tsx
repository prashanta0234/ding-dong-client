import { Box } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "../../utils/theme";
import Header from "../../componets/home/Header";

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Box
				sx={{
					backgroundColor: theme.palette.secondary.main,
					maxHeight: "100vh",
					margin: 0,
				}}
			>
				<Header />
				{children}
			</Box>
		</>
	);
};

export default HomeLayout;
