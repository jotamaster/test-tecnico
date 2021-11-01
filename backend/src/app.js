import express from 'express';
import config from './config';
import cors from 'cors';

import CarsRoutes from './routes/cars.routes';
import SeederRoutes from './routes/seeder.routes';
import AuthRoutes from './routes/auth.routes';


const corsOptions = {
    origin: '*', 
    optionsSuccessStatus: 200
};


const app = express();

//settings

app.set('port', config.appPort || 3000);

app.use(express.json());
app.use(cors(corsOptions));

//routes
app.get('/',(req, res )=>{
    res.json({'message':'welcome autitos api'});
});

app.use('/api/cars',CarsRoutes);
app.use('/api/seeders',SeederRoutes);
app.use('/api/auth',AuthRoutes);

export default app;