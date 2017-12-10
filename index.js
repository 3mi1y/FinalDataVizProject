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

app.get('/sampleData.csv', (req, res) => {
  res.sendFile(path.join(__dirname+'/SampleData.csv'))
})

app.listen(3000);

console.log("Running at Port 3000");
