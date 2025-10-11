// Mengambil elemen layar dari HTML untuk kita manipulasi.
const display = document.getElementById('result');

// Menambahkan angka atau operator ke layar.
function appendValue(value) {
    display.value += value;
}

// Mengosongkan seluruh isi layar (tombol 'C').
function clearScreen() {
    display.value = '';
}

// Menghapus satu karakter terakhir (tombol 'DEL').
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Menghitung ekspresi di layar dan menampilkan hasilnya (tombol '=').
function calculateResult() {
    try {
        // eval() secara ajaib menghitung string matematika, misal "2+3*2" menjadi 8.
        display.value = eval(display.value);
    } catch (error) {
        // Jika perhitungan gagal (misal "5*/2"), tampilkan 'Error'.
        display.value = 'Error';
    }
}

