import mongoose from 'mongoose'

const instructorSchema  = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    fathersName: {
        type: String,
        required: true,
        trim: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{10}$/, // Regex for a 10-digit phone number
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        required: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    photo: {
        type: String, // URL or file path for the uploaded photo
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model
    }
    // username: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    // },
    // password: {
    //     type: String,
    //     required: true,
    // },
}, { timestamps: true });

export default mongoose.model('Instructor', instructorSchema );
