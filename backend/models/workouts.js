const mongoose= require('mongoose');

const Schema  =  mongoose.Schema;

const workoutSchema = new Schema({
    username: {type: String,  required: true},
    description: {type: String, required: true},
    duration:{type: Number, required:  true},
    date: {type:date, required: true}
}, {
    timestamps: true,
});

const Exercise= mongoose.model('Workout', workoutSchema);
module.exports = Exercise;