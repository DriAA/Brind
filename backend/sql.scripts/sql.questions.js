//  Require Dependencies:
let mysql = require('mysql');
let mockData = require('../mock/questions.mock.json')
// Connect to mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'preworkout'
});


const tableExistCMD = ` SELECT count(*) AS count FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'preworkout') AND (TABLE_NAME = 'questions')` 
// Check if Database Exist
con.query(tableExistCMD, function (err, result, fields) {
    // If Found Drop Table;
    result[0].count ? dropTable(): "";
    // Create New Table
    createTable() 
})


// FUNCTION
// Drops Table

function dropTable(){
    con.query("DROP TABLE questions", function (err, result, fields) {
        console.log("Table: `questions` has been dropped.")
    })
}


// FUNCTION
// Creates new Table

function createTable(){
    const tableCreate = "CREATE TABLE questions (questionID INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), style VARCHAR(255), multiSelect VARCHAR(255), questionSetID VARCHAR(255))";
    con.query(tableCreate, function (err, result, fields) {
        console.log("Table: `questions` has been created.")
        injectMockData()
    })
}



// FUNCTION 
// Injected Mock data into question table

function injectMockData(){
    for(let question of mockData){
        console.log(question)
        let injection = `INSERT INTO questions (title, description, style, multiSelect, questionSetID) VALUES ('${question.title}', '${question.description}', ${question.style},'${question.multiSelect}','${question.questionSetID}')`;
        con.query(injection, function (err, result, fields) {
            console.log("Table: Injected new Question")
        })
    }
}


