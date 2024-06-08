const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const People = mongoose.models.People || mongoose.model("People", peopleSchema);
module.exports = People;
