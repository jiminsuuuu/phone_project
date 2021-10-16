const mysql2 = require("mysql2");

const db = mysql2.createPool({
    host: "127.0.0.1",
    port: "3306",
    database: "duo_project_db",
    user: "root",
    password: "fourleaf0309",
});

module.exports = db;