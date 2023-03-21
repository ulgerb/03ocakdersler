

// deger = prompt("bir sayı giriniz")

// if (deger>10){
//     document.write("Değer 10'dan büyüktür..")
// }

// KARŞILAŞTIRMA OPERATÖRLERİ (true yada false 2 sonucu vardır)
/* 
1) > (ilk değer ikinci değerden büyük olduğunda gerçekleşir true yani 1 değeri döndürür)
2) < (ilk değer ikinci değerden küçük olduğunda true döndürür)
3) >= (ilk değer eşit veya büyükse true)
4) <= (ilk değer küçük veya eşitse true)
5) === (ilk değer ve ikinci birbirine eşitse true)
6) != (ilk değer ikinci değere eşit değilse true)
*/

// console.log( true );
// console.log( false );
// console.log( 22 <= 10 );
// console.log( 22 >= 10 );
// console.log( 10 >= 10 );

// console.log( 10 == "10" );
// console.log( 10 === "10" );
// console.log( 50 != 5 );
// console.log( 50 != 50 );

// ÖNEMLİ NOTLAR
// if parantez içindeki sonuç true ise çalışır
// false ise çalışmaz
// else, if çalışmadığında (false döndürdüğünde) çalışır
// 1 değeri true anlamı taşır, 0 değeri false anlamı taşır
// else if, if koşulumdan false değer alıyorsam "else if" içerisindeki koşuluma bakar eğer bundanda false sonucunu alıyorsam altındaki çalışır
// eğerki if bloğundaki koşullarından birisi true dönüyorsa altındaki koşullara bakmaz

// # === öğrencinin ortalaması 50 üstüyse geçti altıysa kaldı yazdıran programı yazın

// note = prompt("öğrenci notunu giriniz")
// if(note>50){
//     document.write("Geçti")
// }else if(note==50){
//     document.write("Şartlı Geçti")
// }else{
//     document.write("Kaldı")
// }

// note = 80
// if (note > 60){
//     console.log("başarılı");
// }else if (note > 50){
//    console.log("geçti"); 
// }else if (note === 50){
//     console.log("şartlı geçti");
// }else{
//     console.log("kaldı");
// }

// if(note >50){
//     console.log("geçti");
// }



// # inputta alınan sınav notu.öğrenci, 50 altı aldıysa "kaldı" 50 üstüyse "iyi" 80 üstüyse "başarılı"

// var note = prompt("not giriniz")
// if (note < 50){
//     console.log("Kaldı");
// }else if (note > 80){
//     console.log("başarılı");
// }else if(note>=50){
//     console.log("geçti");
// }


// # === partiye girenlerin yaşı 18 in üstündeyse ekrana girebilir altıysa giremez yazdırsın. 55 yaş üstü giremez yazsın

// var yas = prompt("Yaşınızı söyleyin") 
// if (yas>55){
//     console.log("İçeriye Giremez!!");
// }else if (yas<=18){
//     console.log("İçeriye Giremez!!");
// }else if(yas>18){
//     console.log("İçeri Girebilirsiniz...");
// }


// # === manav = ["elma","armut","kiraz","portakal", "muz"] , kullanıcıdan girilen meyvenin manavda olup olmadığını kontrol edin
// meyve = prompt("alacağınız meyveyi giriniz")
// let manav = ["elma", "armut", "kiraz", "portakal", "muz"]
// console.log(manav.indexOf(meyve)===-1);

// if (manav.indexOf(meyve)===-1){
//     console.log("bu meyve manavda yoktur");
// }else{
//     console.log("Manavda", meyve, "vardır");
// }

// # === galeri = ["kia", "bmw", "mercedes", "ford","audi"]
// galeride kullanıcının aradığı araba markası var mı?
// var galeri = ["kia", "bmw", "mercedes", "ford", "audi"]
// var arac = prompt("hangi marka araba arıyosunuz")

