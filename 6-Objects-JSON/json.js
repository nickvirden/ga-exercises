var str = '{"data":{"type":"gif","id":"a2fVCj2CudIiY","url":"http:\/\/giphy.com\/gifs\/cheezburger-robot-middle-finger-a2fVCj2CudIiY","image_original_url":"https:\/\/media0.giphy.com\/media\/a2fVCj2CudIiY\/giphy.gif","image_url":"https:\/\/media0.giphy.com\/media\/a2fVCj2CudIiY\/giphy.gif","image_mp4_url":"https:\/\/media0.giphy.com\/media\/a2fVCj2CudIiY\/giphy.mp4","image_frames":"84","image_width":"365","image_height":"171","fixed_height_downsampled_url":"https:\/\/media0.giphy.com\/media\/a2fVCj2CudIiY\/200_d.gif","fixed_height_downsampled_width":"427","fixed_height_downsampled_height":"200","fixed_width_downsampled_url":"https:\/\/media0.giphy.com\/media\/a2fVCj2CudIiY\/200w_d.gif","fixed_width_downsampled_width":"200","fixed_width_downsampled_height":"94","fixed_height_small_url":"https:\/\/media0.giphy.com\/media\/a2fVCj2CudIiY\/100.gif","fixed_height_small_still_url":"https:\/\/media0.giphy.com\/media\/a2fVCj2CudIiY\/100_s.gif","fixed_height_small_width":"213","fixed_height_small_height":"100","fixed_width_small_url":"https:\/\/media0.giphy.com\/media\/a2fVCj2CudIiY\/100w.gif","fixed_width_small_still_url":"https:\/\/media0.giphy.com\/media\/a2fVCj2CudIiY\/100w_s.gif","fixed_width_small_width":"100","fixed_width_small_height":"47","username":"cheezburger","caption":""},"meta":{"status":200,"msg":"OK"}}'

console.log(str);

var giphyImg = JSON.parse(str);

console.log(giphyImg);

console.log(giphyImg.data.image_url);

var myGiphy = {
    type: giphyImg.data.type,
    image_url: giphyImg.data.image_url    
}

var myGiphyJSONString = JSON.stringify(myGiphy);
console.log(myGiphyJSONString);
