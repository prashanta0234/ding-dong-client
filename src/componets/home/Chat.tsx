import InputBox from "../chat/InputBox";
import {
	Avatar,
	Box,
	Container,
	Grid,
	IconButton,
	Tooltip,
	Typography,
} from "@mui/material";
import { theme } from "../../utils/theme";
import {
	Call as CallIcon,
	Duo as DuoIcon,
	MoreVert,
} from "@mui/icons-material";
import Chats from "../chat/Chats";

const Chat = () => {
	return (
		<Grid container sx={{ height: "100%" }} direction="column">
			<Grid
				xs={1}
				item
				sx={{
					width: "100%",
					backgroundColor: "#545454",
					height: "54px",
					padding: "10px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
					<Avatar />
					<Box>
						<Typography sx={{ color: "white" }}>Mr. Kuddus</Typography>
						<Typography
							sx={{ fontSize: "12px", color: theme.palette.primary.main }}
						>
							Active
						</Typography>
					</Box>
				</Box>
				<Box sx={{ display: "flex", gap: "2vw", alignItems: "center" }}>
					<Tooltip title="Audio Call">
						<IconButton sx={{ color: "white", height: "20px", width: "20px" }}>
							<CallIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Video Call">
						<IconButton sx={{ color: "white", height: "20px", width: "20px" }}>
							<DuoIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="More Options">
						<IconButton>
							<MoreVert
								sx={{ color: "white", height: "20px", width: "20px" }}
							/>
						</IconButton>
					</Tooltip>
				</Box>
			</Grid>
			<Grid item sx={{ overflow: "auto" }} xs={9}>
				<Chats />
			</Grid>

			<Grid item sx={{ width: "100%" }} xs={1}>
				<Container>
					<InputBox />
				</Container>
			</Grid>
		</Grid>
	);
};

export default Chat;
