import express, { application } from 'express';
const app = express();

// Define a port number where server will listen.
const PORT = 3000;

// Define our main root ('/')
app.get('/', (req, res) => {
  res.send("Welcome to poppa's pizza");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${3000}`)
});