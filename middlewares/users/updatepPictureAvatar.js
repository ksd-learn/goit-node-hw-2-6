const path = require("path");
const Jimp = require('jimp');

const updatepPictureAvatar = async (req, res, next) => {
    try {
        // Открываем картинку с использованием Jimp
        const tempDir = path.join(__dirname, "../../", "temp");
        const imagePath = path.join(tempDir, req.file.filename);
        const image = await Jimp.read(imagePath);

        // Изменяем размер картинки на 250x250
        await image.resize(250, 250)

        // Сохраняем измененную картинку
        //const resizedImagePath = path.join(tempDir, req.file.filename);
        //await image.writeAsync(resizedImagePath);
        await image.writeAsync(imagePath);

        // Возвращаем ссылку на измененную картинку клиенту
        //res.json({ resizedImage: resizedImagePath });
        
        next()
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
};

module.exports = updatepPictureAvatar;
