import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import contactRoutes from "./routes/contactRoutes.js";
import anfrageRoutes from "./routes/anfrageRoutes.js"


const app = express();

// ======================
// MIDDLEWARES
// ======================
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));



// Now we can use JSON for everything else
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));



// ======================
// API ROUTES
// ======================
app.use("/api/contact", contactRoutes);
app.use("/api/anfrage", anfrageRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));