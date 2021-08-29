import { TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import debounce from "lodash.debounce";
import React, { useEffect, useState } from "react";
import { API } from "../../api";
import NWDBTooltip from "../commons/NWDBTooltip";

const debouncedSearch = debounce(
	async (query: string, cb: (res: any) => void) => {
		const res = await API.searchItemsByName(query);
		cb(res);
	},
	500
);

export default function ItemsAutoComplete() {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState<any[]>([]);

	const onQueryUpdated = (value: string | null) => {
		if (!value) return;
		setQuery(value);
	};

	useEffect(() => {
		if (!query) return;

		debouncedSearch(query, (res) => {
			if (!Array.isArray(res)) return;

			(res as any[]).sort((a, b) => a.score - b.score);
			setResults(res.map((e) => e.data));
		});

		return () => {};
	}, [query]);

	return (
		<Autocomplete
			freeSolo
			options={results}
			renderInput={(params) => (
				<TextField
					{...params}
					label="Search input"
					margin="normal"
					variant="outlined"
					value={query}
					InputProps={{ ...params.InputProps, type: "search" }}
				/>
			)}
			getOptionLabel={(option) => option.name}
			renderOption={(option) => (
				<NWDBTooltip itemId={option.id}>
					<Typography>{option.name}</Typography>
				</NWDBTooltip>
			)}
			onInputChange={(_, value) => onQueryUpdated(value)}
			autoComplete={false}
		/>
	);
}
