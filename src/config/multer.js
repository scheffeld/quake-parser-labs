const multer = require('multer');
const path = require('path');

const directory = path.resolve(__dirname, '../data');

module.exports = {
  dest: directory,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, directory);
    },
    filename: (req, file, cb) => {
      const fileName = 'games.log';
      cb(null, fileName);
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'text/plain',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
};
