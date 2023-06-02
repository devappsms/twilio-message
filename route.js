const express = require("express");
const routerOptions = { caseSensitive: true, strict: true };
const router = express.Router(routerOptions);
const messageRouter = require("./routers/msg_router");
router.use("/message", messageRouter);

module.exports = router;
// router.use("/whatsApp", whatsAppRouter);
