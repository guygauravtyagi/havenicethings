validateLoginDetails = (data) => {
    let respose = {};
    if (true) {
        respose = {
            status: 'success',
            code: '200',
        }
    }
    return respose;
}

module.exports = function (app) {
    app.post('/login', function (req, res) {
        res.json(validateLoginDetails(req.body));
    });
}