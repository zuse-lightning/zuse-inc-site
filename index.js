require("dotenv").config();
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const helmet = require("helmet");

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
            "frame-src": [
                "'self'",
                "www.google.com",
                "www.youtube.com"
            ],
            "img-src": [
                "'self'",
                "zuse-inc-bucket.s3.amazonaws.com",
                "zuse-inc-bucket.s3.us-east-1.amazonaws.com"
            ],
        }
    }
}));

// app.use(routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        return res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
};

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));