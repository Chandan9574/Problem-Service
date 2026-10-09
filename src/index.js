const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const NotFoundError = require('./errors/notImplemented.error');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If an request comes and route continues with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({ message: 'Problem Service is alive' })
});

app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`server started at PORT: ${PORT}`);
    await connectToDB();
    console.log("Successfully connected to DB");
});