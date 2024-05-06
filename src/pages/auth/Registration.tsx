import {
	Box,
	Button,
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
