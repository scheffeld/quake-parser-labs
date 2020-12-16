const upload = (req, res) => {
  const { file } = req;
  return res.status(201).json({
    originalFileName: file.originalname,
    newFileName: file.filename,
    type: file.mimetype,
    size: file.size,
    upload: true,
  });
};

module.exports = { upload };
