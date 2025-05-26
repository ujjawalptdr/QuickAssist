const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config();
const port = process.env.PORT || 8000;

// use middlewares
// Set up CORS

const _dirname = path.resolve();

app.use(cors({
    origin: 'https://quick-assist.onrender.com',
    credentials: true,
}));
// app.use(cors());
app.use(express.json());

// MongoDB Connection
const con = require("./db/connection");

// Using Routes
app.use("/api", require("./routes/route"));
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/notificationRoutes"));
app.use("/api", require("./routes/paymentRoutes"));

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
});

// if (process.env.NODE_ENV == "production") {
//     // app.use(express.static(path.join(__dirname, '../client/build')));

//     // app.get('/', function(req, res){
//     //     res.sendFile(__dirname, '../client/build/index.html');
//     // });
//     app.get("/", function (req, res) {
//         res.send("API running :)");
//     });
// } else {
//     app.get("/", function (req, res) {
//         res.send("API running :)");
//     });
// }

con.then((db) => {
    if (!db) return process.exit(1);
    else {
        // listen to the http server
        app.listen(port, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log(`Server is running on: http://localhost:${port}`);
            }
        });
        app.on("error", (err) =>
            console.log("Failed to Connect with HTTP Server: " + err)
        );
    }
    // error in mongodb connection
}).catch((error) => {
    console.log("Connection failed...!" + error);
});
