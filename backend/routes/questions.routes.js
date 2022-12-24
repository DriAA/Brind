const express = require('express');
const router = express.Router();
const userDB = require('../mock/users.json')
let mysql = require('mysql');
const ENV = require('../enviroment.json')
function errorGeneratorFormat(error, msg, status) {
    return {
        error: error,
        msg: msg,
        status: 404
    }
}


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'preworkout'
});

router.get("/", (req, res)=>{
    try {
        con.query("SELECT * FROM questionSets INNER JOIN questions ON questionSets.questionSetID = questions.questionSetID", function (err, result, fields) {
            if (err) throw err;
            return res.send(result)
        });
    } catch (error) {
        return res.send(errorGeneratorFormat(error, "Internal Server Error"))
    }
})



module.exports = router;
