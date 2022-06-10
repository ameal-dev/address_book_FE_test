import ContactCard from "./ContactCard";
import React from "react";

const ContactList = ({
	setContact,
	setShowList,
	filteredList,
	contactList,
	setFilteredList,
}) => {
	const filterBySearch = (e) => {
		//assign input value
		const query = e.target.value;
		// Create copy of contactList
		let updatedList = [...contactList];
		// Include all elements which includes the search query
		// check if match is made on either first name or last name
		updatedList = updatedList.filter((contact) => {
			//combine firt and last name so that the search function understands whitespace
			const name = `${contact.name.first} ${contact.name.last}`;
			return (
				name.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
				contact.phone.toLowerCase().indexOf(query.toLowerCase()) !== -1
			);
		});
		// Trigger render with updated values
		setFilteredList(updatedList);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<input
				type='text'
				placeholder={`filters by name & phone number`}
				onChange={filterBySearch}
				style={{
					width: "59%",
					margin: "20px auto",
					backgroundColor: "white",
					borderRadius: "4px",
					border: "1px solid lightgray",
					height: "2rem",
					minWidth: "350px",
					maxWidth: "500px",
				}}
			></input>
			{/*map through and render the filtered list of contacts */}
			<ul style={{ listStyleType: "none", padding: "0" }}>
				{filteredList ? (
					filteredList.map((contact, index) => (
						<ContactCard
							contact={contact}
							setContact={setContact}
							setShowList={setShowList}
							key={index}
						/>
					))
				) : (
					<div
						className='loading'
						style={{
							testAlign: "center",
							display: "flex",
							justifyContent: "center",
							fontSize: "3rem",
							marginTop: "15rem",
							height: "100vh",
						}}
					>
						{"Loading..."}
					</div>
				)}
			</ul>
		</div>
	);
};

export default ContactList;
