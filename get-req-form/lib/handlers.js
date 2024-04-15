exports.home = (req, res) => res.render('home')
exports.about = (req, res) => res.render('about')
exports.nameForm = (req, res) => res.render('name-form')
exports.name = (req, res) => res.render('name', { name: req.query.name, last_name: req.query.last_name })
exports.notFound = (req, res) => res.render('404')

/* eslint-disable no-unused-vars */
exports.serverError = (_err, req, res, next) => res.render('500')
/* eslint-enable no-unused-vars */
