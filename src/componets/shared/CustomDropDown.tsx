import { Menu, MenuItem } from "@mui/material";

interface DropDownProps {
	open: boolean;
	handleClose: () => void;
	button1Title?: string;
	button2Title?: string;
	handleButton1?: () => void;
	handleButton2?: () => void;
	anchorEl: HTMLElement | null;
}

const CustomDropDown = ({
	open,
	handleClose,
	button1Title,
	button2Title,
	handleButton1,
	handleButton2,
	anchorEl,
}: DropDownProps) => {
	return (
		<>
			<div>
				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					MenuListProps={{
						"aria-labelledby": "basic-button",
					}}
					open={open}
					onClose={handleClose}
				>
					{button1Title && (
						<MenuItem onClick={handleClose}>{button1Title}</MenuItem>
					)}
					{button2Title && (
						<MenuItem onClick={handleClose}>{button2Title}</MenuItem>
					)}
				</Menu>
			</div>
		</>
	);
};

export default CustomDropDown;
