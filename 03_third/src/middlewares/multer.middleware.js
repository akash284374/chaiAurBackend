import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.originalname); // you can also use uniqueSuffix if needed
  }
});

// ❌ Don't call `.fields()` here
export const upload = multer({ storage });
