const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');

router.get('/users', (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(201).json(users)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve user data from database.' })
        })
})

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

module.exports = router;