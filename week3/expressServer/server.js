const express = require('express');


// network address to accept connections on
const port = 3001;

// assign instance of express to app variable
const app = express();

app.use(express.static('public'));

// handle http://localhost:3001
app.get('/', (request, response) => {
  response.send(`This is a simple static response`);
});

// // handle http://localhost:3001/restaurant/1 - dynamic route parameters
// app.get('/restaurant/:id', (request, response) => {
//   // :id = a dynamic (changeable) parameter

//   response.send(
//     `Hello, you asked for the restaurant with an ID of ${request.params.id}`
//   );
// });

// handle http://localhost:3001/restaurant/1 - dynamic route parameters
app.get('/restaurant/:id', (request, response) => {
  // mock fetch restaurant id from database
  let obj = null;
  if (request.params.id === '1') {
    obj = "Pizza Hut";
  } 
  else if (request.params.id === '2') {
    obj = "Drinks4Us";
  }
  else {
    obj = 'Restaurant not found';
  }

  response.send(obj);
});

app.get('/index.html', (request, response) => {
  // mock fetch restaurant id from database
  response.render("index");
});

app.post('/users', (request, response) => {
  response.send(
    `Hey ${request.body.username}!
    <a href="/">Go back home</a>
  `
  );
});

// listen for connections on port 3001 - this starts the server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});