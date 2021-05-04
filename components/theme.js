import React, { useEffect } from "react";

const Theme = ( props ) => {
	const theme_map = {
		dark: 'light',
		light: 'solar',
		solar: 'dark'
	};

	var bodyClass;

	useEffect(() => {
		async function loadTheme() {

			//debugging stuff
			alert('hello side effect!');
			var isNode = typeof module !== 'undefined'

			const theme = localStorage.getItem('theme') ||
				(tmp = Object.keys(theme_map)[0], localStorage.setItem('theme', tmp), tmp);
			console.log("Does this exist?", window.document.body.classList);
			bodyClass = window.document.body.classList;
			bodyClass.add(theme);
		}

		loadTheme();
	}, [])

	const toggleTheme = () => {
		const current = window.localStorage.getItem('theme');
		const next = theme_map[current];

		// bodyClass.replace(current, next);
		// localStorage.setItem('theme', next);
	}

	return (
		<div onClick={toggleTheme()}>
			{props.children}
		</div>
	)
}

export default Theme;