var express = require('express')
var mySQLDAO = require('./mySQLDAO')

var app = express()

app.set('view engine', 'ejs')

//Home Page
app.get('/', function (req, res) {
    res.render('./home.ejs')
})

//list Cities Page
app.get('/listCities', (req, res) => {
    mySQLDAO.getCities()
        .then((result) => {
            console.log(result)
            res.render('showCities', { getCities: result })
        })
        .catch((error) => {
            res.send(error)
        })
})

//ListCountries Page
app.get('/listCountries', (req, res) => {
    mySQLDAO.getCountries()
        .then((result) => {
            console.log(result)
            res.render('showCountries', { getCountries: result })
        })
        .catch((error) => {
            res.send(error)
        })
})

app.post("/listCountries/addCountry", (req, res) => {
    var myQuery = {
    sql: 'INSERT INTO countries VALUES (?,?,?)',
    values: [req.body.co_code, req.body.co_name, req.body.co_details]
    }
    pool.query(myQuery)
    .then((data) => {
    console.log(data)
    })
    .catch(error => {
    console.log(error)
    })
})

app.post("/listCountries/deleteCountry", (req, res) => {
    var myQuery = {
    sql: 'delete from countries VALUES (?,?,?)',
    values: [req.body.co_code, req.body.co_name, req.body.co_details]
    }
    pool.query(myQuery)
    .then((data) => {
    console.log(data)
    })
    .catch(error => {
    console.log(error)
    })
})

//ListHeadOfState Page
app.get('/listHeadsOfState', (req, res) => {
    dao.findAll()
        .then((headsOfState) => {
            // Process headsOfState
        })
        .catch((error) => {
            // Handle error
        })
    dao.addHeadOfState()
        .then((result) => {
            //Do Something
        })
        .catch((error) => {
            // Handle error
        })
    
})

app.listen(3004, () => {
    console.log("Listening on port 3004")
})

