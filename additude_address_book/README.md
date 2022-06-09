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

   Judging from the task description it seems that the company size is either small or medium due to the fact that:
   a. the CEO is the one ordering the job
   b. the CEO has taken it on to himself to create a design mock up

   As it's not safe to assume the company size based only on above information , I will check with the sales rep. regarding the client company size.
   Work can continue while awating this information as it's a matter of extending the functionalty of the fetching function, should it be required.

3. Sorting of the contact list could follow the logic on #1 , or be added functionalty as per the buttons in #1 as well e.g pressing a button to
   sort the contact list based on the first name, last name or email etc.

4. Reviewing the API it's clear that the contact information available should be limited and filtered as to not mistakenly share
   sensitive information i.e personal and/or authentication information.

5. Design proposal has been recieved by the CEO , however other ideas and implementations have been suggested to be acceptable. Considering that the application
   will be used on several different platforms it opens up the possibility that contact cards can differ in geometry dependning on the screen size e.g smaller list item
   for phones/tables and bigger for desktop screens.

   examples:

   - for bigger screens:
     ![alt text](https://www.behance.net/gallery/66677473/Day-590-Users-List-UI-Design/modules/390086483)
   - for smaller screens:
     as per task description
