import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import DbConnection from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Built-in body parser

// Routes
app.get("/", (req, res) => res.send("Server running"));
app.use("/api/admin", adminRoutes);
app.use("/api/user", adminRoutes);
app.use("/api/auth", adminRoutes);

// Connect to Database
DbConnection.once("open", () => {
  console.log("Database connected successfully");
});

// Export the app for Vercel (this is the key change)
export default app;
