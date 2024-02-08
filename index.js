const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());






// all answers all html methods 
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

// random Name 

function getRandomName(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// names
const myNames = ['hackerFaruk', 'Onuralp', 'Parancey', 'Onuralp Arslan'];

// get answers get html method
app.get('/name', (req, res) => {
    res.send(getRandomName(myNames));
});



app.listen(process.env.PORT || 3000)