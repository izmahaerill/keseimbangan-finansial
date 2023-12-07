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

export interface VidEducation {
  id: number;
  image: string;
  tittle: string;
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
