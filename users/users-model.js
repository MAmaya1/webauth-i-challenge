const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    findUserBy,
    findById,
    add
}

function getUsers() {
    return db('users')
        .select('id', 'username', 'password')
}

function findUserBy(username) {
    return db('users')
    .where(username)
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return findById(id);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}