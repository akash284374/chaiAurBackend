// const express=require('express')

import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send("Server is ready!");
})

const jokes = [
    {
        id: 1,
        title: "School Joke",
        content: "Why did the student eat his homework? Because the teacher said it was a piece of cake!"
    },
    {
        id: 2,
        title: "Computer Joke",
        content: "Why don’t programmers like nature? It has too many bugs."
    },
    {
        id: 3,
        title: "Math Joke",
        content: "Why was the math book sad? Because it had too many problems."
    },
    {
        id: 4,
        title: "Food Joke",
        content: "Why did the tomato turn red? Because it saw the salad dressing!"
    },
    {
        id: 5,
        title: "Animal Joke",
        content: "What do you call a fish with no eyes? Fsh."
    }
];

app.get('/api/jokes', (req, res) => {
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})