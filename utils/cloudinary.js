const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "AllAboutThatArt",
    allowedFormats: ["png", "jpeg", "jpg"],
    public_id: (req, file) => {
      `${Date.now()}-AATA-${file.originalname}`;
    },
  },
});

module.exports = { cloudinary, storage };
