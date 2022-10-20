var hide = true
var R
var G
var B

function generate(){

    R = Math.floor(Math.random() * 256);
    G = Math.floor(Math.random() * 256);
    B = Math.floor(Math.random() * 256);

    //I know that I could do this better
    if(R <= 15){
        R= "0" + R.toString(16);
    }else{R = R.toString(16);}
    if(G <= 15){
        G = "0" + G.toString(16);
    }else{G = G.toString(16);};
    if(B <= 15){
        B = "0" + B.toString(16);
    }else{B = B.toString(16);}

    $('#output').html("#" + R + G + B);
    if(hide == false){
        $('#preview').css("background-color", "#"+R+G+B)
    }
}
function shide(){
    if(hide == true){
        hide = false
        console.log(hide)
        $('#preview').css("background-color", "#"+R+G+B)
    }
    else{
        hide = true
        $('#preview').css("background-color", "#222222")
        console.log(hide)
    }
}