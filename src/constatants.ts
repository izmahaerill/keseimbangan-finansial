import {
  VideoEducation,
  VideoSection,
  type Artikel,
  type Icons,
  type Quotes,
  type Remainder,
  type data,
  type table_rows,
} from "@/interfaces";
export const ARTIKEL: Artikel[] = [
  {
    title: "Mengelola Utang dengan Bijak: Strategi Pelunasan dan Konsolidasi",
    subTittle:
      "Artikel ini memberikan panduan tentang cara mengelola utang pribadi, termasuk strategi pelunasan yang efektif dan opsi konsolidasi utang untuk mengurangi beban keuangan.",
    manag: "Management",
    keu: "Keuangan",
    image:
      "https://img.freepik.com/free-photo/high-angle-two-stacks-coins-grass-with-jar-plants_23-2148803922.jpg",
  },
  {
    title:
      "Bagaimana Menyiapkan Dana Pendidikan Anak: Rencana Keuangan yang Tepat",
    subTittle:
      "Artikel ini memberikan panduan langkah demi langkah tentang cara merencanakan keuangan untuk pendidikan anak, termasuk pembentukan rencana tabungan dan investasi yang efektif.",
    manag: "Management",
    keu: "Keuangan",
    image:
      "https://img.freepik.com/free-photo/closeup-coins-jar-table-with-pesos-lights_181624-23260.jpg",
  },
];

export const QUOTES: Quotes[] = [
  {
    tittle: '"Obi"',
    sub: '"Uang bisa menjadi alat yang hebat jika dikelola dengan bijak, tetapi bisa menjadi penguasa yang kejam jika dibiarkan menguasai kita."',
  },
  {
    tittle: '"Indra"',
    sub: '"Jangan pernah meremehkan kekuatan menginvestasikan uang Anda. Investasi yang cerdas adalah kunci untuk menciptakan kekayaan yang berkelanjutan."',
  },
  {
    tittle: '"Indira"',
    sub: '"Jika Anda tidak mengendalikan uang Anda, maka uang akan mengendalikan Anda."',
  },
  {
    tittle: '"Bisma"',
    sub: '"Kebebasan finansial adalah ketika penghasilan pasif Anda melebihi biaya hidup Anda, memungkinkan Anda hidup sesuai keinginan tanpa khawatir tentang uang."',
  },
];

export const VIDEOSECTION: VideoSection[] = [
  {
    id: 1,
    tittle: "Bijak Mengelola Keuangan dengan seni",
    manag: "Management",
    keu: "Keuangan",
    subFooter: "2 Menit 30 Detik",
    src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=uv5436-5BD7-CtuQ",
  },
  {
    id: 2,
    tittle: "Pengelolaan Keuangan Untuk Finansial under",
    manag: "Management",
    keu: "Keuangan",
    subFooter: "2 Menit 30 Detik",
    src: "https://www.youtube.com/embed/7yW_GD-RoZY?si=Xfn1zGIhF1TK4O_A",
  },
  {
    id: 3,
    tittle: "Investasi Keuangan Untuk Finansial Dimasa top",
    manag: "Management",
    keu: "Keuangan",
    subFooter: "2 Menit 30 Detik",
    src: "https://www.youtube.com/embed/diREKdkdijI?si=HDb9LhRs1FD5h3xA",
  },
];

