const mysql = require("mysql");
// const mongoose = require("mongoose");

const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// const mongo = async () => {
//     try {
//         const connectionParams = {
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useUnifiedTopology: true
//         };
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log("connected to mongodb database");
//     } catch (error) {
//         console.log(error, "could not connect to mongodb database");
//     };
// };

module.exports = db;