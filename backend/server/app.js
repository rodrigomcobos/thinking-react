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

import handlerFunctions from './controller.js';

//set up routes
//Before create endpoints, address the following
//-What is the purpose of this endpoint?
//-Will I need any queries/params/body objects?
//-What will the endpoint string loo like? (url)
//-What should the response look like? (keep consistent)

//First endpoint (GET)
//-To serve up an array of our invoice data (TEST_DATA)
//-No additional client info needed
//-'/api/invoices' (--> full url here when hosted locally: http://localhost:3000/api/invoices)
//-{ message: '', invoices: [] --> res.send({ message: '', invoices: [] })}

app.get('/api/invoices', handlerFunctions.getInvoices);

//open up door to server
ViteExpress.listen(app, 3000, () =>
  console.log('server running on http://localhost:3000')
);
