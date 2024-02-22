exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.json({
            success: false,
            message: "Please Login First"
        })
    } else {
        return next()
    }
}