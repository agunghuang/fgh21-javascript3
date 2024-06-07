const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'Februari', 'Maret', 'April',
                    'Mei','Juni', 'Juli', 'Agustus', 'September',
                    'Oktober', 'November', 'Desember'];
        if (!error) {
            callback(null, month)
        } else {
            callback(new error('sorry data not found'), []);
        }
    }, 4000);

}

const showMonth = (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        data.map((month, index) => {
            console.log(`${index + 1}. ${month}`);
        });
    }
}

getMonth(showMonth);