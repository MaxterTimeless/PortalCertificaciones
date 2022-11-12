const {Client} = require('pg')

const client = new Client({
    host: "peanut.db.elephantsql.com",
    user: "uloukloo",
    port: 5432,
    password: "iIcVR4n5P5bGJLXT-eztkl0tgSvA89tc",
    database: "uloukloo"
})

module.exports = client