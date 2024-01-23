# Adding_User_Data_To_db.json

This project demonstrates a simple user registration form that collects user data and submits it to a JSON Server (using db.json). The front end is built with HTML, CSS, and JavaScript.

# Features
User-friendly form for collecting first name, last name, email, and password.
Form validation to ensure all fields are filled before submission.
Data is sent to a local server (JSON Server) using the Fetch API.
Successful submissions log data to the console.
Error handling for failed submissions.

# Setup Instructions

1. Clone the Repository:
git clone https://github.com/BloodlusT02/Adding_User_Data_To_db.json

2. Install Dependencies:
No external dependencies are required for this project.

3. Start JSON Server:
Ensure you have JSON Server installed globally : npm install -g json-server

Start the server using your db.json file : json-server --watch db.json --port 3000

4. Open index.html in a Browser:
Open the index.html file in a web browser to view and interact with the user registration form.

5. Fill in the Form:
Enter the required information in the form fields (first name, last name, email, password).

6. Submit the Form:
Click the "Submit" button to trigger the form submission.

7. View JSON Server Logs:
Check the file bd.json to see the user data

# Project Structure
- index.html: HTML file containing the structure of the user registration form.
- style.css: CSS file styling the form and the page.
- main.js: JavaScript file handling form submission and interacting with the JSON Server.

# Notes
- Customize the project as needed, update the API endpoint in the fetch call if your JSON Server is running on a different port.
- Ensure that your JSON Server is running before submitting the form.
- This project serves as a simple example and can be extended for more complex scenarios.

Feel free to explore, modify, and integrate this code into your web development projects!

This README provides an overview of the project, setup instructions, and additional information for users and developers. Feel free to adjust it based on your project's specific requirements.


