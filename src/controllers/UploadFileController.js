module.exports = {
    upload(req, res){
        try{
            const { file } = req
            return res.status(201).json({
                originalFileName: file.originalname,
                newFileName: file.filename,
                type: file.mimetype,
                size: file.size,
                upload: true
            })
        }
        catch(error){
            return res.status(400).json(error)
        }
    }
}