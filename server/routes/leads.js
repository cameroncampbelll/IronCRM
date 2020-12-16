const router = require("express").Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

// lead model

const Lead = require("../models/Lead");

router.get("/", auth, async (req, res) => {
  try {
    const leads = await Lead.find({ user: req.user.id });
    res.json(leads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  auth,
  [
    check("name", "Please provide name").not().isEmpty(),
    check("phone", "Please provide phone").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, email, contactType, notes, isSold } = req.body;

    try {
      let lead = new Lead({
        user: req.user.id,
        name,
        phone,
        email,
        contactType,
        notes,
        isSold,
      });
      lead = await lead.save();
      res.json(lead);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.delete("/:id", auth, async (req, res) => {
  try {
    let lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ msg: "Lead not found" });
    }
    await Lead.findByIdAndRemove(req.params.id);
    res.send("Lead removed");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.put("/:id", auth, async (req, res) => {
  const { name, phone, email, contactType, notes, isSold } = req.body;
  const updatedLead = { name, phone, email, contactType, notes, isSold };
  try {
    let lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ msg: "Lead not found" });
    }
    lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { $set: updatedLead },
      { new: true }
    );
    res.send(lead);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
