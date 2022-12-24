//  Require Dependencies:
let mysql = require('mysql');
let mockData = require('../mock/options.mock.json')
// Connect to mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'preworkout'
});


const tableExistCMD = ` SELECT count(*) AS count FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'preworkout') AND (TABLE_NAME = 'options')` 
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
    con.query("DROP TABLE options", function (err, result, fields) {
        console.log("Table: `options` has been dropped.")
    })
}


// FUNCTION
// Creates new Table

function createTable(){
    const tableCreate = "CREATE TABLE options (optionId INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), value VARCHAR(255), dosage VARCHAR(255), questionID VARCHAR(255))";
    con.query(tableCreate, function (err, result, fields) {
        console.log("Table: `options` has been created.")
        injectMockData()
    })
}



// FUNCTION 
// Injected Mock data into question table

function injectMockData(){
    for(let option of mockData){
        let injection = `INSERT INTO options (title, value, dosage, questionID) VALUES ('${option.title}', '${option.value}', ${option.dosage},'${option.questionID}')`;
        con.query(injection, function (err, result, fields) {
            console.log("Res: ", result)
        })
    }
}


