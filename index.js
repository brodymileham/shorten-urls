const express = require('express');
const connectDB = require("./config/db");

const app = express();

//Connect to the Database
connectDB();

app.use(express.json({extended: false}));

//define routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));