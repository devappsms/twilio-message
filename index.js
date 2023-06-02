const express = require("express");
const app = express();
const router = require("./route");
require("dotenv").config();
const port = 4545;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/heartbeat", (req, res) => {
	res.send("Hi there!, Welcome to Twilio Messaging App");
});

app.use(router);

// Error handling
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send({ message: "Something broke!", error: err });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
