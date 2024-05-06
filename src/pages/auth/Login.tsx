import {
	Box,
	Button,
	Paper,
	TextField,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { theme } from "../../utils/theme";
import LoginResLayout from "./LoginResLayout";
import { useForm } from "react-hook-form";
import {
	LoginSchema,
	LoginSchemaType,
} from "../../utils/schema/auth/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const Login = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });
	const large = useMediaQuery("(min-width:760px)");

	const handleLogin = (data: LoginSchemaType) => {
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
						Login
					</Typography>

					<Box
						component="form"
						style={{
							width: "100%",

							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
						onSubmit={handleSubmit(handleLogin)}
					>
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
						<TextField
							label="Enter password"
							variant="outlined"
							fullWidth
							type="password"
							helperText={errors.password?.message ?? " "}
							{...register("password")}
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
					<Link to={"/registration"} style={{ textDecoration: "none" }}>
						Create an account?
					</Link>
				</Paper>
			</LoginResLayout>
		</>
	);
};

export default Login;
