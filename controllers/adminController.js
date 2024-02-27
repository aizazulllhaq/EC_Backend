const { User } = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({
            success: true,
            msg: "Getting All Users",
            data: users
        })
    } catch (error) {
        res.json({
            success: false,
            msg: "Some Error Occurred",
            data: error.message
        })
    }
}