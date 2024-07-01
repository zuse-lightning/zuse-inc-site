require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

let s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    sslEnabled: false,
    s3ForcePathStyle: true,
    signatureVersion: "v4"
});

const app = express();
const server = require("http").createServer(app);
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParser());
//Uploading files
const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: "public-read",
        bucket: process.env.BUCKET_NAME,
        key: (req, file, cb) => {
            console.log(file);
            cb(null, file.originalname);
        }
    })
});

app.use(routes);

app.post("/upload", upload.single("writeFile"), (req, res) => {
    console.log("uploading file");
    console.log(req.file);
    console.log("read files")
    res.send({
        message: "Files uploaded successfully",
        url: req.file.location,
        name: req.file.key,
        type: req.file.mimetype,
        size: req.file.size
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        return res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
};

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));