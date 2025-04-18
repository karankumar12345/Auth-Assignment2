import express from "express";
import cors from "cors";

import { errorMiddleware } from "@/middlewares/error.js";

import dotenv from "dotenv";
import router from "./routes/user";

// import router from "./routes/user";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = process.env.PORT || 3000;


const app = express();
const corsOptions = {
  origin: "*", // Allow all origins (Replace with frontend URL for security)
  methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
};
app.use(cors(corsOptions));

app.use(express.json()); // This enables JSON parsing in requests


app.use("/api/v1/user",router)


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Add your additional routes here



app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in "  + " Mode.")
);
