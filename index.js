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

// Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
//   DbConnection.once("open", () => {
//     console.log("Database connected successfully");
//   });
// });
const PORT = process.env.PORT || 5000;

DbConnection.once("open", () => {
  console.log(`Server running on port ${PORT}`);
  console.log("Database connected successfully");
});
