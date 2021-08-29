import {
	createTheme,
	CssBaseline,
	ServerStyleSheets,
	ThemeProvider,
} from "@material-ui/core";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const theme = createTheme();

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
					/>
					{/* <script async src="/test.js"></script> */}
				</Head>
				<body>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Main />
						<NextScript />
					</ThemeProvider>
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	};
};

export default MyDocument;
