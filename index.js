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

// TESTING OUR ENDPOINT WITH JAVASCRIPT FETCH FUNCTION

const test = async () => {
    const res = await fetch('http://localhost:2200/post', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({id: 1, name: "Michael", hobbies: ["coding", "gym"]})
    })
    const result = await res.json();
    console.log(result);
}
test();