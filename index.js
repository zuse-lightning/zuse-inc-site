require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

AWS.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION
});

const app = express();
const s3 = new AWS.S3();
const server = require("http").createServer(app);
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//Uploading files
// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         acl: "public-read",
//         bucket: process.env.BUCKET_NAME,
//         key: (req, file, cb) => {
//             console.log(file);
//             cb(null, Date.now().toString() + "-" + file.originalname);
//         }
//     })
// });

app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        return res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
};

// app.post("/upload", upload.array("upl", 25), (req, res, next) => {
//     res.send({
//         message: "Files uploaded successfully",
//         urls: req.files.map(file => {
//             return {
//                 url: file.location,
//                 name: file.key,
//                 type: file.mimetype,
//                 size: file.size
//             }   
//         })
//     });
// });

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));