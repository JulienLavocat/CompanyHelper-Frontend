import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles);
		}
	}, []);

	return <Component {...pageProps} />;
}
export default MyApp;
