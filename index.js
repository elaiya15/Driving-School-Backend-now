import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import connectDB from "./config/db.js";
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

// Database Connection
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
