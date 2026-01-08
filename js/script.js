// 1. Script untuk Menu Hamburger (Mobile)
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
}

// 2. Script untuk Modal di Home
const modal = document.getElementById('modal');
const btnOpen = document.getElementById('openModal');
const spanClose = document.getElementById('closeModal');

if (btnOpen) {
    btnOpen.onclick = function() {
        modal.style.display = "flex";
    }
}

if (spanClose) {
    spanClose.onclick = function() {
        modal.style.display = "none";
    }
}

// Tutup modal jika klik di luar area konten
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 3. Script Validasi Form Kontak
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('massage').value;

    if (name == "" || email == "" || message == "") {
        alert("Mohon isi semua kolom formulir!");
        return false; // Mencegah form terkirim
    }
    
    alert("Terima kasih, " + name + "! Pesan Anda berhasil dikirim (Simulasi).");
    return true;
}