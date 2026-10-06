const BaseError = require("./base.error");
const {StatusCodes} = require('http-status-codes');

class notImplemented extends BaseError {
    constructor(methodName) {
        super("Not Implemented", StatusCodes.NOT_IMPLEMENTED, `${methodName} Not Implemented`, {});
    }
}

module.exports = notImplemented;