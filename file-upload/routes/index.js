const path = require('path');
const singleFileUpload = require('./single');
const multipleFileUpload = require('./multiple');

module.exports = app => {
    app.get('/', (req, res) => res.sendFile(path.resolve('public/index.html')));
    app.use('/upload/single', singleFileUpload);
    app.use('/upload/multiple', multipleFileUpload);
};