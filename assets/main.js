let checkedNames = [];

function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val().trim();
    if (nama === '') {
        alert('Nama tidak boleh kosong!');
    } else if (checkedNames.includes(nama.toLowerCase())) {
        alert('Nama sudah di cek!');
    } else {
        checkedNames.push(nama.toLowerCase());
        let status = ['isi', 'kosong'];
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Ular Memble',
                'Sapi Pamokol',
                'Komodo',
                'Mulut Bebek',
                'Pelakor',
                'Pembinor'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
        } else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
        }
        $('#search').val('');
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});
