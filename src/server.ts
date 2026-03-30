import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postRoutes from "./presentation/routes/postRoutes";
import authRoutes from "./presentation/routes/authRoutes";

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Forum Backend Running");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

startServer();