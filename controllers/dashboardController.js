exports.dashboard = ((req, res) => {
    res.json({
        success: true,
        data: "Dashoard Page",
        user: req.user
    })

})