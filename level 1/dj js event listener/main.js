var header = document.getElementById("header")
header.style.color = "purple"
header.style.textAlign = "center" 
header.style.fontSize = "50px"

var box = document.getElementById("box")

box.addEventListener("dblclick",() =>{
    event.target.style.backgroundColor = "green"
});
box.addEventListener("mouseover", ()=>{
    event.target.style.backgroundColor = "blue"
});
box.addEventListener("mousedown", () =>{
    event.target.style.backgroundColor = "red"
});
box.addEventListener("mouseup", ()=>{
    event.target.style.backgroundColor = "yellow"
});
window.addEventListener("wheel", () =>{
    event.target.style.backgroundColor = "orange"
});
window.addEventListener("keydown", () =>{
    const keyName = event.key;
    if(keyName == "r"){
        box.style.backgroundColor = "red"
    }
    else if(keyName == "b"){
        box.style.backgroundColor = "blue"
    }
    else if(keyName == "y"){
        box.style.backgroundColor = "yellow"
    }
    else if(keyName == "g"){
        box.style.backgroundColor = "green"
    }
    else if(keyName == "o"){
        box.style.backgroundColor = "orange"
    }
})












// function doubleclick() {
//    document.box.style.backgroundColor = "green";
// }
