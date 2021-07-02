const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Artwork, BlogPost, Comment, Recommendation, User, Image } = require('../../models');


//create a new recommendation 
router.post('/new', withAuth, async (req, res) => {
    try {
      const newRecommendation = await Recommendation.create({
          
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newRecommendation);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
 
  
  // view recommendation 
  router.get('/',withAuth, async (req, res) => {

    try {
      const recommendationData = await Recommendation.findAll();
  
      const recommendation = recommendationData.map((recommendation) => recommendation.get({ plain: true }));
  
      res.render('Recommendation', { 
        recommendation, 
        
      });
      console.log(res);
    } catch (err) {
      res.status(500).json(err);
    };
  });
  


  // edit recommendation by id 
  router.put('/:id', withAuth, async (req,res) => {
    try {
  
      const recommendationData = await Recommendation.update(
        {
            title: req.body.title,
            location: req.body.location,
            type: req.body.type,
            link: req.body.link,
        },
        {
        where: {
          id: req.params.id,
        }});
  
        res.status(200).json(recommendationData);
    } catch (err) {
      res.status(500).json(err);
    }
  })



  // delete recommendation by id
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const recommendationData = await Recommendation.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!recommendationData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(recommendationData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;