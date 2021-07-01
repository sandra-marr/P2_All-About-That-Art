//https://bezkoder.com/node-js-upload-image-mysql/

const multer = require("multer");

const artworkFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("artwork")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "./public/assets/images/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-AATA-${file.originalname}`); //AATA = All About That Art
  },
});

var uploadFile = multer({ storage: storage, fileFilter: artworkFilter });

module.exports = uploadFile;
