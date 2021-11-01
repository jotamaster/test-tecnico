import User from '../models/User';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {

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
}

export const login = async (req, res) => {

    // Validaciond e existencia
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).json({error: 'Usuario no encontrado'})

    // Validacion de password en la base de datos
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).json({error: 'Constraseña invalida'})

    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
    error: null,
    data: { token, name: user.name },
        message: 'Bienvenido'
    })
}
