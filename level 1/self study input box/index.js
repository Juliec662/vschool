var button = document.getElementById("button")
function buttonclick() {
    console.log("The button was clicked")   
}
button.addEventListener("click",buttonclick)
document.getElementById("header").addEventListener("click",function(){
    document.body.style.backgroundColor = "blue"
})