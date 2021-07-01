const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');

//create a new blogPost
router.post('/blogPost/new', withAuth, async (req, res) => {
    try {
      const newPost = await BlogPost.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
 
  
  // view a post by the post id and join with  user model
  router.get('/blogPost/:id',withAuth, async (req, res) => {

    try {
      const postData = await BlogPost.findByPk(req.params.id, { 
        include: [ 
            {
                model: BlogPost,
                attributes: [
                  'id',
                  'post_body',
                  'post_date',
                  'user_id',
                ],
              },
          {
            model: User,
            attributes: [
              'id',
              'user_name',
            ],
          },
        ],
      });
  
      const posts = postData.get({ plain: true });
  
      res.render('artists', { 
        posts, 
        
      });
      console.log(res);
    } catch (err) {
      res.status(500).json(err);
    };
  });
  


  // edit blogPost by id 
  router.put('/blogPost/:id', withAuth, async (req,res) => {
    try {
  
      const postData = await BlogPost.update(
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
      const blogPostData = await BlogPost.destroy({
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