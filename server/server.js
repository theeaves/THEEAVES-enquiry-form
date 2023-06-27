require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("API is running");
})


const PORT = process.env.PORT || 3500;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
