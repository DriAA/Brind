const express = require('express');
const router = express.Router();
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
    let final = null
    try {
        con.query("SELECT * FROM questionSets", function (err, result, fields) {
            if (err) throw err;
            final = result

        for(let [index, questionSets] of final.entries()){
            let cmd = `SELECT * FROM questions WHERE questions.questionSetID = ${questionSets.questionSetID}`
            con.query(cmd, function (err, r, fields) {
                questionSets.question = r
                index == final.length - 1? appendOptions(final, res): ""
            })
        }
        });
    } catch (error) {
        return res.send(errorGeneratorFormat(error, "Internal Server Error"))
    }
})

function appendOptions(FINAL, res){
    // Iterate over question SETs
    for(let [index,questionSet] of FINAL.entries()){
        // Iterate over Questions
        for(let [i,question] of questionSet.question.entries()){
            let appendCMD = `SELECT * from options where options.questionID = ${question.questionID}`
            con.query(appendCMD, function (err, r, fields) {
                question.options = r
                index == FINAL.length -1 & i == questionSet.question.length -1? res.send( FINAL ): "" 
            })
        }
    }
}


module.exports = router;
