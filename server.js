import e from "express";
import axios from 'axios';

// create express
const app = e();

// basic Express server that listens on a port (e.g., 3000)
const port = 3000;

//  create a new GET route at the path /api/fun-fact. 
// Useless Facts API , which provides random facts and requires no API key
app.get('/api/fun-fact', async (req, res) => {
  // res.send('hello')

  //get request to the external API
  const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

  // use async/await and wrap your API call in a try...catch block to handle potential errors.
  try {

    //get data from the API
    const apiResponse = await axios.get(url);

    // extract only the text of the fact.
    const funFact = apiResponse.data.text;

    // send only the fun fact text to the client as a JSON response
    res.json({ fact: funFact });

  } catch (error) {
    console.error('Error fetching fun facts:', error);
    res.status(500).json({ message: 'Could not fetch fun fact' });
  }
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

