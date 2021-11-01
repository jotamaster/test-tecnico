import { Router } from 'express';

import * as CarController from '../controllers/car.controller';


const router = Router();


router.get('/', CarController.findAllCars);

router.get('/:id', CarController.findOneCar);

router.get('/slug/:slug', CarController.findOneCarBySlug);

router.post('/', CarController.storeCar );

router.post('/filters', CarController.findAllCarsByFilters );

router.delete('/:id', CarController.deleteCar);


export default router;