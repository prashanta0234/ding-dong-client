import { Skeleton } from "@mui/material";

import { theme } from "../../utils/theme";

const messages = [
	{ text: "Hey, how's it going?", from: "friend" },
	{ text: "I'm good, thanks!", from: "user" },
	{ text: "What about you?", from: "friend" },
	{ text: "I'm doing great too!", from: "user" },
];

const ChatSkeleton = () => {
	// const classes = useStyles();

	return (
		<div>
			{messages.map((message, index) => (
				<>
					{message.from === "friend" ? (
						<div
							key={index}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								padding: theme.spacing(2),
								marginBottom: theme.spacing(1),
								width: "100%",
							}}
						>
							<Skeleton variant="rounded" width={210} height={60} />
						</div>
					) : (
						<div
							key={index}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-end",
								padding: theme.spacing(2),
								marginBottom: theme.spacing(1),
								width: "100%",
							}}
						>
							<Skeleton variant="rounded" width={210} height={60} />
						</div>
					)}
				</>
			))}
		</div>
	);
};

export default ChatSkeleton;
