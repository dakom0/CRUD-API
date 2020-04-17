const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/lists", {useNewUrlParser:true})

module.exports = mongoose;