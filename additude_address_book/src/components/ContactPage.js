import React from "react";

function ContactPage({ contact, setShowList }) {
	return (
		<div
			className='wrapper'
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<div className='img-wrapper' style={{ marginTop: "40px" }}>
				<img
					src={contact.picture.large}
					alt='profile'
					style={{ borderRadius: "50%" }}
				/>
			</div>
			<div className='information-wrapper'>
				<div className='name' style={{ fontSize: "2rem", marginTop: "20px" }}>
					{contact.name.first} {contact.name.last}
				</div>
			</div>
			<div>
				<button onClick={() => setShowList(true)}>ShowList</button>
			</div>
			{contact.name.first}
		</div>
	);
}

export default ContactPage;
