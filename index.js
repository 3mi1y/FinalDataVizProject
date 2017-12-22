const express = require('express')
const app = express();
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/us.json', (req,res) => {
  res.sendFile(path.join(__dirname+'/us.json'))
})

// This is the route that sends the tagButtons.js file so that index.html can access it
app.get('/tagButtons.js', (req,res) => {
  res.sendFile(path.join(__dirname+'/tagButtons.js'))
})

app.get('/Cities.csv', (req, res) => {
  res.sendFile(path.join(__dirname+'/Cities.csv'))
})

app.get('/style2.css', (req,res) => {
  res.sendFile(path.join(__dirname+'/style2.css'))
})






app.listen(3000);

console.log("Running at Port 3000");
