## The Daily Grind – Server to Server Communication

**Description***

This project demonstrates server-to-server communication using Node.js, Express, and Axios.

The application creates an Express server with an API endpoint that fetches a random fun fact from the external Useless Facts API. It extracts only the text of the fact and sends it back to the client in a clean JSON response.


**Technologies:**

1. Node.js: JavaScript runtime environment.
2. Express.js: Framework used to create the web server and API endpoint.
3. Axios: JavaScript library used to make HTTP requests to the external API.
4. JavaScript (ES Modules): Used to import and organize dependencies.
5. JSON: Format used to send data to the client.

Random fact endpoint:

https://uselessfacts.jsph.pl/api/v2/facts/random

**Implementation:**

1. Express Server Setup
Created an Express application that listens on port 3000.

2. API Endpoint
Created a GET route:

GET /api/fun-fact
This endpoint allows the client to request a random fun fact from our server.

3. External API Request with Axios
Used axios.get() with async/await to request data from the Useless Facts API.

4. Data Extraction and JSON Response
The external API returns an object containing several fields. The application extracts only the text property using:

const funFact = apiResponse.data.text;

5. Error Handling

Implemented a try...catch block to handle errors during the external API request.
If the request fails, the server returns an HTTP 500 status code and a generic JSON error message.

**How to Run the Project**

* Install the dependencies: npm install express axios
* Start the server: node server.js
* Open the following URL in your browser:

test:
http://localhost:3000/api/fun-fact

* { "fact": "A honeybee can fly at fifteen miles per hour." }
* { "fact": "Pepsi originally contained pepsin, thus the name. " }
* { "fact": "John Lennon`s first girlfriend was named Thelma Pickles." }