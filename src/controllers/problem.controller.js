const {StatusCodes} = require('http-status-codes');
const notImplemented = require('../errors/notImplemented.error');
const BadRequest = require('../errors/badrequest.error');

function pingProblemController(req, res){
    return res.json({message: 'Problem Controller is up'});
}

function addProblem(req, res, next){
    try{
        throw new notImplemented('Add Problem');
    }catch(error){
        next(error);
    }
}

function getProblem(req, res){
    try{
        throw new notImplemented('get Problem');
    }catch(error){
        next(error);
    }
}

function getProblems(req, res){
    try{
        throw new notImplemented('get Problems');
    }catch(error){
        next(error);
    }
}

function updateProblem(req, res){
    try{
        throw new notImplemented('Update Problem');
    }catch(error){
        next(error);
    }
}

function deleteProblem(req, res){
    try{
        throw new notImplemented('Delete Problem');
    }catch(error){
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController
}