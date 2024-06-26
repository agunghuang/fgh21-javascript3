const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja'))
        }
    }, 3000)
})
}

cekHariKerja('senin')
    .then((result) => {
        console.log(`${result} adalah hari kerja`);
    })
    .catch((error) => {
        console.log(error.message);
    });
//then-catch


    (async () => {
        try {
            const result = await cekHariKerja('senin');
            console.log(`${result} adalah hari kerja`);
        } catch (error) {
            console.log(error.message);
        }
    })();
//try-catch