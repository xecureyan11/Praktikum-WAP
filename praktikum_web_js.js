document.getElementById("tombolKlik").addEventListener("click", function () {
    document.getElementById("teks").innerText = "You've clicked the button";
});

document.getElementById("tombolKlik").addEventListener("click", function () {
    // Menambahkan div baru
    let kotak = document.createElement("div");
    kotak.style.width = "100px";
    kotak.style.height = "100px";
    kotak.style.borderRadius = "50%"    ;
    kotak.style.backgroundColor = "purple";
    kotak.style.margin = "10px auto";
    document.body.appendChild(kotak);

    // Ubah warna latar belakang kotak
    kotak.addEventListener("click", function () {
        kotak.style.backgroundColor = kotak.style.backgroundColor === "blue" ? "green" : "blue";
    });
});

document.getElementById("formNama").addEventListener("submit", function (event) {
    event.preventDefault();  // Mencegah halaman direload
    let nama = document.getElementById("nama").value;
    document.getElementById("pesan").innerText = "Halo, " + nama + "!";

});

document.getElementById("kotakAnimasi").addEventListener("click", function () {
    this.classList.toggle("grow");
});

document.getElementById("ambilData").addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            let daftarPengguna = "<ol>";
            data.forEach(user => {
                daftarPengguna += `<li>${user.name}</li>`;
            });
            daftarPengguna += "</ol>";
            document.getElementById("hasil").innerHTML = daftarPengguna;
        });
});



