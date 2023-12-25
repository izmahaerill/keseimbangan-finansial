export interface Artikel {
  title: string;
  subTittle: string;
  manag: string;
  keu: string;
  image: string;
}

export interface Quotes {
  tittle: string;
  sub: string;
}

export interface VideoEducation {
  id: number;
  name: string;
  data: VideoData[];
}

export interface VideoData {
  id: number;
  title: string;
  src: string;
  duration: string;
  category: string[];
}

export interface VideoSection {
  id: number;
  tittle: string;
  src: string;
  manag: string;
  keu: string;
  subFooter: string;
}

export interface Icons {
  icon: string;
  url: string;
}

export interface Remainder {
  id: number;
  tittle: string;
  subTittle: string;
  LihatDetail: Array<{
    id: number;
    tittle: string;
    subTittle: string;
  }>;
}

export interface table_rows {
  id?: number;
  pengeluaran: string;
  kategori: string;
  date: string;
  spending: string;
}

export interface data {
  id: number;
  year: number;
  userGain: number;
  userLost: number;
}

export type ManagemenType = {
  id: string;
  namaPengeluaran: string;
  kategori: string;
  waktuTransaksi: Date;
  jumlahPengeluaran: number;
};

export type PengingatType = {
  id: string;
  namaPengeluaran: string;
  kategori: string;
  waktuDiingatkan: string;
  jumlahPengeluaran: number;
};
