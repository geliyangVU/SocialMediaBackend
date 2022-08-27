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

module.exports = router;
