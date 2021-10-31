import Car from '../models/Car';

export const findAllCars = async( req, res )=>{
    const cars = await Car.find();
    res.json(cars);
}

export const storeCar = async (req, res) => {
    const newCar = new Car ({
        title: req.body.title,
        owner: req.body.owner,
        brand: req.body.brand,
        year: req.body.year
    });
    const  carSaved = await newCar.save();
    res.json(carSaved);
}

export const findOneCar = async (req, res) => {
    const car = await  Car.findById(req.params.id);
    res.json(car);
} 



export const deleteCar = async (req, res) => {
    const car = await Car.findByIdAndDelete(req.params.id)
    res.json({
        message : `${car.title}  were deleted successfuly`
    });
}