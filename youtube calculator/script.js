let outputscreen = document.getElementById("out-screen");

function display(num){
    outputscreen.value += num;
}

function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
                alert("Invalid Value")
    }
}

function clr(){
    outputscreen.value = " " ;
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}