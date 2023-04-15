import mongoose from "mongoose";

const assignmentSchema = mongoose.Schema(
    {
        title: {
            type:String, 
            required: true,
        }, 
        content: {
            type:String, 
            required:true,
        }, 
        category: {
            type:String,
            required:true,
        }, 
        student: {
            type: mongoose.Schema.Types.ObjectId, 
            required:true,
            ref: "Student",
        },
    }, 
    {
        timestamps:true,
    }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment; 