const express = require('express')
const app = express()

// all answers all html methods 
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

// get answers get html method
app.get('/name', (req, res) => {
    res.send('Parancey');
});



app.listen(process.env.PORT || 3000)