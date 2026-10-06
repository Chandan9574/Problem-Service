const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(resource) {
        super(
            "Not Found",
            StatusCodes.NOT_FOUND,
            `${resource} not found`,
            {}
        );
    }
}

module.exports = NotFound;