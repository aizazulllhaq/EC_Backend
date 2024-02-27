const { User } = require('../models/userModel');

exports.getUserDetail = async (req, res) => {
    try {
        let { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.json({
                success: false,
                msg: "User Doesn't Exists"
            })
        }
        res.json({
            success: true,
            msg: "User Found",
            data: user
        })

    } catch (error) {
        console.log(error);
    }
}

exports.signUpPage = (req, res) => {
    res.json({
        success: true,
        data: "SignUp page"
    })
}

exports.signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const registerUser = await User.register({ username, email }, password);
        // console.log(registerUser)

        req.login(registerUser, (err) => {
            if (err) {
                return err;
            } else {
                res.redirect('/users/login');
            }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            data: error.message
        })
    }
}


exports.loginPage = (req, res) => {
    res.status(200).json({
        success: true,
        data: "Login Page",
    })
}

exports.login = (req, res) => {
    res.json({
        success: true,
        data: "post login successfull",
        user: req.user
    })
}


exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) return err;
        res.json({
            success: true,
            message: "Logout Successfull"
        })
    })
}