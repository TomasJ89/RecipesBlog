
const express = require("express");
const app = express();
const cors = require("cors")
const mainRouter = require("./routers/mainRouter")
const mongoose = require("mongoose")
const http = require("http");
const path = require("path");


require("dotenv").config()

mongoose.connect(process.env.MONGO_KEY)
    .then(() => {
        console.log("DB connect success ")
    }).catch(err => {
    console.log("error")
    console.log(err)
})
const server = http.createServer(app);

app.use(cors())
app.use(express.json());

app.use("/", mainRouter)


// app.listen(2000);
const PORT = process.env.PORT || 2000;

// Bind the server to 0.0.0.0 and the correct port
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});