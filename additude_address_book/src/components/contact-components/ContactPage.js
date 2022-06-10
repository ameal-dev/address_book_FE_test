import React from "react";
import Information from "./Information";

function ContactPage({ contact, setShowList }) {
	return (
		<div
			className='wrapper'
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<div
				className='page-wrapper'
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					width: "350px",
					height: "480px",
					backgroundColor: "#1e293b",
					color: "#c1c4ca",
					borderRadius: "10px",
					position: "relative",
				}}
			>
				<div
					className='close-button'
					style={{
						position: "absolute",
						color: "white",
						fontSize: "2rem",
						right: "15px",
						top: "10px",
						cursor: "pointer",
					}}
					onClick={() => setShowList(true)}
				>
					<img src='./icons/Close-24.png' alt='close' />
				</div>
				<div className='img-wrapper' style={{ marginTop: "40px" }}>
					<img
						src={contact.picture.large}
						alt='profile'
						style={{ borderRadius: "50%" }}
					/>
				</div>
				<div
					className='information-wrapper'
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Information
						fontSize={"2rem"}
						marginTop={"20px"}
						title={"name"}
						color={"white"}
					>
						{contact.name.first} {contact.name.last}
					</Information>
					<Information
						title={"email"}
						display={"flex"}
						justifyContent={"center"}
					>
						{contact.email}
					</Information>
					<Information
						title={"phone"}
						display={"flex"}
						justifyContent={"center"}
					>
						{contact.phone}
					</Information>
					{/* assume that the "location" property is a reference to the persons place to work, 
					as I can't see any value in providing employyes home adress to other colleagues (without proper clearance)*/}
					<Information
						display={"flex"}
						title={"Place of work"}
						justifyContent={"center"}
						marginTop={"20px"}
						textDecoration={"underline"}
					>
						Place Of Work
					</Information>
					<Information
						title={"country"}
						display={"flex"}
						justifyContent={"center"}
					>
						{contact.location.country}
					</Information>
					<Information
						title={"state"}
						display={"flex"}
						justifyContent={"center"}
					>
						{contact.location.state}
					</Information>
					<Information
						title={"city"}
						display={"flex"}
						justifyContent={"center"}
					>
						{contact.location.city}
					</Information>
					<Information
						title={"city"}
						display={"flex"}
						justifyContent={"center"}
					>
						{contact.location.street.name} {contact.location.street.number}
					</Information>
				</div>
			</div>
		</div>
	);
}

export default ContactPage;
