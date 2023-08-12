const path = require("path");
const Jimp = require('jimp');

const updatepPictureAvatar = async (req, res, next) => {
    try {
        const tempDir = path.join(__dirname, "../../", "temp");
        const imagePath = path.join(tempDir, req.file.filename);
        const image = await Jimp.read(imagePath);

        await image.resize(250, 250)
        await image.writeAsync(imagePath);

        next()
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};

module.exports = updatepPictureAvatar;
