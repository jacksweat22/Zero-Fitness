const mongoose= require('mongoose');

const Schema  =  mongoose.Schema;

const workoutSchema = newSchema({
    username: {type: String,  required: true},
    description: {type: String, required: true},
    duration:{type: Number, required:  true},
    date: {type:date, required: true}
}, {
    timestamps: true,
});

const exercise= mongoose.model('Workout', workoutSchema);
module.exports = Exercise;