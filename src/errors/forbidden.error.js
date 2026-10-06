const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Forbidden extends BaseError {
    constructor(details) {
        super(
            "Forbidden",
            StatusCodes.FORBIDDEN,
            "You do not have permission to perform this action",
            details
        );
    }
}

module.exports = Forbidden;