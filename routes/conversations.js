const router = require("express").Router();
const Conversation = require("../models/Conversation");

//post conversation--> Create a Conversation between two users, usersId passed in as senderId and receiverId
router.post("/", async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(201).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
