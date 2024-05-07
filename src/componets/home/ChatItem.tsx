import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../utils/theme";
import { MoreVert } from "@mui/icons-material";

const ChatItem = ({
	isActive,
	handleActive,
	id,
}: {
	isActive: number;
	handleActive: () => void;
	id: number;
}) => {
	const [activate, setActivate] = useState(false);
	useEffect(() => {
		setActivate(isActive === id);
	}, [isActive, id]);
	console.log(activate);
	return (
		<>
			<Box
				onClick={handleActive}
				sx={{
					width: "100%",
					height: "60px",
					borderRadius: "5px",
					// backgroundColor: "#3d3c3c",
					// color: "white",
					"&:hover": {
						backgroundColor: theme.palette.primary.main,
						color: "white",
					},
					cursor: "pointer",
					padding: "8px",
					display: "flex",
					justifyContent: "space-between",
					backgroundColor: activate
						? theme.palette.primary.main
						: "transparent",
				}}
			>
				<Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
					<Avatar />
					<Box>
						<Typography>Mr. Kuddus</Typography>
						<Typography sx={{ fontSize: "12px", color: "#424242" }}>
							Hi man
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<IconButton>
						<MoreVert sx={{ height: "15px", width: "15px" }} />
					</IconButton>
					<Box
						sx={{
							width: "8px",
							height: "8px",
							backgroundColor: "blue",
							borderRadius: "8px",
						}}
					/>
				</Box>
			</Box>
		</>
	);
};

export default ChatItem;
