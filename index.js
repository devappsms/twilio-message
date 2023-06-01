const express = require("express");
const app = express();
const port = 4545;

app.get("/heartbeat", (req, res) => {
	res.send("Hi there!, Welcome to Twilio Messaging App");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
