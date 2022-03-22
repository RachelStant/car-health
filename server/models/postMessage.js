import mongoose from "mongoose";



// Create schema
const postSchema = new mongoose.Schema({
    serviceTitle: String,
    serviceDescription: String,
    serviceShop: String,
    serviceCost: String,
    serviceDate: { type: Date, default: new Date() },
    userServiceDate: { type: Date },
    creator: String,
    tags: [String],
    selectedFile: String

})


//Create post model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

