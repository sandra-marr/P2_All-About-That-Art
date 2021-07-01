const fs = require("fs");
const { Artwork } = require("../models");

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Artwork.create({ //need to add inthe user_id and category_id here??
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "./public/assets/images/" + req.file.filename
      ),
    }).then((artwork) => {
      fs.writeFileSync(
        __basedir + "./public/assets/tmp/" + artwork.name,
        artwork.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};