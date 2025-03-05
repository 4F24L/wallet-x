const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '../.env' });


mongoose.connect(process.env.MONGO_DB_STRING)
    .then(() => console.log('Connected to MongoDB successfully.'))
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error.message);
        process.exit(1); // Exit process if connection fails
    });

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },    
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, //ref to User schema
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const UserModel = mongoose.model('User', userSchema);
const Account = mongoose.model("Account", accountSchema)

module.exports = {
    UserModel, 
    Account
}; 