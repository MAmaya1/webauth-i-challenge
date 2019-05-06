const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');

// Import Middleware

const protected = require('../auth/restricted-middleware');

// GET users

router.get('/users', protected, (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(201).json(users)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve user data from database.' })
        })
})

// Register

router.post('/register', (req, res) => {
    const user = req.body;

    if (!user.username || !user.password) {
        res.status(400).json({ errorMessage: 'New users require a username and password.' })
    } else {
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash;

        Users.add(user)
            .then(saved => {
                res.status(201).json(saved)
            })
            .catch(error => {
                res.status(500).json({ error: error, message: 'Could not add user.' })
            })
    }
})

// Login

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findUserBy({ username })
        .first()
        .then(user => {

            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(201).json({ message: `Welcome ${user.username}!` })
            } else {
                res.status(401).json({ errorMessage: 'Incorrect username and/or password.' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not log in.' })
        })
    
})

module.exports = router;