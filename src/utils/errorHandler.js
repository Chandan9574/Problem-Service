const BaseError = require('../errors/base.error');
const {StatusCodes} = require('http-status-codes');

// the below one is not a normal middleware
// it is an error-handling Middleware
function errorHandler(err, req, res, next){
    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} // it is an exception that's why i can not print any data
        });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR). json({
        success: false,
        message: "Something Went Wrong",
        error: err,
        data: {}
    });
}

module.exports = errorHandler;