const BaseError = require('./base.error');
const { StatusCodes } = require('http-status-codes');

class GatewayTimeout extends BaseError {
    constructor(details) {
        super(
            "Gateway Timeout",
            StatusCodes.GATEWAY_TIMEOUT,
            "The upstream server failed to respond in time",
            details
        );
    }
}

module.exports = GatewayTimeout;