export const VIDEO_EDUCATION: VideoEducation[] = [
  {
    id: 1,
    name: "Pengelolaan Keuangan",
    data: [
      {
        id: 1,
        title: "Bijak Mengelola Keuangan",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "27 Menit 40 Detik",
        category: ["Management", "Keuangan"],
      },
      {
        id: 2,
        title: "Tips Efektif Menabung",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "15 Menit 20 Detik",
        category: ["Finance", "Savings"],
      },
      {
        id: 3,
        title: "Investasi Cerdas untuk Pemula",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "40 Menit 15 Detik",
        category: ["Investment", "Finance"],
      },
      {
        id: 4,
        title: "Manajemen Keuangan Pribadi",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "22 Menit 50 Detik",
        category: ["Personal Finance", "Management"],
      },
      {
        id: 5,
        title: "Cara Cerdas Mengatur Anggaran Bulanan",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "18 Menit 30 Detik",
        category: ["Budgeting", "Finance"],
      },
    ],
  },
  {
    id: 2,
    name: "Investasi dan Tabungan",
    data: [
      {
        id: 6,
        title: "Panduan Investasi Saham",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "35 Menit 55 Detik",
        category: ["Investment", "Stocks"],
      },
      {
        id: 7,
        title: "Strategi Pengelolaan Keuangan Bisnis",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "28 Menit 10 Detik",
        category: ["Business", "Finance"],
      },
      {
        id: 8,
        title: "Mengelola Utang dengan Bijak",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "20 Menit 45 Detik",
        category: ["Debt Management", "Finance"],
      },
      {
        id: 9,
        title: "Rencana Keuangan untuk Pensiun",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "32 Menit 25 Detik",
        category: ["Retirement Planning", "Finance"],
      },
      {
        id: 10,
        title: "Belajar Menggunakan Aplikasi Keuangan",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "16 Menit 55 Detik",
        category: ["Financial Apps", "Education"],
      },
    ],
  },
  {
    id: 3,
    name: "Managemen Utang",
    data: [
      {
        id: 11,
        title: "Bijak Mengelola Keuangan",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "27 Menit 40 Detik",
        category: ["Management", "Keuangan"],
      },
      {
        id: 12,
        title: "Tips Efektif Menabung",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "15 Menit 20 Detik",
        category: ["Finance", "Savings"],
      },
      {
        id: 13,
        title: "Investasi Cerdas untuk Pemula",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "40 Menit 15 Detik",
        category: ["Investment", "Finance"],
      },
      {
        id: 14,
        title: "Manajemen Keuangan Pribadi",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "22 Menit 50 Detik",
        category: ["Personal Finance", "Management"],
      },
      {
        id: 15,
        title: "Cara Cerdas Mengatur Anggaran Bulanan",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "18 Menit 30 Detik",
        category: ["Budgeting", "Finance"],
      },
    ],
  },
  {
    id: 4,
    name: "Keuangan Keluarga",
    data: [
      {
        id: 16,
        title: "Panduan Investasi Saham",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "35 Menit 55 Detik",
        category: ["Investment", "Stocks"],
      },
      {
        id: 17,
        title: "Strategi Pengelolaan Keuangan Bisnis",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "28 Menit 10 Detik",
        category: ["Business", "Finance"],
      },
      {
        id: 18,
        title: "Mengelola Utang dengan Bijak",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "20 Menit 45 Detik",
        category: ["Debt Management", "Finance"],
      },
      {
        id: 19,
        title: "Rencana Keuangan untuk Pensiun",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "32 Menit 25 Detik",
        category: ["Retirement Planning", "Finance"],
      },
      {
        id: 20,
        title: "Belajar Menggunakan Aplikasi Keuangan",
        src: "https://www.youtube.com/embed/ml6lQnqOIM4?si=8OS-UVlHRpOEtnWS",
        duration: "16 Menit 55 Detik",
        category: ["Financial Apps", "Education"],
      },
    ],
  },
];

export const LOGO: Icons[] = [
  {
    icon: "ic:baseline-facebook",
    url: "https://web.facebook.com/?_rdc=1&_rdr",
  },
  { icon: "ri:instagram-fill", url: "https://www.instagram.com/?hl=en" },
  { icon: "ic:baseline-apple", url: "https://www.apple.com/" },
];

export const REMAINDER: Remainder[] = [
  {
    id: 1,
    tittle: "Remainder",
    subTittle:
      "Pengingat tagihan dan kebutuhan adalah pesan yang digunakan untuk mengingatkan tentang pembayaran tagihan dan kebutuhan penting yang harus dipenuhi. ",
    LihatDetail: [
      {
        id: 2,
        tittle: "Detail Remainder",
        subTittle:
          "Manajemen Pengeluaran adalah suatu fitur yang digunakan untuk mengelola dan mengontrol pengeluaran keuangan dalam sebuah rumah tangga.",
      },
    ],
  },
];

export const TABLE_ROWS: table_rows[] = [
  {
    id: 1,
    pengeluaran: "John Michael",
    kategori: "Manager",
    date: "23/04/18",
    spending: "Rp.20.000",
  },
  {
    id: 2,
    pengeluaran: "Alexa Liras",
    kategori: "Developer",
    date: "23/04/18",
    spending: "Rp.30.000",
  },
  {
    pengeluaran: "",
    kategori: "",
    date: "Total",
    spending: "Rp.50.000",
  },
];

export const Data: data[] = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];
