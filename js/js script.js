console.log('Javascript is working!');

function validateForm() {
    let input = document.getElementById('main-input');
    console.log(input.value);

    if (input.value === '') {
        alert('Tolong isi inputan');
    } else {
        /// Proses Konversi     
        let calc = convertToFahrenheit(input.value);

        /// Tampilkan Hasil
        document.getElementById('main-result').value = calc;
        document.getElementById('Cara-konversi').value = `Diketahui: C = ${input.value}, maka F = (${input.value} * 9 / 5 ) + 32 = ${calc}`;

        console.log('Berhasil di eksekusi');
    }
}

/// Fungsi Konversi Celcius ke Fahrenheit
let convertToFahrenheit = (input) => {
    return (input * 9 / 5) + 32;
}

/// Fungsi Reset
function resetForm() {
    document.getElementById('main-input').value = '';
    document.getElementById('main-result').value = '';
    document.getElementById('Cara-konversi').value = '';
    console.log('Form telah direset');
}

/// Fungsi Reverse (Fahrenheit ke Celcius)
function reverseConversion() {
    let input = document.getElementById('main-input');
    
    if (input.value === '') {
        alert('Tolong isi inputan');
    } else {
        let calc = convertToCelcius(input.value);

        /// Tampilkan Hasil
        document.getElementById('main-result').value = calc;
        document.getElementById('Cara-konversi').value = `Diketahui: F = ${input.value}, maka C = (${input.value} - 32) * 5/9 = ${calc}`;

        console.log('Reverse konversi berhasil');
    }
}

/// Fungsi Konversi Fahrenheit ke Celcius
let convertToCelcius = (input) => {
    return ((input - 32) * 5 / 9).toFixed(2);
}
