// IF ELSE AND OR

// ÖDEV 1 # === sisteme giriş yaptırma kullanıcı adı ve şifre ile

// DATABASE
// var username = "berkay123";
// var password = "123";
/* 
var user = {
    username : "berkay123",
    password : "123",
    "gizli yanıt": "galatasaray"
}

// KULLANICI
var username2 = prompt("Kullanici adini giriniz")
var password2 = prompt("Şifreyi giriniz")

// ALGORITMA
if (user.username === username2.toLowerCase() && user.password === password2.toLowerCase()){
    alert("Giriş Başarili...")
} else{
    alert("Kullanici adi veya şifre yanliş!!")
    var gizli = prompt("Gizli yanitiniz")    
    if (user["gizli yanit"] === gizli){
        alert("doğru yanit verdiniz...")
        user.password = prompt("yeni şifreyi giriniz")
    }else{
        alert("Gizli yanitiniz yanliş!!!")
    }
} */

// ÖDEV 2 # === kullanıcının girdiği cümle 10 karakterin altındaysa daha uzun bir cümle yazınız diyen programı yazınız

/* var text = prompt("Bir cümle giriniz..")
if (text.length <50 ){
    alert("cümleniz çok kısa 50 karakterden uzun giriniz!!")
}else{
    alert("Kaydedildi..")
} */


// kullanıcıdan girilen cümlede kafa kelimesi geçiyorsa *** olarak değiştirilsin replace
// text.replace("kafa","***" )

// var text = "asgdaskd kafa";

// console.log(text.indexOf("kafa"));

// if (text.indexOf("kafa") === -1){
//     alert("içinde kafa kelimesi yok!")
// }else{
//     alert("sansürlü cümle: "+ text.replace("kafa","***") )
// }

// console.log(  "bugün hava yağmurlu".replace("bugün","yarın")  );

// damsız giremezsin!, kadın sayısı erkek sayısından büyük yada eşit olmalı,
/* 
var kadin = prompt("kadın sayısı giriniz")
var erkek = prompt("erkek sayısı giriniz")

if (kadin >= erkek){
    alert("İçeri girebilirsiniz")
}else{
    alert("Giremezsiniz!!")
} */

// Ehliyet sistemi
// eğer yaş 18 den küçükse ehliyet alamazsınız
// eğer yaş 18 ise ehliyet alabilirsiniz
// eğer yaş 19 ve üzeri ise siz hala ehliyet alamadınız mı
/* 
var yas = Number(prompt("Yaşınız söyleyin"))

if (yas<18){
    alert("Ehliyet alamazsınız")
}else if(yas === 18){
    alert("Ehliyet alabilirsin")
}else if( yas >= 19 ){
    alert("hala ehliyet almadınız mı")
}else{
    alert("anlaşılmadı tekrar dene")
} */

// ARAÇ LASTİK UYARI SİSTEMİ
// 1) kaç lastikte problem var
// 2) problem nedir

// 1 lastik havası indiyse "sürmeye devam edilebilir"
// 1 lastik patlak ise "yavaşla"
// 2 lastik havası indiyse "lastiklerin havasını şişir"
// 2 lastik patlak ise "aracı durdurun"
/* 
problem = prompt("problem nedir?")
lastik = Number(prompt("kaç lastikte problem var?"))

if (lastik == 1 && problem == "hava"){
    alert("sürmeye devam edilebilir")
}else if(lastik == 1 && problem == "patlak"){
    alert("yavaşla")
}else if (lastik == 2 && problem == "hava"){
    alert("acil lastiklerin havasını şişir")
}else if (lastik == 2 && problem == "patlak"){
    alert("aracı durdurmanız lazım")
} */

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// for (başlangıç ; bitiş ; artış){
// }

// for ( let i=1 ; i<10 ; i++){
//     console.log(i)
// }

// for(var i=0; i<3 ; i++){ // i=0, i=1, i=2, i=3
//     console.log("merhaba");
// }
/* 
var s1 = 5
for ( var i = 4 ; i<8 ; i++){ // i=4,     i=5,   i=6    , i=7
    console.log(s1 = s1 + i); // 5+4=9, 9+5=14, 14+6=20 , 20+7 = 27
}
 */
/* 
for (let i=5 ; i<12 ; i+=2){
    console.log(i);
}
// 7,9,11
// 5,7,9,11 */
/* 
x = 5
for (let i=0;i<8;i+=1){
    if (i>x){
        x += x
        console.log(x);
    }
} */


/* 
var tektoplam = 0;
for ( let i=2 ; i<10 ; i++){
    if (i%2==1){ // 3,5,7,9
        tektoplam += i // 0+3, 3+5, 8+7 + 15+9
    }
}

console.log(tektoplam); */


// birden 10 a kadar olan sayıları ekrana yazdırın.
/* 
for( let i = 1 ; i<10 ; i++){
    console.log(i) // 1,2,3,4,5,6
} */

// 1 den 50 ye kadar olan çift sayıları Console’a yazdırınız.
/* 
for( let i=1 ; i<50 ; i++){
    if(i%2 == 0){
        console.log(i);
    }
} */

// 1 - 100 arası 3 ve 5 e tam bölünen sayılar
/* 
for ( let i = 1 ; i<100 ; i++){
    if(i%3 == 0 && i%5 == 0){
        console.log(i);
    }
} */

/* 
var list1 = ["bir","iki","elma",33,10]
list1 = [11,20,31,40,50,63,70]
console.log(list1[6]%2 == 0 );

for ( let i=0 ; i<7 ; i++ ){
    console.log(list1[i]);
} */

// for döngüsü ile çift sayıları yazdırma
/* 
var listem = [13, 23, 12, 45, 22, 48, 66, 100]

for(let i = 0; i<8 ; i++){
    if (listem[i]%2 == 0){
        console.log("çifttir", listem[i]);
    }
} */


// 1.ÖDEV 5er 5er artan 20den 100e kadar sayılarım olsun
// bu sayıların toplamını konsola yazdırın

// 2.ÖDEV list1 = ["elma","armut","kiraz","muz"]
// liste içerisindeki elemanların elmaysa ekrana kilosu 15tl
// armut 18, kiraz 22, muz 20, yazdırsın

// 3.ÖDEV kullanıcıdan bir cümle alın, bu cümlenin içerisinde kaç a harfi varsa o kadar ekrana cümleyi yazdırılsın.
// 
/* 
var text = "bugün arabamla dolaşmaya çıktım."

if (text[6]=="a"){
    console.log(text);
}
console.log(text.length);
 */
// for (let i=0 ; i<text.length ; i++ ){
//     console.log(text[i]);
// }





