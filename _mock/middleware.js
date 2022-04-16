module.exports = (req, res, next) => {
    if (req.method === 'POST') {
        req.method = 'GET';
        req.originalUrl = req.originalUrl + '_post';
    }

    setTimeout(() => {
        next();
    }, 500);
};