import express from "express";
import adminController from "../controllers/adminController.js";
import jwtAuth from "../middlewares/jwtMiddleware.js";

const router = express.Router();

// Routes
router.post("/login", adminController.login);
router.post("/forgot-password", adminController.forgotPassword);
router.post("/verify-otp", adminController.verifyOtp);
router.post("/change-password", adminController.changePassword);
router.post("/create-user", jwtAuth(["Admin"]), adminController.createUser);

export default router;
