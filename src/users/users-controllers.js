
exports.me = (req, res) => {
    res.json(req.user)
}

exports.updateMe = (req, res) => {
    res.status(200).send('done')
}
