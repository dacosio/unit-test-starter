const mongoose = require("mongoose");

let mongoDB = process.env.REACT_APP_MONGO_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
