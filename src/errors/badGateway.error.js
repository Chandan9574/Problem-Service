const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class BadGateway extends BaseError {
    constructor(details) {
        super(
            "Bad Gateway",
            StatusCodes.BAD_GATEWAY,
            "The server received an invalid response from an upstream server",
            details
        );
    }
}

module.exports = BadGateway;