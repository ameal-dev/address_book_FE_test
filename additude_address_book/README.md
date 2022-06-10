# Task Analysis & Thoughts

Task description is saved in the root folder under the name "TaskDescription.pdf".

1. the input can be built in several different ways, some of them could be:
   a. simple input field where the user fetches data based on a predetermined topic e.g first or lastname which is communicated to the user through
   placeholder text in the input field.
   b. same as above , but with buttons relating to topics which the user can click e.g firstName, LastName, email etc. (Implement if there's time).

2. fetching of data from the server will create different complexities depending on the size of the company. If the company is around 500 people
   then it might be best to fetch all of the data when the page loads as to create a seamless experience for the user when they search as the results
   will render almost instantly.
   Should the company for example be 5000+ people then we need to take into account how expensive the fetching operation is , considering the users
   could be accessing the app through their phones and in connection with that using their cellular bandwitdh. In this case it could be worth looking
   into a dynamic fetch based on the users input and also caching-methods to further optimize the data usage.

   in my task I've assumed a medium sized company of 200 employees and therefor I will load all of the contacts when the user enters the application.

3. Reviewing the API it's clear that the contact information available should be limited and filtered as to not mistakenly share
   sensitive information i.e personal and/or authentication information.

# To Start the Application

cd address_book_FE_test
cd additude_address_book
npm install
npm run start

# Improvements to be made

- Pagination
- Caching results
- Dynamically showing results based on user credentials (HR, Customer Serice etc.)
