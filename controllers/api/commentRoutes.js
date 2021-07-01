const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');


//create a new comment
router.post('/comment/new', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
          include: [
            {
                model: Artwork,
                attributes: [
                  'id',
                  'user_id',
                ],
              },

          ],
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
 
  
  // view comments and join with  Artwork model
  router.get('/Artwork/:id',withAuth, async (req, res) => {

    try {
      const commentData = await Comment.findAll({ 
        include: [ 
            {
                model: Artwork,
                attributes: [
                  'id',
                ],
              },
            ],
            where: {
                art_id: req.params.id,   
            },
      });
  
      const comment = commentData.map((comment) => comment.get({ plain: true }));
  
      res.render('gallery', { 
        comment, 
        
      });
      console.log(res);
    } catch (err) {
      res.status(500).json(err);
    };
  });
  


  // edit blogPost by id 
  router.put('/blogPost/:id', withAuth, async (req,res) => {
    try {
  
      const postData = await Post.update(
        {
          post_body: req.body.post_body,
        },
        {
        where: {
          id: req.params.id,
        }});
  
        res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  })



  // delete posts by post id
  router.delete('/blogPost/:id', withAuth, async (req, res) => {
    try {
      const blogPostData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogPostData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(blogPostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  




module.exports = router;