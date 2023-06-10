const route = require("express").Router();
const bodyParser = require("body-parser");
const chatController = require("../controller/chat.controller");
route.post("/add-chat-info", bodyParser.json(), chatController.createChatInfo);
route.post("/chat", bodyParser.json(), chatController.addChat);
route.get("/chat", chatController.getChatByChatId);
module.exports = route;
