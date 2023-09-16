const Post = require('../models/posts');

addPostForm = (req, res) => {
    res.render('add-post');
}

// Create
addPost = async(req, res) => {
    try{
        const data = req.body;
        const post = await new Post({
            title : data.title,
            content : data.content
        });
        await post.save();
        res.redirect('/');
        
    }catch(error){
        console.log(error.message);
    }
}

// Get all posts
getAllPost = async(req, res) => {
   const posts = await Post.find({}).exec();
   res.render('post-list', { posts: posts });
}

// Edit 
editPostForm = async(req, res)=>{
    const id = req.params.id;
    const post = await Post.findById(id);
    res.render('edit-post', {post:post});
    
}

// Update
updatePost = async(req, res) => {
    const id = req.params.id;
    const data = req.body;
    const post = await Post.findByIdAndUpdate(id, {
        title: data.title,
        content: data.content
    }, {new:true});
    res.redirect('/');
}

// Delete
deletePost = async(req, res) => {
    const id = req.params.id;
    const post = await Post.findByIdAndRemove(id);
    res.redirect('/');
}

module.exports = {
    addPostForm,
    addPost,
    getAllPost,
    editPostForm,
    updatePost,
    deletePost
}