// TIPE DATA
// ini adalah tipe data number
const angka = 21;
// ini adalah tipe data boolean/option
let benar = true;
let salah = false;

// ini adalah tipe data kosong
let tidakAdaNilai = null;

// ini adalah tipe data yang sangat kosong
let gada = undefined;

// ini adalah tipe data simbol
const simbolUnik = Symbol('hello world');

// ini adalah tipe data array
const array = ['hellon world', 'gamaHusen', 16 , 'PPLG'];

// ini adalah tipe data function
function tambah(a,b) {
    return a+b;
};

// ini adalah tipe data object
let pplg = {
    nama : 'GamaHusen',
    umur : 15,
    hobi : 'ngoding',
    jurusan : 'pplg'
}

// OPERATOR

// ini adalah operator aritmatika
let hasil = 1 + 2; 
// pertambahan

let hasil1 = 3 - 1;
// pengurangan

let hasil2 = 2 / 1;
// pembagian

let hasil3 = 2 * 4;
// perkaliam

let hasil4 = 2**2;
// pangkat

let hasil5 = 20%9;
// modulus

// OPERATOR PERBANDINGAN
// HANYA MENGHASILKAN TRUE OR FALSE

let result = 5 == 5;
// dicek apakah angka 5 sama dengan angka 5 jika ya true

let result2 = 10 != 5;
// dicek apakah angka 10 tidak sama dengan angka 5 jika ya true

let result3 = 8 > 5;
// dicek apakah angka 8 lebih besar dengan angka 5 jika ya true

// OPERATOR LOGIKA

let result4 = true && false;
// AND

let result5 = !false;
// NOT

let result6 = true || false;
console.log(result4);
// OR

// OPERATOR KONDISIONAL 
let umur = 18;
let status = (umur>=18) ? "Dewasa" : "anakAnak";

// IF STATEMENT
if (umur >= 18) {
    // kondisi yang tepenuhi
} else {
    // kondisi yang tidak terpenuhi
}

// SWITCH STATEMENT
let warna = "merah";
let warnaApa;

switch (warna) {
    case "merah":
        warnaApa = "merah"
        break;

    case "biru":
        warnaApa = "biru"
        break;

    case "kuning":
        warnaApa = "kuning"
        break;

    default:
        warnaApa = "gagal"
        break;
}
// console.log(warnaApa);

// Function
function sapa(nama){
    // console.log(`halo ${nama}`)
}
sapa('Gama');

// PURE FUNCTION
function calculateGST(productPrice) {
    return productPrice * 0.05;
}

// console.log(calculateGST(15));

// ARROW FUNCTION
let sum = (a, b) => {
    return a + b;
}

console.log(sum(1,2));

// FIRST CLASS FUNCTION
const greet = function (nama, kelas){
    console.log(`ASSALAMUALAIKUM YA AHLIL KUBUR, ${nama} Bin ${kelas}`);
}

const sayHello = greet;
sayHello('tegar', 'a dayat in my life');

// DEFAULT PARAMETER DALAM FUNCTION
function sapa(nama = "pengunjung") {
    console.log(`Halo, ${nama}`);
}

sapa();
sapa('dayat');

// let jumlah2 = 20;
// let total = jumlah2 + (hargaSatuan || 0);

// let harga = hargaSatuan2 !== undefined ? hargaSatuan : 0;
// console.log(harga);

// let harga1 =  hargaSatuan3 ?? 0;

// TRANSFORMASI ARRAY
const numbers = [1,2,3,4,5];
const doubles = numbers.map((numbers) => numbers * 2);

const numbers1 = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers1.filter((numbers) => numbers % 2 === 0 );
//filter berguna untuk memfilter agar array sesuai dengan kondisi dalam filter

const _numberReduce = [1,2,3,4,5];
const _sumReduce = _numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//reduce berguna untuk mengurangi atau menggabungkan elemen-elemen dalam array menjadi satu nilai tunggal.

const fruits = ['jeruk', 'mangga', 'jambu', 'strobery'];
fruits.forEach((fruits) => console.log(fruits));
//foreach berguna untuk melakukan perulangan pada array

const sortArr =  fruits.sort();
console.log(sortArr);
//sort berguna untuk mengurutkan elemen-elemen dalam sebuah array

const find = numbers.find((numbers) => numbers > 3);
console.log(find);
//find berguna untuk mencari kondisi yang sesuai


