const express = require('express');
const app = express();
const serverless = require(‘serverless-http’);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', (req,res) => {
    res.send({application: 'Server-less Node App with AWS-Lambda'});

})

app.post('/api/v1/getback', (req,res) => {
    res.send({...req.body})
});

app.listen(3000, () => console.log('Server started on port 3000'));

module.exports.handler = serverless(app);