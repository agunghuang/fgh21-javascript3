// 1.Fungsi untuk menunggu beberapa detik sebelum menampilkan pesan
const tungguBeberapaDetik = (detik) => {
    return new Promise((resolve, reject) => {
        if (detik < 0) {
            reject(new Error('Masukkan harus lebih besar dari 0'));
        } else {
            setTimeout(() => {
                resolve(`Sudah menunggu selama ${detik} detik`);
            }, detik * 1000);
        }
    });
};
tungguBeberapaDetik(3)
    .then((pesan) => {
        console.log(pesan);
    })
    .catch((error) => {
        console.log('Terjadi kesalahan:', error.message);
    });

// 2. Fungsi untuk mengecek apakah angka ganjil atau genap
const cekGanjilGenap = (angka) => {
    return new Promise((resolve, reject) => {
        if (typeof angka !== 'number') {
            reject(new Error('Masukkan harus berupa angka'));
        } else {
            if (angka % 2 === 0) {
                resolve(`${angka} adalah angka genap`);
            } else {
                resolve(`${angka} adalah angka ganjil`);
            }
        }
    });
};
cekGanjilGenap(7)
    .then((pesan) => {
        console.log(pesan);
    })
    .catch((error) => {
        console.log('Terjadi kesalahan:', error.message);
    });

