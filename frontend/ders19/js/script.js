// === function
// belirli kodları içerisinde tutar ve çağrıldığında çalışırlar
// function myFunc1(){
//     var x = 20;
//     var y = 30;
//     var toplam = x+y;
//     console.log(toplam);
// }
// myFunc1()
/* 
function myFunc2(a,b){
    var carpim = a*b
    console.log(carpim);
}

myFunc2(10,5)
myFunc2(10,8)
myFunc2(10,2)

var a1 = prompt("a1 sayısı")
var a2 = prompt("a2 sayısı")
myFunc2(a1,a2) */


// sınıftaki öğrencilerin ortalamadan geçip geçmediği durumuu hesaplayın
/* 
function myFunc3(nam,vize,final){
    var ortalama = (vize+final)/2;
    if (ortalama>=50){
        console.log(nam,"geçti",ortalama);
    }else{
        console.log(nam,"kaldı", ortalama);
    }
    return ortalama
}

// for(i=0;i<40;i++){
    var nam = prompt("isim")
    var vize = Number(prompt("vize notu"))
    var final = Number(prompt("final notu"))

    
// }
var sonuc = myFunc3(nam, vize, final) *2
console.log(sonuc); */


// ehliyet yaşı sorgusu yaşı yeterliyse sınava girebilir, sınavı geçtiyse ehliyeti alabilir

// name, direksyon
// function myFunc4(name){
//     var yas = Number(prompt("yaşınızı giriniz"))
//     if(yas>=18){
//         console.log(name,"sınava girebilir");
//         var sinav = Number(prompt("sınav notunuz"))
//         if(sinav>=70){
//             console.log(name,"ehliyet alabilir. notunuz:",sinav);

//         }else{
//             console.log(name,"sınavdan kaldınız. notunuz:", sinav);
//         }
//         return [yas,sinav]
//     }else{
//         console.log(name,"büyünce gelirsin");
//         return yas
//     }
    
// }

// myFunc4("Ahmet")
// console.log('myFunc4("Ahmet"): ', myFunc4("Ahmet"));

// 1. yazılışı
// function myFunc5(){
    
// }

// 2. yazılışı
// const myFunc5 = function(){
    
// }

// 3. yazılışı arrow function
// const myFunc6 = ()=>{

// }

// FOR IN, FOREACH

var list1 = ["elma","armut","kiraz"]
console.log("=== normal ===");
for(i=0;i<list1.length;i++){
    console.log(list1[i]);
}

console.log("=== forin ===");
for( i in list1){
    console.log(list1[i]);
}

console.log("=== foreach ===");
list1.forEach((e,i,arr)=>{
    console.log(e,i,arr);
})

console.log("=== map ===");
list1.map((e)=>{
    console.log(e);
    return e
})

// kullanıcı girişi listesi tanımlansın tanımlanan kullanıcılar foreach ile dönülücek ve giriş yaptırtılıcak

var users = [
    {
        username:"berkay111",
        password:"111",
    },
    {
        username:"ali222",
        password:"222",
    },
    {
        username:"veli333",
        password:"333",
    },
]
console.log(users[2].username);

// var username = prompt("kullanıcı adınız") 
// var password = prompt("Şifreniz") 

list1 = ["elma","armut","kiraz"]

users.forEach((e)=>{
    if(e.username === username && e.password === password){
        console.log("giriş yaptınız");
    }
})
