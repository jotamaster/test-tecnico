import Car from '../models/Car';
import slugify from 'slugify';

export const findAllCars = async( req, res )=>{
    const cars = await Car.find();
    res.json(cars);
}

export const storeCar = async (req, res) => {

    let rawSlug = `${req.body.owner} ${req.body.brand} ${req.body.model} ${req.body.year}`;
    const slug = slugify(rawSlug.toLowerCase());
    const newCar = new Car ({
        description: req.body.description,
        owner: req.body.owner,
        brand: req.body.brand,
        year: req.body.year,
        images: req.body.images,
        slug,
        model: req.body.model,
        carClass: req.body.carClass,
    });
    const  carSaved = await newCar.save();
    res.json(carSaved);
}

export const findOneCar = async (req, res) => {
    const car = await  Car.findById(req.params.id);
    res.json(car);
}


export const findAllCarsByFilters = async (req, res) => {

    
    let filters = {};
    if(req.body.brands.length){
        filters['brand'] = {
            "$in" :  req.body.brands
        }
    }

    if(req.body.years.length){
        filters['year'] = {
            "$in" :  req.body.years
        }
    }

    if(req.body.carClasses.length){
        filters['carClass'] = {
            "$in" :  req.body.carClasses
        }
    }

    const car = await  Car.find(filters);
    res.json(car);

}

export const findOneCarBySlug = async (req, res) => {
    const car = await  Car.findOne({slug: req.params.slug});
    res.json(car);
} 



export const deleteCar = async (req, res) => {
    const car = await Car.findByIdAndDelete(req.params.id)
    res.json({
        message : `${car.title}  were deleted successfuly`
    });
}