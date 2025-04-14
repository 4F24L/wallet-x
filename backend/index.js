const express = require('express');
const app = express();
const mainRouter = require('./routes/index');
const port = Number(process.env.PORT) || 3000;
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());

app.use(cors({
  origin: [ "https://wallet-x-app.vercel.app", "http://localhost:5173", ],
  methods : [ 'GET', 'POST', 'PUT', 'DELETE' ],
  credentials: true,  // allow session cookies from browser to pass through
}));




app.use("/api/v1", mainRouter);

app.get('/', (req, res) => {
    res.send('Hello to Wallet-X !');
});

app.listen(port , "0.0.0.0", () => {
  console.log(`Server is running on port http://localhost:${port}`);
});