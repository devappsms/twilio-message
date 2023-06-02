const express = require("express");
const routerOptions = { caseSensitive: true, strict: true };
const messageRouter = express.Router(routerOptions);
const {
	sendMessage,
	sendImageMessage,
	sendShortLinkMessage,
} = require("../twilio/message/service");

messageRouter.post("/send", (req, res, next) => {
	sendMessage(req.body)
		.then((resData) => res.send(resData))
		.catch((err) => {
			next(err);
		});
});

messageRouter.post("/msgimage", (req, res) => {
	sendImageMessage(req.body)
		.then((resData) => res.send(resData))
		.catch((err) => {
			next(err);
		});
});

messageRouter.post("/shorturlmsg", (req, res) => {
	sendShortLinkMessage(req.body)
		.then((resData) => res.send(resData))
		.catch((err) => {
			next(err);
		});
});

module.exports = messageRouter;
