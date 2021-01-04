var mysql = require('promise-mysql')
var pool

mysql.createPool({
    connectionLimit: 3,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'geography'
})
    .then((result) => {
        pool = result
    })
    .catch((error) => {
        console.log(error)
    });

var getCities = function () {
    return new Promise((resolve, reject) => {
        pool.query('select * from city')
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })

    })
}

var getCountries = function () {
    return new Promise((resolve, reject) => {
        pool.query('select * from country')
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })

    })
}

var addCountry = function(){
    return new Promise((resolve, reject) => {
        pool.query(addCountry)
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })

    })
}

var deleteCountry = function(){
    return new Promise((resolve,reject)=>{
        pool.query(deleteCountry)
            .then((result) => {
                resolve(result)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

module.exports = { getCities }
module.exports = { getCountries }
module.exports = { addCountry }
module.exports = { deleteCountry }