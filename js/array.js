let IndexRandom = new Array(100);

for (let i = 0; i < 100; i++) {
   IndexRandom[i] = Math.floor(Math.random() * 50);
}

console.log(IndexRandom);

let IndexGanjil = [];
let IndexGenap = [];

for (let i = 0; i < IndexRandom.length; i++) {
    if ([i] % 2 === 0) {
        IndexGenap.push(IndexRandom[i]);
    } else {
        IndexGanjil.push(IndexRandom[i]);
    }
}

console.log("Array Angka Ganjil:",IndexGanjil);
console.log("Array Angka Genap:", IndexGenap);

function IndexAcak(arraybaru) {
    let min = arraybaru[0];
    let max = arraybaru[0];
    let total = 0;

    for (var i = 0; i < arraybaru.length; i++) {
        
        if (arraybaru[i] > min) {
            min = arraybaru[i];
        }
 
        if (arraybaru[i] < max) {
            max = arraybaru[i];
        }

        total += arraybaru[i];
    }
    let average = total /arraybaru.length;
        return {
            min: max,
            max: min,
            total: total,
            average: average
        };
}

let StatsGanjil = IndexAcak(IndexGanjil);
let StatsGenap = IndexAcak(IndexGenap);

console.log(StatsGanjil)
console.log(StatsGenap)

let PerbandinganMax = StatsGanjil.max > StatsGenap.max ? "Max lebih besar array ganjil" : StatsGanjil.max < StatsGenap.max ? "Max lebih besar array genap" : "Max memiliki nilai sama antara ganjil dan genap"
let PerbandinganMin = StatsGanjil.min > StatsGenap.min ? "Min lebih besar array ganjil" : StatsGanjil.min < StatsGenap.min ? "Min lebih besar array genap" : "Min memiliki nilai sama antara ganjil dan genap"
let PerbandinganAverage = StatsGanjil.average > StatsGenap.average ? "Average lebih besar array ganjil" : StatsGanjil.average < StatsGenap.average ? "Average lebih besar array genap" : "Average memiliki nilai sama antara ganjil dan genap"
let PerbandinganTotal = StatsGanjil.total > StatsGenap.total ? "Total lebih besar array ganjil" : StatsGanjil.total < StatsGenap.total ? "Total lebih besar array genap" : "Total memiliki nilai sama antara ganjil dan genap"

console.log(PerbandinganMax);
console.log(PerbandinganMin);
console.log(PerbandinganAverage);
console.log(PerbandinganTotal);


