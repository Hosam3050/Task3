
    const mongoose=require('mongoose');


    const blogsSchema= mongoose.Schema({
        
        title:{
            type:String,
            require:true
        },
        content:{ 
            type:String
        },
        image:{
            type:String
        },
        author:{
            type:String,
            require:true
        },
        tags:{
            type:[String]
        },
        userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
}
    }); 

    const Blogs = mongoose.model('Blogs',blogsSchema);
    module.exports = Blogs;
