const fs = require("fs/promises");
const path = require("path");
const { Users } = require("../../models/users");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    try {

        const { _id } = req.user;
        const { path: tempUpload, originalname } = req.file;
        const extention = originalname.split(".").pop();
        const filename = `${_id}.${extention}`;
        const resultUpload = path.join(avatarsDir, filename);
        await fs.rename(tempUpload, resultUpload);
        const avatarURL = path.join("avatars", filename);
        await Users.findByIdAndUpdate(_id, {avatarURL}, { new: true });

        res.status(200).json(avatarURL);
    } catch(error) {
        return res.status(500).json({ message: "file not write" });
    }
}

module.exports = updateAvatar;