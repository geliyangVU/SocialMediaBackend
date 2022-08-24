const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //create new user
    //test
    const newUser = new User({
      username: "GeliYang",
      email: "geliyang1995@gmail.com",
      password: "passwordfornow",
    });

    //save user and respond
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
