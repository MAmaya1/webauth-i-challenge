const Users = require('../users/users-model');

const bcrypt = require('bcryptjs');

function protected(req, res, next) {
    const { username, password } = req.headers;

    if (username && password) {
        Users.findUserBy({ username })
            .first()
                .then(user => {
                    if (user && bcrypt.compareSync(password, user.password)) {
                        next();
                    } else {
                        res.status(401).json({ message: 'Incorrect username and/or password.' })
                    }
                })
                .catch(err => {
                    res.status(500).json({ error: err, message: 'Could not retrieve user data.' })
                })
    } else {
        res.status(400).json({ errorMessage: 'You must be logged in to view users.' })
    }
}

module.exports = protected;