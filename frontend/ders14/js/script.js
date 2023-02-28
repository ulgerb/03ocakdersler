// VERİ TYPE

// Number
var s1 = 22;
// String
var text = "String Değer";
// Array
var arr = [10,"yirmi",s1,text, [1,2,3,["b","n"]]]
// liste olduğunu belirtmek için köşeli parantez kullanılır.
// liste içerisinde eleman çekebilmek için index numarası kullanılır.
// örnek: arry[index]

// ELEMAN DEĞİŞTİRME
arr[4] = "asd"; // liste içerisinde eleman değeri değiştirmek için burdaki işlemi yaparız.

// LİSTEYE EKLEME
arr.push("Eklenen")

// LİSTEDEN ÇIKARMA
arr.pop() // pop içerisi boş olduğunda sonrakini çıkartır

// LİSTEYİ TERS ÇEVİRME
arr.reverse()

// LİSTEDE INDEX NUMARASI BULMA

console.log('arr.indexOf("yirmi"): ', arr.indexOf("yirmi"));
// console.log(arr)
// console.log(arr[0] * 2) 


// LİSTE İÇERİSİNDEKİ UZUNLUK length 
const arr1 = [5, 2, 17, 9, 12]
// console.log('arr1.length: ', arr1.length);


// İÇ İÇE LİSTELER
var arr2 = ["elma","bir","kalem", [10,20,["a","b"]], "101"] 

// örn: yukardaki listede 20 değerini 5 ile çarpıp ekrana yazdır

// console.log(arr2[3][1]*5);

// örn: yukardaki listede "101" değerini 2 ile çarpıp ekrana yazdır

// console.log(arr2[4]*2);

// örn: yukardaki listede "a" değerini ekrana yazdır

// console.log(arr2[3][2][0]);

// örn: yukardaki listede "a" ve "b" değerlerini kullanarak baba yazdır

var baba = arr2[3][2][1]+arr2[3][2][0]+arr2[3][2][1]+arr2[3][2][0]
console.log(baba);

// örn: boş bir liste tanımlayın boş arr3 içerisine 4 isim girin
var arr3 = []
arr3.push("Berkay")
arr3.push("Leyla")
arr3.push("Mecnun","Ahmet")

// örn: arr3 içerisinden son elemanı çıkartır
arr3.pop()

// örn: arr3 içerisinde 1. indexe sahip elemanı farklı isimle değiştirin

arr3[1] = "Kazım"

// console.log(arr3);



// LİSTEDE SIRALAMA sort
// arr1.sort()
// console.log(arr1);

var arr2 = [1,4,2,12,100,9]
arr2.sort(function(a,b){return a-b}) // sayılara sıralama yaptırmak için
var arr4 = ["bir","dört","iki","üç","beş"]
// arr4.sort() // string elemanları sıralarken kullanıyoruz

// console.log(arr2);
// console.log(arr4);

// LİSTE İÇİNDE BELİRLİ ELEMANLARI ALMA

// console.log(arr4.slice(0,-1))

// LİSTE İÇİNDEN INDEXE GÖRE ÇIKARMA

// arr4.pop()
// arr4.splice(0,1) // (çıkan elemanın indexi, çıkartılıcak eleman sayısı)
// console.log(arr4);

// örn: [18,5,10,55,2] listesini büyükten küçüğe sıralayın

// var arr5 = [18,5,10,55,2]
// 1. Yöntem
// arr5.sort(function(a,b){return b-a}) // büyükten küçüğe sıralama
// 2. Yöntem
// arr5.sort(function(a,b){return a-b}) // küçükten büyüğe sıralama
// arr5.reverse()

// örn: yukardaki listeden 2.indexi çıkartın

// arr5.splice(2,1)
// console.log(arr5);

// örn: yukardaki indexe yeni eleman ekleyin ve 2.indexten sonrasını ekrana yazdırın

// arr5.push(100)
// console.log('arr5.slice(2): ', arr5.slice(2));


// 2 listeyi toplama

// var list1 = ["bir","iki","üç"]
// var list2 = [1,2,3]
// var list3 = list1.concat(list2)
// console.log(list3);



console.log("-----------------------");

// Object DATA BASE içerisinde kullanılır ve sözlük yapısıdır. 
// var list1 = ["bir","iki","üç"]
// var obj1 = {"ilk değer":"bir",5:"iki",17:"üç"}
// var user = {
//     "name":"Berkay",
//     "surname":"ÜLGER",
//     "username":"berkay123",
//     "password":"123"
// }
// console.log(list1[2]);
// console.log(obj1["ilk değer"]);
// console.log(user["password"]);

// örn: user içinden kullanıcı adı ve şifreyi ekrana yazdır.

// console.log(user["username"], user["password"]);

// PROMPT KULLANICIDAN DEĞER ALMA
// var p1 = prompt("bir sayı gir") 
// console.log(p1**2);

// var s1 = prompt("s1: ")
// var s2 = prompt("s2: ")
// var s3 = prompt("s3: ")

// console.log( Number((s1*s2)%2)+Number(s3) );

// var ortalama = (Number(s1)+Number(s2)+Number(s3))/3
// console.log("ORTALAMA:",ortalama);

