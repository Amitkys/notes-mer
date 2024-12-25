const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: String,
    email: String,
    password: String,
    createdAt: {type: Date, default: new Date()}
})
const User = mongoose.model("User", UserSchema);

module.exports = User;