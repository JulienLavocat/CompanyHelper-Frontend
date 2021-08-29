import { DataGrid, GridColDef, GridRowsProp } from "@material-ui/data-grid";
import React from "react";
import { ProgressBar } from "./components/ProgressBar";

const rows: GridRowsProp = [
	{ id: 1, requestedItem: "Hello", requestedAmount: "World", ownerName: "" },
	{
		id: 2,
		requestedItem: "XGrid",
		requestedAmount: "is Awesome",
		ownerName: "",
	},
	{
		id: 3,
		requestedItem: "Material-UI",
		requestedAmount: "is Amazing",
		ownerName: "",
	},
];
const columns: GridColDef[] = [
	{ field: "requestedItem", headerName: "Item", width: 200 },
	{ field: "requestedAmount", headerName: "Amount", width: 200 },
	{
		field: "filled",
		headerName: "Filled",
		// eslint-disable-next-line react/display-name
		renderCell: (params) => (
			<ProgressBar value={Number(params.value || 0.05)!} />
		),
	},
	{ field: "ownerName", headerName: "Owner", width: 200 },
];
export default function JobsDataGrid() {
	return (
		<div style={{ display: "flex", height: "100%" }}>
			<div style={{ flexGrow: 1 }}>
				<DataGrid rows={rows} columns={columns} autoHeight />
			</div>
		</div>
	);
}
