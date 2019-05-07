const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(201).json(users)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve user data.' })
        })
})

module.exports = router;