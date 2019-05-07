// Imports

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// Import Routers

const usersRouter = require('../users/users-router');

// Global Middleware

server.use(express.json());
server.use(helmet());
server.use(cors());

// Configure Routes

server.get('/', (req, res) => {
    res.send('Hi there!');
})

server.use('/api/users', usersRouter);

module.exports = server;