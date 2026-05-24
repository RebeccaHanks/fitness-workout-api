const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  exercises: { type: [String], required: true },
  muscleGroups: { type: [String], required: true },
  equipment: { type: [String], default: [] }
});

module.exports = mongoose.model('Workout', workoutSchema);