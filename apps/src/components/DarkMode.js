import React, { useState, useEffect } from "react";
import "../styles/DarkMode.css";
import "../styles/icons-font.css";

const DarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(
		window.matchMedia("(prefers-color-scheme: dark)").matches
	);

	const applyTheme = (dark) => {
		document
			.querySelector("body")
			.setAttribute("data-theme", dark ? "dark-theme" : "light-theme");
	};

	useEffect(() => {
		applyTheme(isDarkMode);
	}, [isDarkMode]);

	useEffect(() => {
		const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = (e) => setIsDarkMode(e.matches);
		darkThemeMq.addEventListener("change", handleChange);

		return () => {
			darkThemeMq.removeEventListener("change", handleChange);
		};
	}, []);

	const toggleTheme = (e) => {
		setIsDarkMode(e.target.checked);
	};

	return (
		<div className="dark_mode">
			<input
				className="dark_mode_input"
				type="checkbox"
				id="darkmode_toggle"
				checked={isDarkMode}
				onChange={toggleTheme}
			/>
			<label className="dark_mode_label" htmlFor="darkmode_toggle"></label>
			<div className="icon-icon_half-moon"></div>
		</div>
	);
};

export default DarkMode;
