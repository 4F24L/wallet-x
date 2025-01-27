const express = require('express');
const app = express();
const mainRouter = require('./routes/index');
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // same as bodyParser.json()



app.use("/api/v1", mainRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});