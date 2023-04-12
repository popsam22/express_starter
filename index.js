const express = require('express');

const index = express();

index.use('/users',(req, res, next) => {
    console.log('first middleware executed');
    res.send('<form action="/user" method="POST"><input type="text" name="title"/><button type="submit">Add User</button></form>');
})
index.use('/', (req, res, next) => {
    console.log('second middleware executed');
    res.send('<h1>Hello from Express</h1>')
})

index.listen(3003);