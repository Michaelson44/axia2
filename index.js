const express = require('express');
const app = express();

app.use(express.json);

app.get('/', (req, res) => {
    res.send("Welcome to home page");
});

app.post('/post', (req, res) => {
    const body = req.body;
    res.json(body);
});

app.put('/post', (req, res) => {
    const body = req.body;
    res.send("update successful");
})

app.delete('/post', (req, res) => {
    res.json("post has been deleted");
})

app.listen(2200, () => console.log('api connected from express'));