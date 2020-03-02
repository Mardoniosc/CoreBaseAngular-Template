const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(`${__dirname}/dist/core-base-angular-template`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/core-base-angular-template/index.html`));
});

app.listen(process.env.PORT || 8080);
