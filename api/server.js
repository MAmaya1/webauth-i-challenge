// Imports

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

// Global Middleware

server.use(express.json());
server.use(helmet());
server.use(cors());

// Configure Routes

server.get('/', (req, res) => {
    res.send('Hi there!');
})

module.exports = server;