const express = require('express');
const app = express();
const mainRouter = require('./routes/index');
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors({
  origin: "https://wallet-x.up.railway.app",  
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
})); 
app.use(express.json()); 



app.use("/api/v1", mainRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port http://localhost:${port}`);
});