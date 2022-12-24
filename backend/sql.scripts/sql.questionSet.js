//  Require Dependencies:
let mysql = require('mysql');
let mockData = require('../mock/questionSet.mock.json')
// Connect to mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'preworkout'
});


const tableExistCMD = ` SELECT count(*) AS count FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'preworkout') AND (TABLE_NAME = 'questionSets')` 
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
    con.query("DROP TABLE questionSets", function (err, result, fields) {
        console.log("Table: `questionSets` has been dropped.")
    })
}


// FUNCTION
// Creates new Table

function createTable(){
    const tableCreate = "CREATE TABLE questionSets (questionSetID INT AUTO_INCREMENT PRIMARY KEY, dateCreate VARCHAR(255))";
    con.query(tableCreate, function (err, result, fields) {
        console.log("Table: `questionSets` has been created.")
        injectMockData()
    })
}



// FUNCTION 
// Injected Mock data into question table

function injectMockData(){
    for(let questionSet of mockData){
        let injection = `INSERT INTO questionSets (dateCreate) VALUES ('${questionSet.dateCreated}')`;
        con.query(injection, function (err, result, fields) {
            console.log("Table: Injected new QuestionSet")
        })
    }
}


