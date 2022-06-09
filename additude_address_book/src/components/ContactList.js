import ContactCard from "./ContactCard";
import React, { useState } from "react";

const ContactList = ({
	setContact,
	setShowList,
	filteredList,
	contactList,
	setFilteredList,
}) => {
	const [filter, setFilter] = useState();

	//constructed the filter function to filter contacts that matches the search query, arguments could be made
	//to make it in another fashion, such as only showing contacts which strictly match the search query from start.
	const filterBySearch = (e) => {
		//assign input value
		const query = e.target.value;
		// Create copy of contactList
		let updatedList = [...contactList];
		// Include all elements which includes the search query
		updatedList = updatedList.filter(
			(contact) =>
				contact.name.first.toLowerCase().indexOf(query.toLowerCase()) !== -1
		);
		// Trigger render with updated values
		setFilteredList(updatedList);
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			<input
				type='text'
				placeholder={`filters by ${filter}`}
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
			<ul style={{ listStyleType: "none", padding: "0" }}>
				{
					//TODO: Remove unecessary firstname,lastname etc and just use contact}
					filteredList ? (
						filteredList.map((contact, index) => (
							<ContactCard
								contact={contact}
								setContact={setContact}
								setShowList={setShowList}
								firstName={contact.name.first}
								lastName={contact.name.last}
								picture={contact.picture.medium}
								email={contact.email}
								phone={contact.phone}
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
								fontSize: "2rem",
								marginTop: "2rem",
							}}
						>
							{"Loading..."}
						</div>
					)
				}
			</ul>
		</div>
	);
};

export default ContactList;
