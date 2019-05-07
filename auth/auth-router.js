const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../auth/auth-model');

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
            .catch(err => {
                res.status(500).json({ error: err, message: 'A user with that name already exists.' })
            })
    }
})

module.exports = router;