const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // Serve all files in the directory

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});