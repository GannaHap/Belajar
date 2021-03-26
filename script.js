// Data
let Data = {
  aboutUs: [
    {
      title: 'Cabang',
      jumlah: '100+',
      icon: '<i class="far fa-building"></i>',
    },
    {
      title: 'Murid',
      jumlah: '17293+',
      icon: '<i class="fas fa-users"></i>',
    },
    {
      title: 'Mentor',
      jumlah: '432+',
      icon: '<i class="fas fa-user-tie"></i>',
    },
    {
      title: 'Partner',
      jumlah: '472+',
      icon: '<i class="fas fa-handshake-alt"></i>',
    },
  ],
  paketKelas: [
    {
      title: 'Paket 3 Bulan',
      tagline: 'Paket yang kami Rekomendasikan untuk anda',
      hargaAwal: 'Rp 450,000',
      diskon: 'Diskon 70%',
      hargaDiskon: 'Rp 135,000',
    },
    {
      title: 'Paket 6 Bulan',
      tagline: 'Paket ini anda bisa melihat prestasi anak hasil dari kami mengajar',
      hargaAwal: 'Rp 850,000',
      diskon: 'Diskon 45%',
      hargaDiskon: 'Rp 467,500',
    },
    {
      title: 'Paket 1 Tahun',
      tagline: 'Paket ini anda bisa melihat anak anda menjadi lulusan terbaik di kelas',
      hargaAwal: 'Rp 1,600,000',
      diskon: 'Diskon 30%',
      hargaDiskon: 'Rp 1,120,000',
    },
  ],
  payment: ['img/payment/linkaja2.png', 'img/payment/dana.png', 'img/payment/gopay.png', 'img/payment/bca.png', 'img/payment/bni.png', 'img/payment/bri.png', 'img/payment/mandiri.png', 'img/payment/ovo.png'],
  kualitas: [
    {
      icon: '<i class="fal fa-money-bill-wave"></i>',
      title: 'Harga Terjangkau',
      text: 'Anda bisa berhemat dan tetap mendapatkan pembelajaran terbaik karena kami akan menawarkan banyak promo',
    },
    {
      icon: '<i class="fas fa-user-tie"></i>',
      title: 'Mentor Terbaik',
      text: 'Dibimbing oleh Mentor-mentor lulusan Universitas Ternama.',
    },
    {
      icon: '<i class="far fa-calendar-alt"></i>',
      title: 'Jadwal Fleksibel',
      text: 'Anda dapat mengatur jadwal pembelajaran sesuai keinginan.  ',
    },
  ],
  iconSosmed: [
    {
      icon: '<i class="fab fa-facebook-square"></i>',
      class: 'fb-sosmed',
    },
    {
      icon: '<i class="fab fa-youtube"></i>',
      class: 'yt-sosmed',
    },
    {
      icon: '<i class="fab fa-instagram"></i>',
      class: 'ig-sosmed',
    },
    {
      icon: '<i class="fab fa-twitter"></i>',
      class: 'twitt-sosmed',
    },
  ],
  review: [
    {
      image: 'img/review/student1.png',
      text: 'Hello, Setelah belajar di Belajar. Saya sering jadi juara kelas. Saya bisa mengerjakan soal matematika dengan sangat cepat. Terima Kasih Belajar.',
    },
    {
      image: 'img/review/student2.png',
      text: 'Hai, Terima kasih Belajar. Berkat kalian aku jadi mengerti belajar yang mudah dan tepat. Belajar dengan memahami bukan menghafal.',
    },
    {
      image: 'img/review/student3.jpg',
      text: 'Halo, Mata Pelajaran favoritku adalah Sains. belajar di Belajar membuatku menjadi siswa terpintar di kelas. Bahkan guruku menyebutku sebagai The Next Einstein. Terima Kasih Belajar',
    },
  ],
};

// Set Menu Icons
$('.menu-icons').on('click', (icon) => {
  console.log(icon);
  if (icon.target.classList.value === 'far fa-bars') {
    icon.target.remove();
    $('.menu-icons').append(`<i class="far fa-times"></i>`);
    $('.menu ul').addClass('show');
  } else {
    icon.target.remove();
    $('.menu-icons').append(`<i class="far fa-bars"></i>`);
    $('.menu ul').removeClass('show');
  }
});

// Show Navbar
const documentHTML = $(document);

documentHTML.on('scroll', () => {
  let currentScroll = documentHTML.scrollTop();
  if (currentScroll > 0) {
    $('nav').addClass('show');
    $('.menu ul a').addClass('show');
  } else {
    $('nav').removeClass('show');
    $('.menu ul a').removeClass('show');
  }
});

// Menu On Active
$('.menu ul a').on('click', (link) => {
  $.each($('.menu ul a'), (index, a) => {
    a.classList.remove('active');
  });
  link.currentTarget.classList.add('active');
});

// Document Paket Kelas
$.each(Data.paketKelas, (index, kelas) => {
  $('.board-layanan').append(`
  <div class="card-layanan">
    <div class="titleKelas">
      <h3>${kelas.title}</h3>
      <span>${kelas.tagline}</span>
    </div>
    <div class="hargaKelas">
      <div class="harga-top"> 
        <span class="hargaAwal">${kelas.hargaAwal}</span>
        <span class="diskon">${kelas.diskon}</span>
      </div>
      <div class="harga-bottom">
        ${kelas.hargaDiskon}
      </div>  
    </div>
    <div class="beli-kelas">
      <button>Beli Sekarang!</button>
    <div>
  </div>`);
});

// Payment
$(document).ready(function () {
  var owl = $('.board-payment');
  owl.owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
  });
  $('.owl-dots').remove();
});

$.each(Data.payment, (index, pay) => {
  $('.board-payment').append(`
    <img src="${pay}" alt="Payment"/>
  `);
});

// Kualitas
$.each(Data.kualitas, (index, quality) => {
  $('.detail-kualitas').append(`
    <div class="fitur-kualitas">
      ${quality.icon}
      <div class="fitur-text"> 
        <h3>${quality.title}</h3>
        <span>${quality.text}</span>
      </div>
    </div>
  `);
});

// Document About Us
$.each(Data.aboutUs, (index, about) => {
  $('.board-aboutUs').append(`
    <div class="card-aboutUs">
      <div class="icon-aboutUs">
        ${about.icon}
      </div>
      <div class="text-card-aboutUs">
        <span>${about.jumlah}</span>
        <span>${about.title}</span>
      </div>
    </div>
  `);
});

// Review
$(document).ready(function () {
  var owl = $('.board-review');
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
  });
  $('.owl-dots').remove();
  $('.owl-nav').remove();
});

$.each(Data.review, (index, rev) => {
  $('.board-review').append(`
    <div class="card-review">
      <img src="${rev.image}" alt="AJDHAJDGAKJDGAJKFGAJKFGAKFGAKJFGAKJFG" />
      <p>"${rev.text}"</p>
    </div>
  `);
});

// Follow Us
$.each(Data.iconSosmed, (index, sosmed) => {
  $('.sosmed-footer').append(`
    <a href="#" class="${sosmed.class}">
      ${sosmed.icon}
    </a>
  `);
});
