// Imports

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const server = express();

// Import Routers

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

// Configure Session

const sessionConfig = {
    name: 'cookie',
    secret: 'keep it secret, keep it safe! -gandalf',
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 5,
        secure: false
    },
    resave: false,
    saveUninitialized: true
}

// Global Middleware

server.use(session(sessionConfig));
server.use(express.json());
server.use(helmet());
server.use(cors());

// Configure Routes

server.get('/', (req, res) => {
    res.send('Hi there!');
})
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

module.exports = server;