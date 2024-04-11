const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

const Insert = async (userData) => {
    try {
        const newUser = new User(userData);
        await newUser.save();
        console.log('User inserted:', newUser);
    } catch (error) {
        console.error('Error inserting user:', error);
    }
};
module.exports = { User, Insert };
