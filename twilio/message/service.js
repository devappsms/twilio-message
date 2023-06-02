const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log(process.env.TWILIO_ACCOUNT_SID);
const client = require("twilio")(accountSid, authToken);

/* 
	Function to send SMS and WhatsApp messages 

	To Send SMS  
		from - Phone Number Eg:- +1888223413
		to   - Phone Number Eg:- +1878223443

	To Send WhatsApp Message 
		from - Phone Number Eg:- whatsapp:+1888223413
		to   - Phone Number Eg:- whatsapp:+1878223443
*/

const sendMessage = (reqData) => {
	const { to, from, message } = reqData;
	let messageOptions = {
		body: message,
		from: from,
		to: to,
		statusCallback: "/message/events",
	};
	return client.messages
		.create(messageOptions)
		.then((message) => {
			console.log(message.sid);
			return {
				response: "message sent successfully",
				messageDetails: message.sid,
			};
		})
		.catch((err) => {
			throw err;
		});
};

/* 
	Function to send SMS and WhatsApp messages with image with Schedule

	To Send SMS  
		to   - Phone Number Eg:- +1878223443

	To Send WhatsApp Message 
		to   - Phone Number Eg:- whatsapp:+1878223443
*/
const sendImageMessage = (reqData) => {
	const { to, message, mediaUrls, sendAt } = reqData;
	let messageOptions = {
		messagingServiceSid: process.env.TWILIO_MSG_SERVICE_SID,
		body: message,
		to: to,
		statusCallback: "/message/events",
		mediaUrl: mediaUrls,
		sendAt: new Date(sendAt),
		scheduleType: "fixed",
	};
	return client.messages
		.create(messageOptions)
		.then((message) => {
			console.log(message.sid);
			return {
				response: "message sent successfully",
				messageDetails: message.sid,
			};
		})
		.catch((err) => {
			throw err;
		});
};

/* 
	Function to send SMS and WhatsApp messages with image with Schedule

	To Send SMS  
		to   - Phone Number Eg:- +1878223443

	To Send WhatsApp Message 
		to   - Phone Number Eg:- whatsapp:+1878223443

	shortenUrls - true   - send shorten Urls 
				- false  - send actual url specified in the message
 
*/
const sendShortLinkMessage = (reqData) => {
	const { to, message } = reqData;
	let messageOptions = {
		messagingServiceSid: process.env.TWILIO_MSG_SERVICE_SID,
		body: message,
		to: to,
		statusCallback: "/message/events",
		shortenUrls: true,
	};
	return client.messages
		.create(messageOptions)
		.then((message) => {
			console.log(message.sid);
			return {
				response: "message sent successfully",
				messageDetails: message.sid,
			};
		})
		.catch((err) => {
			throw err;
		});
};

module.exports = {
	sendMessage,
	sendImageMessage,
	sendShortLinkMessage,
};
