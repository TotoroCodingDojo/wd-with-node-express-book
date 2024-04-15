const pathUtils = require('path')
const fs = require('fs')

//
const dataDir = pathUtils(__dirname, '..', 'data')
const photoDir = pathUtils(dataDir, 'photo')
if(!fs.existsSync(dataDir)) fs.mkdirSync(dataDir)
if(!fs.existsSync(photoDir)) fs.mkdirSync(photoDir)


//
function saveEntry(name, photoPath, dir){

}

// 
const { promisify } = require('util')
const mkdir = promisify(fs.mkdir)
const rename = promisify(fs.rename)

/**
 * Handles a request made to the Express server.
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {Object} fields - The fields object containing parsed form data.
 * @param {Object} files - The files object containing uploaded files.
 */
exports.api.UploadPhoto = async (req, res, fields, files) => {
    const photo = files.photo[0]
    const dir = photoDir + '/' + Date.now()
    const path = dir + '/' + photo.originalFilename

    await mkdir(dir)
    await rename(photo.path, path)

    saveEntry('profile-photos', )
}