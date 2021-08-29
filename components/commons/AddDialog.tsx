import { createStyles, Dialog, makeStyles, Slide } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import React from "react";

const Transition = React.forwardRef(function Transition(
	props: any & { children?: React.ReactElement<any, any> },
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const AddDialog: React.FC<{
	show: boolean;
	onClose: () => void;
}> = ({ show, onClose, children }) => {
	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			open={show}
			TransitionComponent={Transition as any}
			onClose={onClose}>
			{children}
		</Dialog>
	);
};

export default AddDialog;
