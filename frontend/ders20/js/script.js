

// var d2 = document.getElementsByTagName("p"); // tag gösterir
// var d3 = document.getElementsByClassName("box1")

// SEÇİCİLER
// var boxid = document.getElementById("boxid"); // id seçici

// boxid.innerText += " <b>Merhaba dom js</b>";
// boxid.innerHTML = " <b style='color:red;' >Merhaba dom js</b>";
// boxid.className = "div1";
// boxid.className = "";

// var box1 = document.querySelector(".box1") // genel seçici

// box1 içerisine ne güzel çocuk sesi gelmiyor, yazalım.
// box1 style özellik verin yazı rengi mor olsun, 
// box1 içerisine bir div1 clasını ekleyin önceki verdiğiniz özellikler gitmesin  
// içerdeki yazıyı tekrar değiştirin = merhaba class

// box1.innerHTML = "<p id='p1' style='color:purple;'>ne güzel çocuk sesi gelmiyor</p>";
// box1.className = "div1";
// box1.innerHTML = "merhaba class"
// var p1 = document.getElementById("p1")
// p1.innerHTML = "merhaba class"

// console.log(boxid);
// console.log(d2);
// console.log(d3);


let box1 = document.querySelector(".box1");
box1.style.background = "red";
box1.style.width = "200px";
box1.style.height = "200px";

var boxid = document.getElementById("boxid");
boxid.style.fontSize = "30px";

// alıştırma yeni bir div açın bu dive 150px genişlik ve 300px uzunluk verilecek arkaplan mavi, margin 20px

// var con = document.querySelector(".container")
// console.log(con.children[0].children[1]);


var boxid2 = document.getElementById("boxid2")
boxid2.style.width = "150px";
boxid2.style.height = "300px";
boxid2.style.background = "blue";
boxid2.style.margin = "20px";

var passwordDiv = document.getElementById("password")

passwordDiv.setAttribute("disabled","")
passwordDiv.removeAttribute("disabled")
var clicka = document.getElementById("clicka")
// clicka.setAttribute("href", "/index/")



var showPassword = ()=>{
    if (passwordDiv.getAttribute("type") === "password"){
        passwordDiv.setAttribute("type", "text")
    }else{
        passwordDiv.setAttribute("type", "password")
    }
}

var clickme = document.getElementById("clickme")
clickme.style.padding = "5px";
clickme.style.border = "2px solid black";
clickme.style.width = "fit-content";
clickme.style.borderRadius = "10px";
clickme.style.background = "#03303360";
clickme.style.cursor = "pointer";
clickme.style.boxShadow = "0px 2px 0px 1px #000000";


var clickMe = (e)=>{
    console.log(e);
    document.querySelector(".box1").style.width = "100%";
    clickme.style.boxShadow = "0px 0px 0px 1px #000000";
    
}

// header oluşturun width değeri 100 olan navbar küçült buttonuna basıldığında width değeri 50% ye düşsün 
var header = document.getElementById("header")
var change = true

function changeHeader(){
    if (change === true){
        header.style.width = "50%";
    }else if (change === false){
        header.style.width = "100%";
    }
    change = !change;
}

changemenu = true;
var navBar = ()=>{
    var menu = document.querySelector(".menu")
    if (changemenu === true){
        menu.style.display = "flex";
    }else{
        menu.style.display = "none";
    }
    changemenu = !changemenu;
}

// var drop = document.getElementById("drop");
// drop.addEventListener("click", ()=>{
//     var dropmenu = document.querySelector(".dropmenu");

//     if (changemenu === true) {
//         dropmenu.style.display = "block";
//     } else {
//         dropmenu.style.display = "none";
//     }
//     changemenu = !changemenu;
// })



// var drop = document.getElementById("drop");
// drop.addEventListener("mouseenter", () => {
//     var dropmenu = document.querySelector(".dropmenu");
//     dropmenu.style.display = "block";
// })
// drop.addEventListener("mouseleave", () => {
//     var dropmenu = document.querySelector(".dropmenu");
//     dropmenu.style.display = "none";
// })


// ÖDEV
// dropdown menü yapılıcak,
//  hamburger menu tasarlanıcak,
// form oluşturun oluşturulan formda buton olucak butona basıldığında
//  form içindeki inputlar disabled olucak tekrar tıklandığın etkin hale gelicek

