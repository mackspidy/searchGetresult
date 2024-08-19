Product List Filter Library
This JavaScript library fetches data from a public API and dynamically displays it in a list. The library includes a search functionality that allows users to filter the displayed items based on their input.

Features
Dynamic Data Fetching: Retrieves product data from the Fake Store API and populates an unordered list (<ul> element) with the product titles.
Real-Time Search: Implements a search filter that dynamically shows or hides list items as the user types, improving user experience by offering instant feedback.
Case-Insensitive Filtering: The search is case-insensitive, and leading/trailing whitespace in the input is ignored, making it user-friendly.
Clean User Interface: The list is cleared and repopulated each time new data is fetched, ensuring that the UI remains up-to-date and free of duplicates.
Usage
Fetch Data:

The getData() function fetches product data from the API and displays it in a <ul> element with the ID myUL.
Search Filter:

The myFunction() function filters the list of products as the user types into an input field with the ID myInput.
Matching items are displayed, while non-matching items are hidden. If the input field is empty, all items are hidden.
How It Works
Fetching Data:
The getData() function is called once the DOM content is fully loaded. It uses the fetch() API to retrieve data from the Fake Store API, converts the response to JSON, and updates the list items accordingly.

Filtering Items:
The myFunction() function reads the user input, converts it to uppercase for a case-insensitive match, and iterates through the list items. It shows only those items whose titles start with the entered text, hiding others.