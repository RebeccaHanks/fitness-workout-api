const workout = require('../models/workout');

const getWorkouts = async (req, res) => {
    try {
        const workouts = await workout.find();
        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const getWorkoutById = async (req, res) => {
    try {
        const workout = await workout.findById(req.params.id);
        if (!workout) return res.status(404).json({ message: 'cannot find workout'});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const createWorkout = async (req, res) => {
    try {
        const workout = await workout.create(req.body);
        res.status(201).json(workout);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

const updateWorkout = async (req, res) => {
    try {
        const workout = await workout.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!workout) return res.status(404).json({ message: 'cannot find workout'});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteWorkout = async (req, res) => {
  try {
    const workout = await workout.findByIdAndDelete(req.params.id);
    if (!workout) return res.status(404).json({ message: 'cannot find workout' });
    res.status(200).json({ message: 'workout deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout
};