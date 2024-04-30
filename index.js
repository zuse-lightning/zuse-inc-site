require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const multer = require("multer");

const app = express();

const server = require("http").createServer(app);
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//Uploading files
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

app.post("/upload", upload.single("file"), (req, res) => {
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: req.file.originalname,
        Body: req.file.buffer
    };
    s3.upload(params, (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Error uploading file.");
        };
        res.send("File uploaded successfully.");
    });
});

app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        return res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
};

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));