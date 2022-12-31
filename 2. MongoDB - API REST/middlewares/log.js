function log(req, res, next) {
    console.log('Log request:', `${req.baseUrl}, ${req.path}, ${req.method}`);
    next();
}

module.exports = log;