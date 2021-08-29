import { Box } from "@material-ui/core";
import type { NextPage } from "next";
import React from "react";
import NavBar from "../components/commons/NavBar";
import AddJobsDialog from "../components/jobslist/AddJobsDialog";
import JobsDataGrid from "../components/jobslist/JobsDataGrid";

const JobsList: NextPage = () => {
	return (
		<>
			<NavBar />
			<Box
				padding={1}
				style={{ height: "calc(100% - 128px)", overflowY: "hidden" }}>
				{/* <AddJobsDialog /> */}
				<JobsDataGrid />
			</Box>
		</>
	);
};

export default JobsList;
