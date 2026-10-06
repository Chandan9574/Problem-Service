const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const NotFoundError = require('./errors/notImplemented.error');
const errorHandler = require('./utils/errorHandler');

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

app.listen(PORT, () => {
    console.log(`server started at PORT: ${PORT}`);

    // we use throw here not return because i wnat to give signal that an error is happening,
    // not what to return from the function
    // when we want to return from any function then only use return
    // else use throw for sending signals

    // try {
    //     throw new NotFoundError({});
    // }
    // catch (error) {
    //     console.log("Something Went Wrong", error.name, error.stack);
    // } finally {
    //     console.log("Executed Finally");
    // }
});