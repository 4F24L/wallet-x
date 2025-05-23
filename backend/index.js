const express = require("express");
const app = express();
const mainRouter = require("./routes/index");
const port = Number(process.env.PORT) || 3000;
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

const allowedOrigins = [
  "https://wallet-x-app.vercel.app",
  "https://walletx.afzaldev.in",
  "https://walletx.afzalmir.me",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1", mainRouter);

app.get("/", (req, res) => {
  res.send("Hello to Wallet-X !");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
