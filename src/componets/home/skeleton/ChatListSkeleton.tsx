import { Box, Skeleton } from "@mui/material";
import React from "react";

const ChatListSkeleton = () => {
	const arr = [1, 2, 3, 4, 5, 6, 4, 5, 7];
	return (
		<Box sx={{ height: "100vh" }}>
			{arr.map((item, index) => (
				<Box
					key={index}
					sx={{ display: "flex", alignItems: "center", gap: "10px" }}
				>
					<Skeleton variant="circular" width={40} height={40} />
					<Skeleton animation="wave" sx={{ height: "50px", flexGrow: 1 }} />
				</Box>
			))}
		</Box>
	);
};

export default ChatListSkeleton;
