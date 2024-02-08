const express = require('express')
const cors = require('cors');

const app = express()
app.use(cors());

// this allows cors for my live server
app.use(cors({ origin: "http://127.0.0.1:5500", credentials: true }))
// this allows cors for my github page
app.use(cors({ origin: "https://hackerfaruk.github.io", credentials: true }))


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
    const name = getRandomName(myNames);
    res.json({name});
});



app.listen(process.env.PORT || 3000)