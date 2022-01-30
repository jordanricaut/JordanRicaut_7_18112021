const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif'
};


// Mise en place du formatage du jour
let date1 = new Date();
let dateLocale = date1.toLocaleString('fr-FR',{
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
});
const dateNow = dateLocale.split('/').join('');


const storagePost = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images/post');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const nameWithoutExt = name.split('.')[0]
    const extension = MIME_TYPES[file.mimetype];
    callback(null, nameWithoutExt + '_' + dateNow + '.' + extension);
  }
});

module.exports.storagePost = multer({storage: storagePost}).single('imageUrl');
