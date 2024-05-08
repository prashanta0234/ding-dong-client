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
import { Add, Remove } from "@mui/icons-material";

interface User {
	id: string;
	name: string;
}

const users: User[] = [
	{
		id: "1",
		name: "Abir",
	},
	{
		id: "2",
		name: "kabir",
	},
	{
		id: "3",
		name: "Sabir",
	},
	{
		id: "4",
		name: "Prabir",
	},
	{
		id: "5",
		name: "Nabir",
	},
	{
		id: "6",
		name: "Labir",
	},
	{
		id: "7",
		name: "Mabir",
	},
];

const SearchField = () => {
	const [searchFriend, setSearchFriend] = useState<string | undefined>();

	return (
		<>
			<TextField fullWidth onChange={(e) => setSearchFriend(e.target.value)} />
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
				{users.map((user: User, index) => (
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
							<Avatar />
							<Typography>{user.name}</Typography>
							<Box>
								<IconButton sx={{ color: "white" }}>
									<Add />
								</IconButton>
								<IconButton sx={{ color: "white" }}>
									<Remove />
								</IconButton>
							</Box>
						</Box>
					</Paper>
				))}
			</Stack>
		</>
	);
};

export default SearchField;
