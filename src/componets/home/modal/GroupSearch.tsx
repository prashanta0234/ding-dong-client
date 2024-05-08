import { Logout } from "@mui/icons-material";
import {
	Avatar,
	Box,
	IconButton,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../../utils/theme";
interface Group {
	name: string;
	id: string;
	member: number;
}

const groups: Group[] = [
	{
		id: "1",
		name: "Bross",
		member: 4,
	},
	{
		id: "2",
		name: "Foler upor osud nai",
		member: 5,
	},
	{
		id: "3",
		name: "Programmer",
		member: 4,
	},
	{
		id: "4",
		name: "Bross",
		member: 4,
	},
	{
		id: "5",
		name: "Bross",
		member: 4,
	},
];

const GroupSearch = () => {
	const [searchGroup, setSearchGroup] = useState<string | undefined>();
	return (
		<>
			<TextField fullWidth onChange={(e) => setSearchGroup(e.target.value)} />
			<Stack
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1,
					mt: 2,
					overflow: "auto",
					height: "60%",
				}}
			>
				{groups.map((user: Group, index) => (
					<Paper
						key={index}
						sx={{
							width: "100%",
							padding: "10px",
							bgcolor: theme.palette.primary.main,
						}}
					>
						<Box
							sx={{
								color: "white",
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Box
								sx={{
									color: "white",
									display: "flex",
									alignItems: "center",
									gap: 1,
								}}
							>
								<Avatar />
								<Box>
									<Typography
										sx={{
											fontSize: { xs: "16px", sm: "16px" },
											fontWeight: 700,
											height: "18px",
											width: "18vw",
											padding: 0,
											overflow: "hidden",
											position: "relative",
											display: "inline-block",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap",
										}}
									>
										{user.name}
									</Typography>
									<Typography sx={{ fontSize: "12px" }}>
										Mem: {user.member}
									</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton sx={{ color: "white" }}>
									<Logout />
								</IconButton>
							</Box>
						</Box>
					</Paper>
				))}
			</Stack>
		</>
	);
};

export default GroupSearch;
