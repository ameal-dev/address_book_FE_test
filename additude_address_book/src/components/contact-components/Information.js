import React from "react";

function Information({
	children,
	marginTop,
	display,
	fontSize,
	justifyContent,
	color,
	alt,
	title,
	textDecoration,
}) {
	return (
		<div
			style={{
				color: color || "#c1c4ca",
				marginTop: marginTop || "8px",
				display: display || "block",
				fontSize: fontSize || "1rem",
				justifyContent: justifyContent || "flex-start",
				textDecoration: textDecoration || "none",
			}}
			alt={`${alt}` || ""}
			title={`${title}` || ""}
		>
			{children}
		</div>
	);
}

export default Information;
