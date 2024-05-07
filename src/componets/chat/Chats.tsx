import { theme } from "../../utils/theme";
import { Box, Paper, Typography } from "@mui/material";

const messages = [
	{ text: "Hey, how's it going?", from: "friend" },
	{ text: "I'm good, thanks!", from: "user" },
	{ text: "What about you?", from: "friend" },
	{ text: "I'm doing great too!", from: "user" },
	{ text: "I'm doing great too!", from: "user" },
	{ text: "I'm doing great too!", from: "friend" },
	{ text: "Hey, how's it going?", from: "friend" },
	{ text: "I'm good, thanks!", from: "user" },
	{ text: "What about you?", from: "friend" },
];

const Chats = () => {
	return (
		<>
			{messages.map((message, index) => (
				<>
					{message.from === "friend" ? (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								paddingX: theme.spacing(2),
								my: 1,
								width: "100%",
							}}
						>
							<Paper
								elevation={3}
								sx={{
									backgroundColor: "#007bff",
									color: "#fff",
									padding: theme.spacing(1),
									borderRadius: "10px 10px 10px 0",
								}}
							>
								<Typography>{message.text}</Typography>
							</Paper>
						</Box>
					) : (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								paddingX: theme.spacing(2),
								my: 1,
								width: "100%",
							}}
						>
							<Paper
								elevation={3}
								sx={{
									backgroundColor: "#f0f0f0",
									padding: theme.spacing(1),
									borderRadius: "10px 10px 0 10px",
								}}
							>
								<Typography>{message.text}</Typography>
							</Paper>
						</Box>
					)}
				</>
			))}
		</>
	);
};

export default Chats;
