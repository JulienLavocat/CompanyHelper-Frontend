import { TextField } from "@material-ui/core";
import React from "react";

export default function AddJobsDialog() {
	return (
		<TextField
			// {...params}
			label="Search input"
			margin="normal"
			variant="outlined"
			// value={query}
			InputProps={{ type: "search" }}
		/>
	);
}
