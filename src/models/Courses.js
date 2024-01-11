import mongoose from "mongoose";
const { Schema } = mongoose;

const CourseSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    maxUsers:{
        type:Number,
        required:true
    },
    dates:{
        type:[String],
        required:true
    },
    meetings: [{
        date: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }]
},


{timestamps:true})

export default mongoose.models.Courses || mongoose.model('Courses', CourseSchema);