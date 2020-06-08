var Exercise = require('../models/exercise.model');

module.exports = {
  create,
  Exercise
};

async function create(req, res) {
  console.log('user: ', req.user)
  req.body.user=req.user._id
  try {
    await Exercise.create(req.body);
    
    
  } catch (err) {
    res.json({err});
  }
}







