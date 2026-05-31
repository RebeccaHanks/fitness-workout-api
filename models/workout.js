const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Title is required'] 
  },

  description: { 
    type: String, 
    required: [true, 'Description is required'] 
  },

  difficulty: { 
    type: String, 
    required: [true, 'Difficulty is required'],
    enum: ['easy', 'medium', 'hard']
  },

  durationMinutes: { 
    type: Number, 
    required: [true, 'Duration is required'],
    min: [1, 'Duration must be at least 1 minute']
  },

  exercises: { 
    type: [String], 
    required: [true, 'Exercises are required'],
    validate: {
      validator: function(value) {
        return value.length > 0;
      },
      message: 'At least one exercise is required'
    }
  },

  muscleGroups: { 
    type: [String], 
    required: [true, 'Muscle groups are required'],
    validate: {
      validator: function(value) {
        return value.length > 0;
      },
      message: 'At least one muscle group is required'
    }
  },

  equipment: { 
    type: [String], 
    default: [] 
  }
});

module.exports = mongoose.model('Workout', workoutSchema);