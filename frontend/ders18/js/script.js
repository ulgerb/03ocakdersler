

// 4 deneme hakkı olan ve her serferinde şifre sorulur banka sistemine giriş yaptıktan sonra para mı çekicek yoksa para mı yatırıcak, yatırıcaksa ana paraya eklenir. anapara=50000

// for, if şifre prompt, prompt para çek yatır, miktar prompt + anapara,

// var anapara = 50000;
// var sifre = "1234";

// for(i=1;i<5;i++){
//     var password = prompt("şifrenizi giriniz: ")
//     if (sifre === password){
//         console.log("giriş yaptınız..");
//         var sorgu = prompt("yatır yada çek. (y/ç)")

//         if(sorgu === "çek"){ // "çek"===" "
//             var miktar = prompt("ne kadar yatırıcaksın")
//             anapara += Number(miktar)
//             console.log("anaparanız: ", anapara);

//         }else if(sorgu==="ç"){
//             var miktar = prompt("ne kadar çekiceksin")
//             anapara = anapara - Number(miktar)
//             console.log("anaparanız: ", anapara);
//         }
//         break
//     }else{
//         console.log("şifreniz yanlış, kalan hakkınız:", 4-i);
//     }
// }
/* 
var listname = ["Ahmet","Mehmet","Ali","Ayşe","Veli"]
var vize = [36,88,65,42,10]
var final = [90,2,90,75,95]
var proje = [30,60,95,70,10]
var kisi = prompt("kimin notunu görüceksin")

for(i=0;i<listname.length;i++){
    if (kisi.toLowerCase() ===listname[i].toLowerCase()){ // "Ali" === "Ali"
        var ortalama = (vize[i]*0.3 + final[i]*0.5 + proje[i]*0.2)
        ortalama = Math.round(ortalama)
        
        if(ortalama>=50){
            console.log(listname[i],ortalama,"alarak geçti");
            if(ortalama>=80){
                console.log(listname[i], "Üstün Başarı Belgesi Aldı");
            }
        }else{
            console.log(listname[i],ortalama,"alarak kaldı");
        }
    }
} */
// 5 kişi listemiz olsun, notları olucak, devamsızlık sayıları olucak, notu 50 üstüyse geçsin, devamsızlığı 10 ve üstü olanlar kalsın, hiç devamsızlığı olmayana teşekkür belgesi
/* 
var listname = ["Ahmet", "Mehmet", "Ali", "Ayşe", "Veli"]
var listnote = [90, 88, 65, 42, 10]
var listdevam = [14,4,0,2,5]

for (i=0;i<listname.length;i++){
    if (listnote[i] >= 50 && listdevam[i]<10){
        console.log(listname[i], listnote[i],"geçti");
        if(listdevam[i] ===0){
            console.log("Teşekkür belgesi aldınız");
        }
    }else{
        console.log(listname[i], listnote[i],"devamsızlık:",listdevam[i],"kaldı");
    }
}
 */

// === while
// çalışma mantığı: if ve forun karışımıdır. while koşul yazılır(true yada false) döngü dönmeye başlar
/* 
var i = 0;
while(i<10){
    console.log(i);
    i++;
}

var note = 55;
while(note>=50){
    console.log("50den büyüktür");
    note--
    // if (note>80){
    //     break
    // }
} */


// 0dan 20ye kadar çift sayıları ekrana yazdırın
/* 
var i=0
while(i<20){
    if(i%2===0){
        console.log(i);
    }
    i++
}
 */

// 5 kişi listesini sırasıyla ekrana yazdırın
// var listname = ["Ahmet", "Mehmet", "Ali", "Ayşe", "Veli"]
// var i = 0;
// while(i<5){
//     console.log(listname[i]);
//     i++;
// }


// firmanın büyüklüğünü hesaplatın, 3 şirket isimleri olsun, işçi sayıları olsun, işçi sayısı 100 üstüyse "... büyük firmadır" olarak yazdırın
/* 
var listsirket = ["Tolan", "Vesiel", "Karatam"]
var listcalısan = [80,130,100]

var i = 0;
while(i<3){
    if(listcalısan[i]>=100){
        console.log(listsirket[i],"büyük firmadı");
    }else{
        console.log(listsirket[i],"küçük firmadı");
    }
    i++;
} */


// var i=0
// var text = "ahmet"
// var list1 = ["ahmet", "mehmet","ali","mahmut",5]
// while(i<5){
//     console.log(list1[i]);
//     i++;
// }



//ÖDEV// meyve listesi bulunsun kullanıcının istediği meyve var mı yok mu kontrol edin.

// var meyve = ["elma","armut","kiraz","muz","kivi","kavun"]
// var m1 = prompt("hangi meyveyi istiyosun")

// if (meyve.indexOf(m1) != -1){
//     console.log("vardır");
// }else{
//     console.log("yoktur");
// }

/* 
var i = 0;
var yoktur = false;
while (i<meyve.length){
    if (meyve[i] == m1){
        console.log("vardır");
        yoktur = true
    }
    i++;
}
if (yoktur==false){
    console.log("yoktur");
}
 */

//ÖDEV// liste içerisinde kırtasiye malzemeleri olsun sistemden ürün almak isteyen bir kişi sisteme alacağı ürünü yazar ve sistemde varsa adı yazsın yoksa bulunmuyor yazsın. 2.kısım fiyat listeleride alarak fiyatını hesaplatın.

// ürün listesi, fiyat listesi, 
// kullanıcıdan gelen: alacagı ürün, 
// 2.kısım bakiye, kullanıcı alışverişi sonlandırsın, 
/* 
var urun = ["kalem", "silgi","defter","cetvel","pergel","makas","boya"];
var fiyat = [15,10,20,25,30,30,60];
var bakiye = 0;

while (true){
    
    var al = prompt("ne alıcaksınız")
    var i = 0;
    while (i<urun.length){
        if (urun[i] === al){
            bakiye += fiyat[i]
            break
        }
        i++;
    }

    if (urun[i] != al){ 
        console.log("yoktur");
    }

    var devam = prompt("Alışverişi bitirmek istiyormusun:, (e)")
    if (devam === "e"){
        console.log("toplam bakiyeniz ₺",bakiye);
        break
    }
} */


// === function



