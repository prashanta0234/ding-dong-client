import { Grid } from "@mui/material";
import HomeLayout from "./HomeLayout";
import { Suspense, lazy } from "react";
import ChatListSkeleton from "../../componets/home/skeleton/ChatListSkeleton";
import ChatSkeleton from "../../componets/home/skeleton/ChatSkeleton";
import FriendProfileSkeleton from "../../componets/home/skeleton/FriendProfileSkeleton";

const ChatList = lazy(() => import("../../componets/home/ChatList"));
const Chat = lazy(() => import("../../componets/home/Chat"));
const FriendProfile = lazy(() => import("../../componets/home/FriendProfile"));

const Home = () => {
	return (
		<>
			<HomeLayout>
				<Grid container sx={{ height: "100%" }}>
					<Grid item sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
						<Suspense fallback={<ChatListSkeleton />}>
							<ChatList />
						</Suspense>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Suspense fallback={<ChatSkeleton />}>
							<Chat />
						</Suspense>
					</Grid>
					<Grid item sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
						<Suspense fallback={<FriendProfileSkeleton />}>
							<FriendProfile />
						</Suspense>
					</Grid>
				</Grid>
			</HomeLayout>
		</>
	);
};

export default Home;
