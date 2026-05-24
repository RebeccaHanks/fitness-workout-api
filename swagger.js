const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Fitness Workout API',
    description: 'Fitness workout planner API'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/workoutRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);