import { makeStyles, Tooltip, Typography, Theme } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles<Theme, { width: number; height: number }>(
	(theme) => ({
		button: {
			margin: theme.spacing(1),
		},
		customWidth: (props) => ({
			width: props.width,
			height: props.height,
		}),
		noMaxWidth: {
			maxWidth: "none",
		},
	})
);

const NWDBTooltip: React.FC<{
	itemId: string;
	children: React.ReactElement<any, any>;
}> = ({ itemId, children }) => {
	const [opacity, setOpacity] = useState(0);
	const [width, setWidth] = useState(500);
	const [height, setHeight] = useState(416);
	const classes = useStyles({ width, height });

	const handleMessage = (e: MessageEvent<any>) => {
		if (e.data.type !== "nwdb-embed-resize") return;

		setOpacity(1);
		setWidth(e.data.width);
		setHeight(e.data.height);
	};

	useEffect(() => {
		window.addEventListener("message", handleMessage);
		return () => {
			window.removeEventListener("message", handleMessage);
		};
	}, []);

	return (
		<Tooltip
			classes={{ tooltip: classes.customWidth }}
			interactive
			title={
				<iframe
					sandbox="allow-scripts allow-popups allow-same-origin"
					style={{
						opacity,
						position: "fixed",
						height: height + "px",
						width: width + "px",
						zIndex: 9e4,
						pointerEvents: "none",
						transform: "scale(" + 0.85 + ")",
						transformOrigin: "top left",
						// marginLeft: "15px",
						boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.75)",
						border: "none",
					}}
					src={`https://nwdb.info/db/item/${itemId}?embed=true`}
				/>
				// <p>Iframe should go ehere</p>
			}>
			{children}
		</Tooltip>
	);
};

export default NWDBTooltip;
