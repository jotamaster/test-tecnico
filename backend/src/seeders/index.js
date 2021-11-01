import Car from '../models/Car';
import User from '../models/User';
import slugify from 'slugify';

const fakeCars = [
    {
        "description":"Vehiculo confortable",
        "owner":"Jorge Bustamante",
        "brand": "Changan",
        "year":"2015",
        "carClass":"sedan",
        "model": "NEW ALSVIN",
        "images": [
            "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-05-06%2012%3A56%3A35-exterior_2-min.jpg",
            "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-05-06%2012%3A58%3A19-exterior_4-min.jpg"
        ]
    },
    {
        "description":"Jeep semi nuevo bien cuidado",
        "owner":"Hernan Cardenas",
        "brand": "Changan",
        "year":"2015",
        "carClass":"jeep",
        "model": "CS35 PLUS",
        "images": [
            "https://derco-pe-prod.s3.amazonaws.com/medias/changan/migration/feature-image/cs35-plus/Changan_CS35_exterior.jpg",
            "https://derco-pe-prod.s3.amazonaws.com/medias/changan/migration/feature-image/cs35-plus/Changan_CS35_exterior2.jpg"
        ]
    },
    {
        "description":"Camioneta semi nueva cuidado",
        "owner":"Luis Castro",
        "brand": "Changan",
        "year":"2016",
        "carClass":"camioneta",
        "model": "N23 PLUS",
        "images": [
            "https://derco-pe-prod.s3.amazonaws.com/images/versions/2021-08-17-640x400.png",
            "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-08-14%2004%3A49%3A42-Caracteristica3_1280x661.jpg"
        ]
    },
    {
        "description":"Jeep Vitara semi nueva cuidado",
        "owner":"Nicolas Alegria",
        "brand": "Suzuki",
        "year":"2016",
        "carClass":"jeep",
        "model": "VITARA",
        "images": [
            "https://derco-pe-prod.s3.amazonaws.com/medias/suzuki/migration/front-image/nueva-vitara/nueva_vitara_rojo.jpg",
            "https://derco-pe-prod.s3.amazonaws.com/medias/suzuki/migration/outdoor-image/nueva-vitara/suzuki_nueva_vitara_galeria_4.jpg"
        ]
    },
    {
        "description":"auto DZIRE semi nueva cuidado",
        "owner":"Matias Aburto",
        "brand": "Suzuki",
        "year":"2019",
        "carClass":"sedan",
        "model": "DZIRE",
        "images": [
            "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-10-25%2007%3A36%3A50-Suzuki-Swift-Sedan-Dzire-de-costado-en-la-carretera-min.jpg",
            "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-10-25%2007%3A37%3A07-New-Suzuki-sedan-desde-atras-min.jpg"
        ]
    },
    {
        "description":"Mazda lujoso y bien cuidado",
        "owner":"Felipe Andrade",
        "brand": "Mazda",
        "year":"2018",
        "carClass":"jeep",
        "model": "CX-5",
        "images": [
            "https://derco-pe-prod.s3.amazonaws.com/medias/mazda/migration/feature-image/mazda-cx-5/Kodo-3.jpg",
            "https://derco-pe-prod.s3.amazonaws.com/medias/mazda/migration/feature-image/mazda-cx-5/gvectoring.jpg"
        ]
    },
    {
        "description":"Camioneta mazda BT-50",
        "owner":"Marcelo Hernandez",
        "brand": "Mazda",
        "year":"2018",
        "carClass":"camioneta",
        "model": "BT-50",
        "images": [
            "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-08-18%2006%3A02%3A06-DISE%C3%91O%20KODO.jpg",
            "https://derco-pe-prod.s3.amazonaws.com/images/carcontent/2021-08-18%2006%3A03%3A40-2021_Mazda_BT-50_21CY_CSA_C5_EXT_FQ_RUNNING_201215.jpg"
        ]
    },
    {
        "description":"Excelente y confiable vehiculo",
        "owner":"Nicolas Rubilar",
        "brand": "Renault",
        "year":"2017",
        "carClass":"sedan",
        "model": "LOGAN",
        "images": [
            "https://imcruz-bolivia.s3.amazonaws.com/images/carcontent/2020-05-28-logan_general_2_ig_w400_h225.jpg",
            "https://imcruz-bolivia.s3.amazonaws.com/images/carcontent/2020-05-28-logan_motor_ig_w400_h225.jpg"
        ]
    },
    {
        "description":"Excelente y confiable vehiculo",
        "owner":"Felipe Mancilla",
        "brand": "Renault",
        "year":"2016",
        "carClass":"camioneta",
        "model": "OROCH",
        "images": [
            "https://imcruz-bolivia.s3.amazonaws.com/images/carcontent/2020-05-28-duster-oroch-platon.jpg",
            "https://imcruz-bolivia.s3.amazonaws.com/images/carcontent/2020-05-28-logan_motor_ig_w400_h225.jpg"
        ]
    }
]

export const carSeeder =  async (req, res) => {
    fakeCars.map( (car) => {
        
        let rawSlug = `${car.owner} ${car.brand} ${car.model} ${car.year}`;
        const slug = slugify(rawSlug.toLowerCase());
        car['slug'] = slug;
        let  newCar = new Car (car);
        newCar.save();
    })
    res.json({
        message: "user seeds executed successfully"
    });
};

export const userSeeder =  async (req, res) => {
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json(
            {error: 'Email ya registrado'}
        )
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password
    });

    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(400).json({error});
    }
};
