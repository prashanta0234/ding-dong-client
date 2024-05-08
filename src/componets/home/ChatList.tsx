import { Stack } from "@mui/material";
import React, { useState } from "react";
import ChatItem from "./ChatItem";
import { theme } from "../../utils/theme";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const ChatList = () => {
	const [isActive, setIsActive] = useState<number>(0);
	console.log(isActive);

	return (
		<>
			<Stack
				sx={{
					padding: "10px",
					height: "92vh",
					overflowX: "hidden",
					bgcolor: theme.palette.secondary.main,
				}}
				overflow={"scroll"}
			>
				{arr.map((item, index) => (
					<ChatItem
						key={index}
						isActive={isActive}
						handleActive={() =>
							setIsActive((prev) => (prev === item ? 0 : item))
						}
						id={item}
					/>
				))}
				{/* <ChatItem /> */}
			</Stack>
		</>
	);
};

export default ChatList;
