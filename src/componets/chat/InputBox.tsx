import { AddCircle as AddIcon, Send as SendIcon } from "@mui/icons-material";
import {
	Box,
	FormControl,
	IconButton,
	InputAdornment,
	OutlinedInput,
	Tooltip,
} from "@mui/material";
import React from "react";
import { theme } from "../../utils/theme";

const InputBox = () => {
	return (
		<>
			<Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
				<Tooltip title="Send file">
					<IconButton
						sx={{
							color: theme.palette.primary.main,
							width: "20px",
							height: "20px",
						}}
					>
						<AddIcon />
					</IconButton>
				</Tooltip>
				<FormControl fullWidth sx={{ m: 1 }} variant="outlined">
					<OutlinedInput
						id="outlined-adornment-password"
						type="text"
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									edge="end"
									sx={{ color: theme.palette.primary.main }}
								>
									<SendIcon />
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
			</Box>
		</>
	);
};

export default InputBox;
