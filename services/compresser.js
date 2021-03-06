
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle=require('imagemin-gifsicle');
function compresser(src,dest,quality=70){
    return new Promise((resolve,reject)=>{
        console.log(quality);
        imagemin([src], dest, {
            plugins: [
    
                imageminMozjpeg({quality:parseInt(quality)}),
            ]
        }).then(files => {
            console.log(files);
            files.forEach((file)=>{
                
                resolve(file.path);
            })
        }).catch((err)=>{
            console.log(err);
            reject(err);
        });
    });
    
}
module.exports=compresser;