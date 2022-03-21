const express = require('express');
const app = express();
const axios = require('axios');
const jimp = require('jimp');

app.use(express.static('public'))

app.get('/url', async (req, res) => {
    const url = req.query.url
    let img;

    try {
        img = await jimp.read(url)
    } 
    catch (error) {
        return res.send('Imagen no se puede subir iamgen')
    }

    img.greyscale()
    img.quality(60)
    img.resize(350, Jimp.AUTO)
    
    await img.writeAsync('public/newimg.jpg')
    res.send('Procesando la imagen de URL ' + url)
});




app.listen(3000,()=>{
    console.log('Server started on port 3000');
});