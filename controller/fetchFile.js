let fs = require('fs');
let path = require('path');
let checkFile = require('../services/checkFile');
let hashDecodeFun = require('../services/hashFunction');

module.exports = {
    fetchFile: (req, res, next) => {
        let hashName = req.params.link;
        let folderName = hashDecodeFun.decodingFun(hashNamee);
        folderName = folderName.split(':');
        folderName = folderName[0];
        console.log('Folder Name: ', folderName);
        fileUrl = '../public/uploads/' + folderName + '/' + hashName;
        if (checkFile(fileUrl)) {
            res.sendFile(path.resolve(__dirname, fileUrl));
            console.log('OK Found');
        } else {
            res.sendFile(path.resolve(__dirname, '../public/uploads/brokimage.png'))
        }
    }
}