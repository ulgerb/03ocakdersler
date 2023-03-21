

// 1.ÖDEV 5er 5er artan 20den 100e kadar sayılarım olsun
// bu sayıların toplamını konsola yazdırın
// ÖDEV 1 ÇÖZÜM
// var toplam = 0
// for( let i = 20; i<100;i +=5){
//     toplam += i
// }
// console.log(toplam);
// toplma = 0, toplam=20, t=0, t=25, t=0, t=30
// t=0, t=20, t=45, t

// 2.ÖDEV list1 = ["elma","armut","kiraz","muz"]
// liste içerisindeki elemanların elmaysa ekrana kilosu 15tl
// armut 18, kiraz 22, muz 20, yazdırsın
// ÖDEV 2 ÇÖZÜM
// var list1 = ["elma", "armut", "kiraz", "muz"]

// for(i=0; i<list1.length ; i++){ // i=1 list1[1]=armut
//     if (list1[i]== "elma"){
//         console.log(list1[i],"15₺");
//     }else if(list1[i] == "armut"){
//         console.log(list1[i],"18₺" );
//     }else if(list1[i] == "kiraz"){
//         console.log("kiraz 22₺");
//     }else if (list1[i] == "muz"){
//         console.log(list1[i], "20₺");
//     }
// }



// 3.ÖDEV kullanıcıdan bir cümle alın, bu cümlenin içerisinde kaç a harfi varsa o kadar ekrana cümleyi yazdırılsın.
// ÖDEV 3 ÇÖZÜM
// var text = prompt("bir cümle yazınız")
// for(i=0;i<text.length;i++){
//     if(text[i]=="a"){
//         console.log(text);
//     }
// }

// alıştırma === kullanıcıdan alınan 4 meyve listeye dönüştürülsün,
// listedeki elemanları tekrardan string olarak birleşik yazdırın

// var list1 = "elma armut kiraz muz".split(" ") // içerdeki string yapıyı listeye dönüştürür
// console.log(list1);

// var list2 = prompt("4 meyve giriniz").split(" ")
// console.log(list2);
// var text=""
// for(i=0;i<list2.length;i++){
//     text +=list2[i]
// }
// console.log(text);


// for(i=1;i<10;i++){
//     if (i%2 === 0){
//         console.log("çift");
//     }
//     if (i%7 === 0){
//         break // döngüyü durdurur
//     }
// }

// alıştırma === for içinde dönen meyve listesi 
// elma,kiraz,muz,kivi,karpuz
// muz'u yazdırdıktan sonra döngü dursun

// var list1 = ["elma", "kiraz", "muz","kivi","karpuz"]

// for(i=0;i<list1.length;i++){ // elma, elma==muz,kiraz kiraz==muz, muz muz==muz, break
//     console.log(list1[i]);
//     if(list1[i] === "muz"){
//         break
//     }
// }



// alıştırma === kullanıcı şifre giriş sistemi yapın 3 deneme hakkı bulunsun, denemenin sonunda blocklandınız yazdırsın
/* 
var obj = {
    "username":"berkay123",
    "password":"123"
}

// DENEME HAKKI START
for (i=0;i<3;i++){
    username = prompt("kullanıcı adı giriniz");
    password = prompt("şifre giriniz");

    if (obj["username"] === username && obj["password"] === password) {
        console.log("sisteme giriş yaptınız");
        break
    } else {
        console.log("kullanıcı adı veya şifre yanlış!!");
        console.log("kalan hakkınız:", 2-i);
    }
    if(i===2){
        console.log("sistemden blocklandınız");
    }
}
// DENEME HAKKI END
 */

// alıştırma === 50ye kadar olan sayıların 3e ve 7ye bölünenleri ekrana yazdırın

// for (i=0;i<50;i++){
//     if ( i%3===0 && i%7===0){
//         console.log(i);
//     }
// }

// alıştırma === "patatesli ekmek" yazısında kaç tane e harfi olduğunu bulan kodu yazınız

// var text = "patatesli ekmek"
// var esayac = 0
// for (i=0;i<text.length;i++){
//     if (text[i]==="e"){
//         console.log("e");
//         esayac+=1
//     }
// }
// console.log(esayac);



// alıştırma === 3 deneme hakkı olan kullanıcı text="mermer merve mermer merve mermer merve" yazmaya çalışsın eğer doğruysa helal yazdıran kodu yazın



// for(i=2;i>-1;i--){
//     text = "mermer merve mermer merve mermer merve"
//     user = prompt("3kere mermer merve yazınız")

//     if (text === user) {
//         console.log("helal");
//         break
//     }else{
//         console.log("yanlış yazdınız!! kalan hak:", i);
//     }
// }



// alıştırma === kullanıcıdan alınan sayıyı, 0dan o sayıya kadar ekrana yazdırın, sayı 20nin üstündeyse "sayı yüksek" yazzarak döngüyü durdursun,

// var s1 = prompt("bir sayı giriniz")

// for (i=0;i<Number(s1);i++){
//     console.log(i);
//     if (i>=20){
//         console.log("Sayı Yüksek");
//         break
//     }
// }


// 
