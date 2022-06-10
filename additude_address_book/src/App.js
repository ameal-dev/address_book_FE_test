import ContactList from "./components/contact-components/ContactList";
import { useState, useEffect } from "react";
import ContactPage from "./components/contact-components/ContactPage";

function App() {
	const [filteredList, setFilteredList] = useState();
	const [contactList, setContactList] = useState();
	const [showList, setShowList] = useState(true);
	const [contact, setContact] = useState();

	useEffect(() => {
		//simulate a company with 200 emplyoees through a certain seed
		//to ensure same contacts gets genereated.
		//exclude login-information due to security concerns.
		//sort the fetched data by the first character in the last name of each contact per default.
		// Place the fetching of data furthest up the component tree to make sure that all components have access
		// to it and also to discourage any unecessary fetches stemming from re-renderings.
		fetch("https://randomuser.me/api/?results=200&seed=abc&exc=login")
			.then((response) => response.json())
			.then((data) => {
				setContactList(data.results);
				setFilteredList(
					data.results.sort((a, b) => {
						if (a.name.last < b.name.last) {
							return -1;
						} else if (a.name.last === b.name.last) {
							return 0;
						} else {
							return 1;
						}
					})
				);
			})
			.catch((error) => {
				console.log("there was an error fetching", error);
			});
	}, []);

	//Constructed the app to use state and ternery-operator to determine what to render.
	//Could have also constructed a modal on the ContactList-component to show the ContactCard.
	return (
		<>
			<div
				className='wrapper'
				style={{
					widht: "100vw",
					height: "100%",
					background:
						"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(193,193,193,1) 0%, rgba(182,232,201,1) 100%)",
				}}
			>
				{showList ? (
					<ContactList
						setShowList={setShowList}
						setContact={setContact}
						filteredList={filteredList}
						setFilteredList={setFilteredList}
						contactList={contactList}
					/>
				) : (
					<ContactPage setShowList={setShowList} contact={contact} />
				)}
			</div>
		</>
	);
}

export default App;
