import {Schema,model} from 'mongoose';


const carSchema = new Schema({
  
},
{
    versionKey: false,
    timestamps:true
});

export default model('Car', carSchema);
