const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class Unauthorized extends BaseError {
    constructor(details) {
        super(
            "Unauthorized",
            StatusCodes.UNAUTHORIZED,
            "Authentication is required",
            details
        );
    }
}

module.exports = Unauthorized;