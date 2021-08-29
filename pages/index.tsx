import { Link } from "@material-ui/core";
import type { NextPage } from "next";
import React from "react";
import NavBar from "../components/commons/NavBar";

const Home: NextPage = () => {
	return (
		<>
			<NavBar></NavBar>
			<Link href="/jobslist">Jobs listings</Link>
		</>
	);
};

export default Home;
