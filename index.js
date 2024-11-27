require("dotenv").config();
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const helmet = require("helmet");
// const { S3Client } = require("@aws-sdk/client-s3");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

// let s3 = new S3Client({
//     region: process.env.AWS_REGION,
//     credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
//     },
//     sslEnabled: false,
//     s3ForcePathStyle: true,
//     signatureVersion: "v4"
// });

const app = express();
const server = require("http").createServer(app);
const path = require("path");
const routes = require("./routes");
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://www.zuse.com",
    "https://www.americancontractprinting.com",
    "https://www.americanunionprint.com",
    "https://zuse-inc-site-f7c4b104cb54.herokuapp.com"
];
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Origin not allowed by CORS"));
        }
    },
    credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "connect-src": [
                "'self'",
                "www.zuse.com",
                "www.americancontractprinting.com",
                "www.americanunionprint.com"
            ],
            "img-src": [
                "'self'",
                "zuse-inc-bucket.s3.amazonaws.com",
                "zuse-inc-bucket.s3.us-east-1.amazonaws.com"
            ],
        }
    }
}));

//Uploading files
// const upload = multer({
//     storage: multerS3({
//         s3: s3,
//         acl: "public-read",
//         bucket: process.env.BUCKET_NAME,
//         key: (req, file, cb) => {
//             console.log(file);
//             const fullPath = `review-images/${file.originalname}`;
//             cb(null, fullPath);
//         }
//     })
// });

app.use(routes);

// app.post("/upload", upload.single("writeFile"), (req, res) => {
//     console.log("uploading file");
//     console.log(req.file);
//     console.log("read files")
//     res.send({
//         message: "Files uploaded successfully",
//         url: req.file.location,
//         name: req.file.key,
//         type: req.file.mimetype,
//         size: req.file.size
//     });
// });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        return res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
};

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));