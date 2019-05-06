const router = require('express').Router();

const Users = require('../users/users-model');

router.get('/', (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(201).json(users)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve user data from database.' })
        })
})

module.exports = router;