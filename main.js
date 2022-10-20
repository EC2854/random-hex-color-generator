function generate(){

    var R = Math.floor(Math.random() * 256).toString(16);
    var G = Math.floor(Math.random() * 256).toString(16);
    var B = Math.floor(Math.random() * 256).toString(16);
    $('#output').html("#" + R + G + B + "<br>" + R + " " + G + " " + B);
}