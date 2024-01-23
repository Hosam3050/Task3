const express = require('express');
const blogsController = require('../controllers/BlogsControl');
const route = express.Router();
const multer = require('multer')
const path = require('path');
// const Blogs = require('../modules/Blogs');



const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, "..","upload"));
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }

})

const upload = multer({ storage: storage });


route.get('/', (req, res) => {
    res.send('Welcome....')
})




/***********************************************************************************************/
// ------------------------------------------Creat------------------------------------------------

route.post("/creat-blogs",upload.single('image'), async (req, res) => {

    try {
        const image = req.file.filename;
        const {title,content,author,tags} = req.body;
        let data = await blogsController.createBlogs(title,content,image,author,tags);
        if (data != "error") {
            res.send('creating Done...')
            console.log(data)
        }
        else {
            res.status
            (403).send("not found")
        }
    }
    catch (e) {
        res.status(500).send('server error');
        console.log(e)
    }

}
)



/**********************************************************/
route.get("/getAllblogs", async (req, res) => {

    try {
        let data = await blogsController.getAllBlogs();
        if (data != "error") {
            res.json({
                Blogs: data,
                msg: "ok",
                status: 200
            });
            console.log(data)
        }
        else {
            res.status(403).send("not found")
        }
    }
    catch (e) {
        res.status(500).send('server error');
        console.log(e)
    }

})


module.exports = route;
