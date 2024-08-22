import express from 'express';
import morgan from 'morgan'; //helps with debugging, not needed in production
import ViteExpress from 'vite-express';

//Set up express app
const app = express();

//set up middleware
app.use(morgan('dev')); // while in dev environment, use morgan to log requests
app.use(express.urlencoded({ extended: false })); //allows us to interpret body objs from POST requests
app.use(express.static('public')); //for certain imports check public directory first
app.use(express.json()); //allows us to interpret body objs from POST requests

//set up global variable to mock a DB
const TEST_DATA = [
  { id: 0, description: 'Content plan', rate: 50, hours: 4 },
  { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
  { id: 2, description: 'Website design', rate: 50, hours: 5 },
  { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

//set up routes

//open up door to server
ViteExpress.listen(app, 3000, () => console.log('server running on port 3000'));
