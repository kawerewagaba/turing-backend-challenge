/** @module db */

// load environment variables
require('dotenv').config();

// import data modeling library
const mongoose = require('mongoose');

// db uri stored as an environment variable for security reasons
const uri = process.env.MLAB_URI;

/** class representing a database connection */
class Database {
    constructor() {
        // call method at instantiation
        this._connect();
    }
    
    /**
     * setup db connection
     * @param {string} uri
     * @return {promise}
     */
    _connect() {
        mongoose.connect(uri)
        .then(() => {
            console.log('db connection success');
        })
        .catch(() => {
            console.log('db connection failure');
        });
    }
}

// expose db instance to app
module.exports = new Database();