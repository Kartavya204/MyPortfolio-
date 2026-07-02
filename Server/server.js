require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");

const connectDB = require("./config/db");
const reviewRoutes = require("./Routes/reviewRoutes");
const app = express();

connectDB();

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());
app.use("/api/reviews",reviewRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Portfolio API Running 🚀"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
