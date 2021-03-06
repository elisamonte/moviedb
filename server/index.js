const express = require('express');
const axios= require('axios');
const cors= require('cors');
const { json }= require('body-parser');
const { apiURL, apiKey }= require('../config.js')

//Initialize server
const app= express();
const port= 3001;

//Middlewares
app.use(cors());
app.use(json());


//Endpoints
app.get('/api/movies', (req, res, next)=> {
  axios.get(`${apiURL}/movie/popular${apiKey}`).then(response=> {
    res.status(200).json(response.data);
  });
});


console.log(apiURL, apiKey);

app.listen(port, ()=>{
  console.log(`server is running on port: ${port}`);
})
