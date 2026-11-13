## Reflection

1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?

* Re-formatting the data was important because the external API returns several fields, but our client only needs the fun fact text. 
* Sending a clean, minimal response makes the data easier to understand, reduces unnecessary information, and makes it easier for the client to use.


2. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?

* It is better to send a generic error message because the actual Axios error may contain technical or sensitive information about the server or the request. 
* A generic message protects internal information while still informing the client that something went wrong.


3. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?

* I could modify the URL by adding a language query parameter, such as ?language=de.
