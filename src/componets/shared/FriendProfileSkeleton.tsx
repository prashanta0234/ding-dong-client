import React from "react";

import { Box, Skeleton } from "@mui/material";

const FriendProfileSkeleton = () => {
	const arr = [1, 2, 3, 4, 5, 6, 4];
	return (
		<Box
			sx={{
				height: "90vh",
				display: "flex",
				flexDirection: "column",
				marginTop: "20px",
				alignItems: "center",
			}}
		>
			<Skeleton variant="circular" width={80} height={80} />
			{arr.map((item, index) => (
				<Box key={index} sx={{ width: "100%" }}>
					<Skeleton animation="wave" sx={{ height: "50px", flexGrow: 1 }} />
				</Box>
			))}
		</Box>
	);
};

export default FriendProfileSkeleton;
