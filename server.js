const express = require('express');
const app = express();
app.get('/', (req, res) => {
	res.send(`<h1>This is a "New Thing"!</h1>`);
});
app.listen(3000);
