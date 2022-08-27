const router = require("express").Router();
const Message = require("../models/Message");

// create a message endpoint, needs to pass in conversationId, senderId and text message to this endpoint
router.post("/", async (req, res) => {
  const { conversationId, senderId, text } = req.body;
  try {
    const messageToBeCreated = new Message({
      conversationId: conversationId,
      senderId: senderId,
      text: text,
    });
    const savedMessage = await messageToBeCreated.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json(err);
  }
});

//get all messages from a conversation
router.get("/:conversationId", async (req, res) => {
  console.log(req.params);
  try {
    const messagesInConversation = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messagesInConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
