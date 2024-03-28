function calculateNetPrice(hamFiyat, kargo, komisyonOrani, vergiOrani, reklamOrani) {
    let c = hamFiyat + kargo; // Başlangıçta net fiyatı ham fiyat ve kargo bedeli olarak ayarlayın
    let d, a, r; // d: komisyon, a: vergi, r: reklam

    const tolerance = 0.01; // Tolerans değeri
    let diff = 0;

    do {
        d = c * komisyonOrani / 100; // Komisyon bedelini hesaplayın
        a = c * vergiOrani / 100;     // Vergiyi hesaplayın
        r = c * reklamOrani / 100;    // Reklam bedelini hesaplayın
        let newC = hamFiyat + kargo + d + a + r; // Yeni net fiyatı hesaplayın

        diff = Math.abs(newC - c); // Eski ve yeni net fiyat arasındaki farkı hesaplayın
        c = newC; // Net fiyatı güncelleyin

    } while (diff > tolerance); // Fark toleranstan büyük olduğu sürece döngüyü sürdürün

    return c;
}

// Parametreler
let minHamFiyat = 386;
let maxHamFiyat = 425;
let kargoBedeli = 78.6;
let komisyonOrani = 15.2 // Komisyon oranı %21.36
let vergiOrani = 10;       // Vergi oranı %10
let reklamOrani = 1;       // Reklam oranı %1

// Minimum ve Maksimum Fiyatlar için Net Fiyat Hesaplama
let netFiyatMin = calculateNetPrice(minHamFiyat, kargoBedeli, komisyonOrani, vergiOrani, reklamOrani);
let netFiyatMax = calculateNetPrice(maxHamFiyat, kargoBedeli, komisyonOrani, vergiOrani, reklamOrani);

console.log("Minimum Net Fiyat:", netFiyatMin);
console.log("Maksimum Net Fiyat:", netFiyatMax);

