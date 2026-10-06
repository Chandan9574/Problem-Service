const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Conflict extends BaseError {
    constructor(details) {
        super(
            "Conflict",
            StatusCodes.CONFLICT,
            "The request conflicts with the current state of the resource",
            details
        );
    }
}

module.exports = Conflict;