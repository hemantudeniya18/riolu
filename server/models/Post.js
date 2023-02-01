import mongoose from "mongoose";


const postSchema = new mongoose.Schema(
    {
        usedId : {
            type : String,
            required : true,
        },
        firstName : {
            type : String,
            required : true,
            min : 2,
            max : 40
        },
        lastName : {
            type : String,
            required : true,
            min : 2,
            max : 40
        },
        description : String,
        picturePath : {
            type : String,
            default : []
        },
        location : String,
        occupation : String,
        userPicturePath:String,
        likes:{
            type: Map,
            of : Boolean,
        },
        comments: {
            type : String,
            default : []
        }
    },
    { timestamps : true }
);

const Post = mongoose.model("Post", postSchema)
export default Post;