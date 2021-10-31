import express from 'express';
import config from './config';

import CarsRoutes from './routes/cars.routes';


const app = express();

//settings

app.set('port', config.appPort || 3000);

app.use(express.json());

//routes
app.get('/',(req, res )=>{
    res.json({'message':'welcome autitos api'})
});

app.use('/api/cars',CarsRoutes);

export default app;