const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const userData = await User.findAll({});
    
        // Serialize data so the template can read it
        const users = userData.map((user) => user.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.status(200).json(userData)
    }
    catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;