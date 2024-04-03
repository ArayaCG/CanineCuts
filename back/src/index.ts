const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const server = express();

server.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});