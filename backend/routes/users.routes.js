const express = require('express');
const router = express.Router();
const userDB = require('../mock/users.mock.json')
let mysql = require('mysql');
const ENV = require('../enviroment.json')
function errorGeneratorFormat(error, msg, status) {
    return {
        error: error,
        msg: msg,
        status: 404
    }
}

// Create Secure Connection with mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'preworkout'
});

// GET
// Returns all current users
router.get("/", (req, res) => {
    // 1 Iterate over available Queries
    let queryArr = []
    for (const [key, value] of Object.entries(ENV.dataStructure.users)) {
        let obj = new Object
        if( req.query[key] != undefined ){
            let obj = new Object
            obj[key] = req.query[key];
            queryArr.push(obj)
        }
    }
    // Decide which key will be used.
    let sqlCommand = ''
    // None Exist
    if(queryArr.length == 0){
        sqlCommand = `SELECT * FROM users`
    }else if(queryArr.length == 1){
        // Excactly One
        let location = `WHERE ${Object.keys(queryArr[0])} = "${queryArr[0][Object.keys(queryArr[0])]}"`
        sqlCommand = `SELECT * FROM users ` + location
    }else{
        let filterSetting = req.query.filterBy == undefined ? 'AND': req.query.filterBy
        let locationArray = [];
        for(let query of queryArr){
            locationArray.push(`${Object.keys(query)} = "${query[Object.keys(query)]}"`)
        }
        let location = " WHERE "+ locationArray.join(` ${filterSetting} `)
        sqlCommand = `SELECT * FROM users` + location
    }
    try {
        con.query( sqlCommand, function (err, result, fields) {
            if (err) throw err;
            res.send(result.filter(user => delete user.password))
        });
    } catch (error) {
        res.send(errorGeneratorFormat(error, "Internal Server Error"))
    }

})


router.get("/:id", (req, res) => {
    console.log("LOOKING FOR: ", req.query.id)
    console.log("Attempting Search ...")
    let paramID = parseInt(req.params.id) || req.params.id
    if (typeof paramID != 'number') {
        return res.send(errorGeneratorFormat("ValidationString", "ID must be a number", 200))
    }
    try {
        for (let user of userDB) {
            if (user.id === paramID) {
                return res.send(user)
            }
        }
        res.send([])
    } catch (error) {
        return res.send(errorGeneratorFormat(error, "Internal Server Error"))
    }

})
module.exports = router;