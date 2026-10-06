const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class ServiceUnavailable extends BaseError {
    constructor(details) {
        super(
            "Service Unavailable",
            StatusCodes.SERVICE_UNAVAILABLE,
            "The service is temporarily unavailable",
            details
        );
    }
}

module.exports = ServiceUnavailable;