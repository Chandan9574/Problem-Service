const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title can not be empty']
    },
    description: {
        type: String, // it atually stores markdown that includes images and all
        required: [true, 'Description is required to explain Problem']
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required : [true, 'Difficulty can not be empty'],
        default: 'Easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: [true, 'Input can not be empty']
            },
            output: {
                type: String,
                required: [true, 'Output can not be empty']
            }
        }
    ],
    editorial:{
        type: String
    }
});

const Problem = mongoose.model('Problem', ProblemSchema);
module.exports = Problem;

/**
 * Array of Objects for testcases
 * [{input: '5', output: '11'}, {input: '7', output: '13'}]
 */