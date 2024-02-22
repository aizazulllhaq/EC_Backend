exports.home = ((req, res) => {
    res.json({
        success: true,
        data: "Home Page",
        user: req.user
    })

})