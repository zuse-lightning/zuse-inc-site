const express = require("express");
// const helmet = require("helmet");

const app = express();
// app.use(helmet());
const server = require("http").createServer(app);
const path = require("path");

const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        return res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
};

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));