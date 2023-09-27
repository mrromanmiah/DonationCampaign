<h1>Donation Campaign</h1>

The <b>Donation Campaign</b> website project, built using React.js. Here are the key features of this website:

<h3>Home Page:</h3>

* Static navbar with logo and navigation links to 'Home', 'Donation', and 'Statistics'.

* Banner with a semi-transparent background image.

* Search input field in the middle of the banner.

* Dynamic cards (12) displaying content from a JSON file (`donation.json`).

* Each card includes an image, category name, and title. 

* Card appearance (Image, Background Color, Text Color, Category Name Background) customized based on JSON data.

* Functional search: Searching by category name filters and displays relevant cards.

* Clicking on a card leads to a dedicated 'Details' page. 

<h4><u>Details Page:</u></h4>

* Image on the left-bottom side with a 'Donate' button displaying the donation amount.

* Semi-transparent opacity overlay behind the 'Donate' button.

* Donation title and a short description. 

* Donation process: Clicking the 'Donate' button adds a card to the 'Donation' page and saves it in <b>localStorage</b>.


<h3>Donation Page:</h3>

* Shows added donation cards.

* Each card displays image, category, title, amount, and a 'View Details' button.

* Two buttons: 'Clear All' (visible when at least one card is added) and 'See All' (visible when more than 4 items are added). 

* Clicking 'Clear All' removes all added cards. 

* Clicking 'See All' expands and displays all items; the button is then hidden.


<h3>Statistics Page:</h3>

* Displays a pie chart with two data points:

    - Number of added donations shown on the 'Donation' page.
    - Total number of cards on the home page sourced from JSON data.

<h4><u>Page Not Found Page:</u></h4>

* Shown when users navigate to unrelated or nonexistent paths.

* A user-friendly "Page Not Found" error message is displayed. 


The <b>Donation Campaign</b> website, built using React JS, offers an array of features. From its aesthetically designed home page with dynamic cards and search functionality to the intuitive 'Details' page for donations, and the organized 'Donation' page for managing contributions, this website streamlines the donation process. Moreover, the 'Statistics' page provides insights into user activity, while the 'Page Not Found' page ensures a smooth user experience by handling unexpected routes. 


