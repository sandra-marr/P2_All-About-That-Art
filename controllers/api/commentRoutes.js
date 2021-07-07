const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');


//create a new comment
router.post('/new/:id', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        comment_body: req.body.comment_body,
        user_id: req.session.user_id,
        art_id: req.params.id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // edit comments by id 
  router.put('/:id', withAuth, async (req,res) => {
    try {
  
      const commentData = await Comment.update(
        {
            comment_body: req.body.comment_body,
        },
        {
        where: {
          id: req.params.id,
        }});
  
        res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  })



  // delete comments by id
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  




module.exports = router;