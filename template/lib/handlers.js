exports.home = (req, res) => res.render('home')
exports.about = (req, res) => res.render('about')
exports.notFound = (req, res) => res.render('404')

/* eslint-disable no-unused-vars */
exports.serverError = (_err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */
