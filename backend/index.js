const express = require("express");
const app = express();
const mainRouter = require("./routes/index");
const port = Number(process.env.PORT) || 3000;
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

const allowedOrigins = (process.env.CORS_ALLOWED_ORIGINS || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) =>
      cb(null, !origin || allowedOrigins.includes(origin)),
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.options("*", cors());

app.use("/api/v1", mainRouter);

app.get("/", (req, res) => {
  res.send("Hello to Wallet-X !");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
