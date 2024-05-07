import {
	Container,
	IconButton,
	Tooltip,
	Typography,
	Box,
	Badge,
} from "@mui/material";
import {
	Group as GroupIcon,
	GroupAdd as GroupAddIcon,
	Search as SearchIcon,
	AccountCircle as AccountCircleIcon,
	Menu as MenuIcon,
	Notifications,
} from "@mui/icons-material";
import { theme } from "../../utils/theme";

const Header = () => {
	return (
		<>
			<Box
				sx={{
					width: "100%",
					backgroundColor: theme.palette.primary.main,
					minHeight: "8vh",
					display: "flex",
					alignItems: "center",
				}}
			>
				<Container sx={{ display: "flex", justifyContent: "space-between" }}>
					<Typography
						sx={{
							color: "white",
							fontWeight: 800,
							fontSize: "22px",
							display: { sm: "block", xs: "none" },
						}}
					>
						Ding Dong
					</Typography>

					<IconButton
						sx={{
							color: "white",
							display: { sm: "none", xs: "block", p: 0 },
						}}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ gap: "20px", display: "flex" }}>
						<Tooltip title="Search">
							<IconButton>
								<SearchIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Create Group">
							<IconButton>
								<GroupAddIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Groups">
							<IconButton>
								<GroupIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Notification">
							<IconButton>
								<Badge badgeContent={4} color="warning">
									<Notifications />
								</Badge>
							</IconButton>
						</Tooltip>
						<Tooltip title="Profile">
							<IconButton>
								<AccountCircleIcon />
							</IconButton>
						</Tooltip>
					</Box>
				</Container>
			</Box>
		</>
	);
};

export default Header;
