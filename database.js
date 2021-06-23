
const {createPool} = require('mysql');


const db = createPool({
    host: 'localhost',
    user: 'superuser',
    password: '0o9EtUSJejb2IYdg ',
    database: 'nody_db',
    connectionLimit: 10
});

module.exports = { db };
