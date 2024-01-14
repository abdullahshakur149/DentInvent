const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { bgCyan } = require("colors");

// Initialize server and middleware
const connectDb = require("./config/config");

// dotenv config
dotenv.config();

// db config
connectDb();

// Create an Express app
const app = express();

// Middlewares
const corsOptions = {
  origin: 'https://dent-invent-eefl.vercel.app/login',
  credentials: true,
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoute"));

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`.bgCyan.white);
});
