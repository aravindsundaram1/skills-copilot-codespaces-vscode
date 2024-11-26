// Create web server
const express = require('express');
const app = express();

// Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.json({message: 'This is a POST request'});
});

// Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.json({message: 'This is a GET request'});
});

// Create a route for PUT /comments
app.put('/comments', (req, res) => {
    res.json({message: 'This is a PUT request'});
});

// Create a route for DELETE /comments
app.delete('/comments', (req, res) => {
    res.json({message: 'This is a DELETE request'});
});

// Create a route for PATCH /comments
app.patch('/comments', (req, res) => {
    res.json({message: 'This is a PATCH request'});
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/comments');
}); 
 Step 2: Test the REST API 
 To test the REST API, you can use a REST client such as Postman or Insomniaconst express = require('express');
const app = express();

// Create a route for POST /comments
app.post('/comments', (req, res) => {
    res.json({message: 'This is a POST request'});
});

// Create a route for GET /comments
app.get('/comments', (req, res) => {
    res.json({message: 'This is a GET request'});
});

// Create a route for PUT /comments
app.put('/comments', (req, res) => {
    res.json({message: 'This is a PUT request'});
});

// Create a route for DELETE /comments
app.delete('/comments', (req, res) => {
    res.json({message: 'This is a DELETE request'});
});

// Create a route for PATCH /comments
app.patch('/comments', (req, res) => {
    res.json({message: 'This is a PATCH request'});
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/comments');
}); 
 Step 2: Test the REST API 
 To test the REST API, you can use a REST client such as Postman or Insomnia