import {
	Container,
	IconButton,
	Tooltip,
	Typography,
	Box,
	Badge,
	Drawer,
} from "@mui/material";

import {
	Group as GroupIcon,
	GroupAdd as GroupAddIcon,
	Search as SearchIcon,
	AccountCircle as AccountCircleIcon,
	Menu as MenuIcon,
	Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { theme } from "../../utils/theme";
import { Suspense, useState } from "react";
import SharedDialog from "../shared/SharedDialog";
import CustomizedSearch from "./modal/CustomizedSearch";
import SearchField from "./modal/SearchFeild";
import GroupSearch from "./modal/GroupSearch";
import Notifications from "./modal/Notifications";
import CustomDropDown from "../shared/CustomDropDown";
import ChatListSkeleton from "./skeleton/ChatListSkeleton";
import ChatList from "./ChatList";

const Header = () => {
	const [open, setOpen] = useState<
		"search" | "createGroup" | "groups" | "notification" | undefined
	>();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const [openDrawer, setOpenDrawer] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpenDrawer(newOpen);
	};
	const openMenu = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

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
						onClick={toggleDrawer(true)}
						sx={{
							color: "white",
							display: { sm: "none", xs: "block", p: 0 },
						}}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ gap: { xs: "1vw", sm: "2vw" }, display: "flex" }}>
						<Tooltip title="Search">
							<IconButton onClick={() => setOpen("search")}>
								<SearchIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Create Group">
							<IconButton onClick={() => setOpen("createGroup")}>
								<GroupAddIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Groups">
							<IconButton onClick={() => setOpen("groups")}>
								<GroupIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Notification">
							<IconButton onClick={() => setOpen("notification")}>
								<Badge badgeContent={4} color="warning">
									<NotificationsIcon />
								</Badge>
							</IconButton>
						</Tooltip>
						<Tooltip title="Profile">
							<IconButton
								id="basic-button"
								aria-controls={openMenu ? "basic-menu" : undefined}
								aria-haspopup="true"
								aria-expanded={openMenu ? "true" : undefined}
								onClick={handleClick}
							>
								<AccountCircleIcon />
							</IconButton>
						</Tooltip>
					</Box>
				</Container>
				<SharedDialog
					handleClose={() => setOpen(undefined)}
					open={open === "search"}
					title="Search Member"
				>
					{/* <CustomizedSearch /> */}
					<SearchField />
				</SharedDialog>
				<SharedDialog
					handleClose={() => setOpen(undefined)}
					open={open === "createGroup"}
					title="Search Member"
				>
					<CustomizedSearch />
					{/* <SearchField /> */}
				</SharedDialog>
				<SharedDialog
					handleClose={() => setOpen(undefined)}
					open={open === "groups"}
					title="Your groups"
				>
					<GroupSearch />
					{/* <SearchField /> */}
				</SharedDialog>
				<SharedDialog
					handleClose={() => setOpen(undefined)}
					open={open === "notification"}
					title="Notifications"
				>
					<Notifications />
				</SharedDialog>

				<CustomDropDown
					anchorEl={anchorEl}
					open={openMenu}
					handleClose={handleClose}
					button1Title="Profile"
					button2Title="LogOut"
				/>
				<Drawer
					open={openDrawer}
					onClose={toggleDrawer(false)}
					sx={{
						display: { xs: "block", sm: "none" },
					}}
				>
					<Typography
						sx={{
							color: theme.palette.primary.main,
							fontWeight: 800,
							fontSize: "22px",
							display: { xs: "block", sm: "none" },
							padding: "10px",
						}}
					>
						Ding Dong
					</Typography>
					<Suspense fallback={<ChatListSkeleton />}>
						<ChatList />
					</Suspense>
				</Drawer>
			</Box>
		</>
	);
};

export default Header;
