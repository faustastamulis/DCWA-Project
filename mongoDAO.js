const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:3004';

var findAll = function () {
    return new Promise((resolve, reject) => {
        var cursor = coll.find()
        cursor.toArray()
            .then((documents) => {
                resolve(documents)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

var addHeadOfState = function (headsOfState) {
    return new Promise((resolve, reject) => {
        coll.insertOne(headOfState)
            .then((headOfState) => {
                resolve(headOfState)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

module.exports = { findAll }
module.exports = { addHeadOfState }