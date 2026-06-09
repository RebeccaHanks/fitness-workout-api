const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

const {
    getWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require ('../controllers/workoutController');

router.get('/', getWorkouts);
router.get('/:id', getWorkoutById);
router.post('/', protect, createWorkout);
router.put('/:id', protect, updateWorkout);
router.delete('/:id', protect, deleteWorkout);

module.exports = router;