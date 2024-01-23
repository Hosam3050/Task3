

    const Blogs=require('../modules/Blogs')


// /********************************************************************************************* */
// // -------------------------------Creat Blogs-----------------------------------------------------


    const createBlogs = async (_title,_content,_image,_author,_tags) => {
        try {
            let data = await Blogs.create({
                title:_title,
                content:_content,
                image:_image,
                author:_author,
                tags:_tags});
                
            if (data) {
                console.log('Blogs', data)
            }
            else {
                console.log("error");
            }
        }
        catch (e) {
            console.log(e);
        }
    
    } 



/***********************Shwo Blogs******************************** */

const getAllBlogs = async () => {
    try {
        let data = await Blogs.find({});
        if (data) {
            console.log('Blogs', data)
            return data;
        }
        else {
            console.log("error");
        }
    }
    catch (e) {
        console.log(e);
    }

}


















    
// /*************----Exports----************ */


module.exports = { createBlogs,getAllBlogs };

