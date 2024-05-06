import {
	Avatar,
	Box,
	Button,
	IconButton,
	MenuItem,
	Paper,
	TextField,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { theme } from "../../utils/theme";
import LoginResLayout from "./LoginResLayout";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
	RegistrationSchema,
	RegistrationSchemaType,
} from "../../utils/schema/auth/registrationSchema";
import { PhotoCamera } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";

const gender = [
	{
		value: "male",
		label: "Male",
	},
	{
		value: "female",
		label: "Female",
	},
];

const Registration = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegistrationSchemaType>({
		resolver: zodResolver(RegistrationSchema),
	});
	const large = useMediaQuery("(min-width:760px)");

	const handleLogin = (data: RegistrationSchemaType) => {
		console.log(data);
		reset();
	};

	const [avatarImage, setAvatarImage] = useState("default-avatar.jpg");

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function (e) {
				if (e.target?.result && typeof e.target.result === "string") {
					setAvatarImage(e.target.result);
				}
			};
			reader.readAsDataURL(file);
		}
	};
	console.log(avatarImage);

	return (
		<>
			<LoginResLayout>
				<Paper
					sx={
						large
							? {
									backgroundColor: "white",
									padding: "5vw",
									width: "40vw",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: "10px",
							  }
							: {
									backgroundColor: "white",
									padding: "6vw",
									width: "80vw",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: "10px",
							  }
					}
				>
					<Typography
						sx={
							large
								? {
										fontSize: "3vw",
										fontWeight: 700,
										color: theme.palette.primary.main,
								  }
								: {
										fontSize: "5vw",
										fontWeight: 700,
										color: theme.palette.primary.main,
								  }
						}
					>
						DING DONG CHAT !
					</Typography>
					<Typography
						sx={
							large
								? {
										fontSize: "2vw",
										fontWeight: 600,
								  }
								: {
										fontSize: "4vw",
										fontWeight: 600,
								  }
						}
					>
						Registration
					</Typography>

					<div
						style={{
							position: "relative",
							width: "150px",
							height: "150px",
							margin: "20px",
						}}
					>
						<Avatar
							src={avatarImage}
							sx={{
								width: "100%",
								height: "100%",
								borderRadius: "50%",
								overflow: "hidden",
							}}
						/>
						<IconButton
							style={{
								position: "absolute",
								bottom: "-6%",
								right: "-10%",
								backgroundColor: "#fff",
							}}
							component="label"
						>
							<PhotoCamera />
							<input
								type="file"
								accept="image/*"
								onChange={handleFileChange}
								style={{ display: "none" }}
								// {...register("image")}
							/>
						</IconButton>
					</div>

					<Box
						component="form"
						style={{
							width: "100%",

							// display: "flex",
							// flexDirection: "column",
							gap: "10px",
						}}
						onSubmit={handleSubmit(handleLogin)}
					>
						<div style={{ display: "flex", gap: "10px" }}>
							<TextField
								label="First name"
								variant="outlined"
								helperText={errors.firstName?.message ?? " "}
								FormHelperTextProps={{
									sx: {
										color: "red",
									},
								}}
								{...register("firstName")}
							/>
							<TextField
								label="Last name"
								variant="outlined"
								helperText={errors.lastName?.message ?? " "}
								{...register("lastName")}
							/>
						</div>
						<TextField
							label="Enter Email"
							variant="outlined"
							fullWidth
							helperText={errors.email?.message ?? " "}
							FormHelperTextProps={{
								sx: {
									color: "red",
								},
							}}
							{...register("email")}
						/>
						<div style={{ display: "flex", gap: "10px" }}>
							<TextField
								label="Phone number"
								variant="outlined"
								type="number"
								helperText={errors.phone?.message ?? " "}
								FormHelperTextProps={{
									sx: {
										color: "red",
									},
								}}
								{...register("phone")}
							/>
							<TextField
								label="Gender"
								variant="outlined"
								helperText={errors.gender?.message ?? " "}
								select
								sx={{ flex: 1 }}
								{...register("gender")}
							>
								{gender.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</div>
						<TextField
							label="Enter password"
							variant="outlined"
							fullWidth
							type="password"
							helperText={errors.password?.message ?? " "}
							{...register("password")}
							error={!!errors.password}
						/>
						<TextField
							label="Confirm password"
							variant="outlined"
							fullWidth
							type="password"
							{...register("passwordConfirm")}
							helperText={errors.passwordConfirm?.message ?? " "}
						/>
						<Button
							fullWidth
							variant="contained"
							sx={{
								padding: "10px 20px",
								color: "white",
							}}
							type="submit"
						>
							<Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
								Login
							</Typography>
						</Button>
					</Box>

					<Typography>Or</Typography>
					<Link to={"/login"} style={{ textDecoration: "none" }}>
						Already have an account?
					</Link>
				</Paper>
			</LoginResLayout>
		</>
	);
};

export default Registration;
