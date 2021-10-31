import {Schema,model} from 'mongoose';


const carSchema = new Schema({
    title:{
        type: String,
        required:true,
        trim:true
    },
    owner:{
        type: String,
        required:true,
        trim:true
    },
    brand:{
        type: String,
        required:true,
        trim:true
    },
    year:{
        type: String,
        required:true,
        trim:true
    },
    carClass:{
        type: String,
        required:true,
        trim:true
    },
    model:{
        type: String,
        required:true,
        trim:true
    },
    images:{
        type:[String],
        required:true,
        trim:true
    }
},
{
    versionKey: false,
    timestamps:true
});

export default model('Car', carSchema);
