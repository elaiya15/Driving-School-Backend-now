import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, sparse: true },
        mobileNumber: { type: String, unique: true, sparse: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['Admin', 'Learner', 'Instructor'], required: true },
        refId: {
            type: mongoose.Schema.Types.ObjectId,
            refPath: 'role', // Dynamically reference based on the role field
            required: function () {
                return this.role !== 'Admin'; // refId is required for Learner and Instructor roles
            },
        },
        otp: { type: Number, default: null }, // Store OTP
        expiresAt: { type: Date, default: null }, // Store OTP expiry time
    },
    { timestamps: true }
);

// Middleware to hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export default mongoose.model('User', userSchema);