// if (galeri.indexOf(arac)===-1){
//     console.log("bu arac galeride yoktur!!");
// }else{
//     console.log("bu arac galeride var");
// }


// # === kullanıcıdan girilen değerin 5'e tam bölünüp bölünmediğini söyleyen programı yazın
// var x = 15
// if (x%5===0){
//     console.log("bu sayı 5'e tam bölünür");
// }

// # === ödev girilen sayı pozitif mi negatifmi

// var s1 = prompt("Bir sayı giriniz")

// if (s1>0){
//     console.log("Pozitif");
// }else if (s1<0){
//     console.log("Negatif");
// }else{
//     console.log("Nötr");
// }

// # === girilen sayının çift mi tek mi olduğunu bulunuz

// var s1 = prompt("bir sayı giriniz")
// if (s1%2 === 0){
//     console.log("bu sayı ÇİFT");
// }else if (s1%2 ===1){
//     console.log("bu sayı TEK");
// }

// # === kullanıcıdan girilen isim soyisim baş harfleri büyükse ekrana kaydı tamamla yazsın

// var fname = prompt("İsminiz: ") // "berkay"
// var surname = prompt("Soyisim: ") 

// console.log(name[0] === name[0].toUpperCase());
// ### Çözüm 1)
/* 
if (fname[0] === fname[0].toUpperCase()){
    if (surname[0] === surname[0].toUpperCase()){
        console.log("kaydı tamamla");
    }else{
        console.log("Baş harfi büyük harfle başlayın");
    }
}else{
    console.log("Baş harfi büyük harfle başlayın");
}
*/

// ### Çözüm 2)
/* 
if (fname[0] === fname[0].toUpperCase() && surname[0] === surname[0].toUpperCase()){
    console.log("kaydı tamamla");
}else {
    console.log("Baş harfi büyük harfle başlayın");
} */


// AND(ve) == && ve OR(veya) == || OPERATORLERİ
// && and operatorü, çalışabilmesi için 2 koşulunda true dönmesi gerekir
// || or operatorü, çalışabilmesi için 1 tane true olması yeterli

// hastane sonuçları
// x sayısı 50 ile 100 arasındaysa yüksek değer, 0 50 arası normal, 100 150 arası çok yüksek değer
// x = 110
// if (x >= 0 && x<= 50){
//     console.log("hastanın değerleri normaldir.");
// }else if(50<x && x<=100){
//     console.log("hastanın değerleri yüksektir");
// }else if (100<x && x<=150){
//     console.log("hastanın değerleri çok yüksektir");
// }


// s1 ve s2 değişkenlerim olsun s1 veya s2 nin 100den büyük olduğu durumda ekrana 2 değerin toplamını yazdırın

// var s1 = 10
// var s2 = 101

// if ( s1>100 || s2>100 ){
//     console.log(s1+s2);
// }


// ÖDEV 1 # === sisteme giriş yaptırma kullanıcı adı ve şifre ile


// ÖDEV 2 # === kullanıcının girdiği cümle 10 karakterin altındaysa daha uzun bir cümle yazınız diyen programı yazınız




// var bool1 = true 
// var bool2 = false 
// console.log(bool1, bool2);

// if(0){
//     console.log("if Çalışır");
// }else{
//     console.log("else çalışır");
// }



// s1 = prompt("s1 değeri") // 10
// s2 = prompt("s2 değeri") // 20

// if(s1 > s2){
//     document.write("s1, s2'den büyüktür")
// }else{
//     document.write("s1, s2'den küçük yada eşittir")
// }


// if (s2 > s1){
//     document.write("s2, s1'den büyüktür")
// }

// if (s2 === s1){
//     document.write("s2, s1'e eşittir")
// }

// 8 < 9
// 12 <= 9
// 8 > 8
// 8 >= 8
// 8 !< 9
// 8 != 9
// 8 === "8"
// 8 === 8
// 18 == "18"