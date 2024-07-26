// Весь код ниже в декларативном стиле, императивного стиля я не вижу

import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

function App() {
	return createElement(
		"div",
		{ className: "App" },
		createElement(
			"header",
			{ className: "App-header" },
			createElement("img", {
				src: logo,
				className: "App-logo",
				alt: "logo",
			}),
			createElement("p", null, "Edit src/App.js and save to reload."),
			createElement(
				"a",
				{
					className: "App-link",
					href: "https://reactjs.org",
					target: "_blank",
					rel: "noopener noreferrer",
				},
				"Learn React"
			),
			createElement("p", null, `This year ${new Date().getFullYear()}`)
		)
	);
	// return (
	// 	<div className="App">
	// 		<header className="App-header">
	// 			<img src={logo} className="App-logo" alt="logo" />
	// 			<p>
	// 				Edit <code>src/App.js</code> and save to reload.
	// 			</p>
	// 			<a
	// 				className="App-link"
	// 				href="https://reactjs.org"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				Learn React
	// 			</a>
	// 			<p>This year {new Date().getFullYear()}</p>
	// 		</header>
	// 	</div>
	// );
}

export default App;
