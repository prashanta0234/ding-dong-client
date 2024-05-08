import * as React from "react";
// import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

interface ShareDialogProps {
	title: string;
	handleClose: () => void;
	open: boolean;
	children?: React.ReactNode;
}

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
// 	"& .MuiDialogContent-root": {
// 		padding: theme.spacing(2),
// 	},
// 	"& .MuiDialogActions-root": {
// 		padding: theme.spacing(1),
// 	},
// }));

const SharedDialog = ({
	title,
	handleClose,
	open,
	children,
}: ShareDialogProps) => {
	return (
		<>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				// sx={{ width: "20vw" }}
			>
				<Box sx={{ width: { sm: "30vw", xs: "70vw" } }}>
					<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
						{title}
					</DialogTitle>
					<IconButton
						aria-label="close"
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				</Box>
				<DialogContent
					dividers
					sx={{ height: "40vh", overflow: "auto", overflowX: "hidden" }}
				>
					{children}
				</DialogContent>
				{/* <DialogActions>
					<Button autoFocus onClick={handleClose}>
						Save changes
					</Button>
				</DialogActions> */}
			</Dialog>
		</>
	);
};

export default SharedDialog;
