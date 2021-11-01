import { Router } from 'express';

import * as Seeders from '../seeders/index';


const router = Router();


router.get('/cars', Seeders.carSeeder);

router.get('/user', Seeders.userSeeder);



export default router;