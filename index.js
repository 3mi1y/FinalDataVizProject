const express = require('express')
const app = express();
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/build/counties.json', (req,res) => {
  res.sendFile(path.join(__dirname+'/build/counties.json'))
})

app.get('/us.json', (req,res) => {
  res.sendFile(path.join(__dirname+'/us.json'))
})

app.listen(3000);

console.log("Running at Port 3000");
