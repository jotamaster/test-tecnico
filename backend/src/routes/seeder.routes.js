import { Router } from 'express';

import * as Seeders from '../seeders/index';


const router = Router();


router.get('/cars', Seeders.carSeeder);

export default router;