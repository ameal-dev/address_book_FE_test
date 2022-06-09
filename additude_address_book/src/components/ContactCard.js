import React from "react";

function ContactCard({
	firstName,
	lastName,
	picture,
	email,
	phone,
	setContact,
	contact,
	setShowList,
}) {
	const mb = "10px";
	const mt = "10px";

	return (
		<li>
			<div
				className='wrapper'
				style={{
					width: "60%",
					minWidth: "350px",
					maxWidth: "500px",
					margin: "0 auto",
					marginBottom: mb,
					borderRadius: "10px",
					boxShadow: "10px 10px 5px -6px rgba(0,0,0,0.08)",
				}}
				onClick={() => {
					setContact(contact);
					setShowList(false);
				}}
			>
				<div
					className='contact-item'
					style={{
						display: "flex",
						height: "120px",
						borderRadius: "10px",
						backgroundColor: "#1e293b",
						cursor: "pointer",
					}}
				>
					<div
						className='imgWrapper'
						style={{
							borderRadius: "50%",
							display: "flex",
							alignItems: "center",
							marginLeft: "20px",
						}}
					>
						<img src={picture} alt='contact' style={{ borderRadius: "50%" }} />
					</div>
					<div
						className='info-wrapper'
						style={{
							display: "flex",
							flexDirection: "column",
							marginTop: mt,
							marginLeft: "20px",
						}}
					>
						<div
							className='name'
							style={{
								color: "#c1c4ca",
								marginLeft: "12px",
								marginTop: mt,
								fontSize: "1.25rem",
							}}
							alt='name'
							title='name'
						>
							{`${firstName} ${lastName}`}
						</div>
						<div
							className='email'
							style={{
								color: "#c1c4ca",
								marginLeft: "12px",
								marginTop: "8px",
								fontSize: "1rem",
							}}
							title='email'
						>
							{email}
						</div>
						<div
							className='telephone'
							style={{
								color: "#c1c4ca",
								marginLeft: "12px",
								marginTop: "8px",
								fontSize: "1rem",
							}}
							alt='telephone'
							title='telephone number'
						>
							{phone}
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}

export default ContactCard;
