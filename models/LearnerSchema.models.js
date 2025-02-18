import mongoose from 'mongoose';

const learnerSchema = new mongoose.Schema(
    {
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
            trim: true,
        },
        gender: {
            type: String,
            enum: ['Male', 'Female', 'Other'],
            required: true,
            trim: true,
        },
        bloodGroup: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        photo: {
            type: String, // Path or URL to the uploaded photo
            required: true,
        },
        signature: {
            type: String, // Path or URL to the uploaded signature
            required: true,
        },
        licenseNumber: {
            type: String,
            default: null, // Optional
        },
        llrNumber: {
            type: String,
            default: null, // Optional
        },
        admissionNumber: {
            type: String,
            required: true,
            unique: true,
        },
        course: {
            type: String,
            required: true, // Assuming course is selected from a dropdown
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Learner', learnerSchema);
