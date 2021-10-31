import express from 'express';
import config from './config';


const app = express();

//settings

app.set('port', config.appPort || 3000);

app.use(express.json());

app.get('/',(req, res )=>{
    res.json({'message':'welcome autitos api'})
});

export default app;