
// Declare Packages
let mysql = require('mysql');
let express = require('express');
let app = express();
let PORT = 3000;
const swaggerUi = require("swagger-ui-express");
swaggerDocument = require('./swagger.json');
const userRoute=require('./routes/users.routes')
const questionRoute=require('./routes/questions.routes')

const userDB = require('./mock/users.json')


// Routes


// Create Secure Connection with mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'preworkout'
});

let initalCMD = {
    db: {
        drop: "DROP DATABASE preworkout",
        create: "CREATE DATABASE preworkout"
    },
    tables: {
        users: {
            create: "CREATE TABLE users (userID INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), gender VARCHAR(255))",
            drop: "DROP TABLE users"
        },
        options: {
            create: "CREATE TABLE options (optionId INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), value VARCHAR(255), dosage VARCHAR(255), questionID VARCHAR(255))",
            drop: "DROP TABLE options",
            mock: [
                "INSERT INTO options (title, value, dosage, questionID) VALUES ('L-Carnitine', 'L-Carnitine', '500mg', 1)",
                "INSERT INTO options (title, value, dosage, questionID) VALUES ('Creatine','Creatine', '50mg', 1)",
                "INSERT INTO options (title, value, dosage, questionID) VALUES ('L-Arginine', 'L-Arginine', '23mg', 1)",
                "INSERT INTO options (title, value, dosage, questionID) VALUES ('L-Glutamine','L-Glutamine', '9mg', 1)"
            ],
            select: "SELECT * FROM options"
        },
        questions: {
            create: "CREATE TABLE questions (questionID INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), style VARCHAR(255), multiSelect VARCHAR(255), questionSetID VARCHAR(255))",
            drop: "DROP TABLE questions",
            mock: [
                "INSERT INTO questions (title, description, style, multiSelect, questionSetID) VALUES ('What do you prefer in your preworkout', 'We ask this to ensure you get what you like', 'box', 'false', 1)",
            ],
            select: "SELECT * FROM questions"
        },
        questionSets: {
            create: "CREATE TABLE questionSets (questionSetID INT AUTO_INCREMENT PRIMARY KEY, dateCreate VARCHAR(255))",
            drop: "DROP TABLE questionSets",
            mock: [
                "INSERT INTO questionSets (dateCreate) VALUES ('12/21/22')",
            ],
            select: "SELECT * FROM questionSets"
        }
    }
}

// con.connect(function (err) {
    // if (err) throw err;
    // console.log("Successully connected to mysql Server ... \n\n");

    // // // Delete Database
    // // con.query(initalCMD.db.drop, function (err, result) {
    // //     if (err) throw err;
    // //     console.log("DATABASE 'preworkout' has been deleted.");
    // // });

    // // // Create Database
    // // con.query(initalCMD.db.create, function (err, result) {
    // //     if (err) throw err;
    // //     console.log("DATABASE 'preworkout' has been created.");
    // // });



    // //! OPTIONS
    // // Drop Options Table
    // con.query(initalCMD.tables.options.drop, function (err, result) {
    //     if (err) throw err;
    //     console.log("TABLE 'Options' has been Dropped.");
    // });
    // // Create Options Table
    // con.query(initalCMD.tables.options.create, function (err, result) {
    //     if (err) throw err;
    //     console.log("TABLE 'Options' has been Created.");
    // });
    // // Inject Mock Data into Options Table
    // for (let option of initalCMD.tables.options.mock) {
    //     con.query(option, function (err, result) {
    //         if (err) throw err;
    //         console.log("TABLE 'Options' inject mock data");
    //     });
    // }
    // // Validate Options are Injected:
    // con.query(initalCMD.tables.options.select, function (err, result, fields) {
    //     if (err) throw err;
    //     console.log("Total of ", result.length, " have been found.", result[0]);
    // });



//     //! QUESTIONS
//     // Drop Previous Questions Table
//     con.query(initalCMD.tables.questions.drop, function (err, result) {
//         if (err) throw err;
//         console.log("TABLE 'Questions' has been Dropped.");
//     });

//     // Create New Questions Table
//     con.query(initalCMD.tables.questions.create, function (err, result) {
//         if (err) throw err;
//         console.log("TABLE 'Questions' has been Dropped.");
//     });
//     // Inject Mock Data
//     for (let question of initalCMD.tables.questions.mock) {
//         con.query(question, function (err, result) {
//             if (err) throw err;
//             console.log("TABLE 'Questions' inject mock data");
//         });
//     }
//     // Return MockData
//     con.query(initalCMD.tables.questions.select, function (err, result, fields) {
//         if (err) throw err;
//         console.log("Total of ", result.length, " have been found.", result[0]);
//     });



//     //! QUESTION SET
//     // Create New QuestionSet Table
//     con.query(initalCMD.tables.questionSets.drop, function (err, result) {
//         if (err) throw err;
//         console.log("TABLE 'QuestionSet' has been Deleted.");
//     });
//     // Create New QuestionSet Table
//     con.query(initalCMD.tables.questionSets.create, function (err, result) {
//         if (err) throw err;
//         console.log("TABLE 'QuestionSet' has been Created.");
//     });
//     // Inject Mock Data
//     for (let question of initalCMD.tables.questionSets.mock) {
//         con.query(question, function (err, result) {
//             if (err) throw err;
//             console.log("TABLE 'QuestionSet' inject mock data");
//         });
//     }
//     // Return MockData
//     con.query(initalCMD.tables.questionSets.select, function (err, result, fields) {
//         if (err) throw err;
//         console.log("Total of ", result.length, " have been found.", result[0]);
//     });
// });


// Inject Users

// Always user per api Call:
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/users",userRoute)
app.use("/questions",questionRoute)


// // Drop User Table
// con.query(initalCMD.tables.users.drop, function (err, result) {
//     if (err) throw err;
//     console.log("DROPPED TABLE 'Users'", result);
// });

// // Create User Table
// con.query(initalCMD.tables.users.create, function (err, result) {
//     if (err) throw err;
//     console.log("CREATED TABLE 'Users'", result);
// });


// for (let user of userDB) {
//     con.query(`INSERT INTO users (username, first_name, last_name, email, password,  gender) VALUES ("${user.username}", "${user.first_name}", "${user.last_name}", "${user.email}", "${user.password}", "${user.gender}")`, function (err, result) {
//         if (err) throw err;
//         console.log("TABLE 'Users' inject mock data");
//     });
// }

// ! Initialize Serv er
app.listen(PORT, ()=>{
    console.log("Server Initialized on port: ", PORT)
})
