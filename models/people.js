const fs = require('fs');
const path = require('path');
const data = require('../data/data');
const { Pool, Client } = require('pg');

const pool = new Pool({
    user: data.user,
    host: data.host,
    database: data.database,
    password: data.password,
    port: data.port,
})

module.exports = class People {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    save() {
        const value = [this.name]
        return pool.query(
            'INSERT INTO name (name) VALUES ($1)',
            value)

    };
    static async fetchAll() {
        return await pool.query('SELECT * FROM name');
    }

    static findById(id) {
        return pool.query(`SELECT * FROM name WHERE id = '${id}'`);
    }

    static async deletePerson(id){
        return await pool.query(`DELETE FROM name WHERE id = '${id}'`)
    }
}


