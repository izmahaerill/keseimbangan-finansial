import {
  VidEducation,
  type Artikel,
  type Icons,
  type Quotes,
  type Remainder,
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

export const VIDEDUCATION: VidEducation[] = [
  {
    image:
      "https://img.freepik.com/free-photo/high-angle-two-stacks-coins-grass-with-jar-plants_23-2148803922.jpg",
    tittle: "Investasi Untuk Keseimbangan Finansial Dimasa Depan",
    manag: "Management",
    keu: "Keuangan",
    subFooter: "2 Menit 30 Detik",
  },
  {
    image:
      "https://img.freepik.com/free-photo/high-angle-two-stacks-coins-grass-with-jar-plants_23-2148803922.jpg",
    tittle: "Investasi Untuk Keseimbangan Finansial Dimasa Depan",
    manag: "Management",
    keu: "Keuangan",
    subFooter: "2 Menit 30 Detik",
  },
  {
    image:
      "https://img.freepik.com/free-photo/high-angle-two-stacks-coins-grass-with-jar-plants_23-2148803922.jpg",
    tittle: "Investasi Untuk Keseimbangan Finansial Dimasa Depan",
    manag: "Management",
    keu: "Keuangan",
    subFooter: "2 Menit 30 Detik",
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
