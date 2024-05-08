import { Avatar, Box, Typography } from "@mui/material";
import { theme } from "../../utils/theme";

const FriendProfile = () => {
	return (
		<>
			<Box
				sx={{
					height: "100%",
					display: "flex",

					alignItems: "center",
					flexDirection: "column",
					py: 2,
					gap: "10px",
					bgcolor: theme.palette.secondary.main,
				}}
			>
				<Avatar sx={{ width: "150px", height: "150px" }} />
				<Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
					MR. Kuddus
				</Typography>
				<Typography sx={{ color: "#5c5a5a" }}>kuddus0234@gmail.com</Typography>
				<Typography sx={{ color: "#5c5a5a" }}>01754540234</Typography>
			</Box>
		</>
	);
};

export default FriendProfile;
