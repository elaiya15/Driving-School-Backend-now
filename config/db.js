import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const DbConnection = mongoose.connection;

DbConnection.on("error", (error) => {
  console.log(`Error: connecting to Mongoose database ${error}`);
});

export default DbConnection;
