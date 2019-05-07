const db = require('../data/dbConfig');

module.exports = {
    findUserBy,
    getUserById,
    add
}

function findUserBy(username) {
    return db('users')
        .where(username)
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return getUserById(id);
}

function getUserById(id) {
    return db('users')
        .where({ id })
        .first();
}