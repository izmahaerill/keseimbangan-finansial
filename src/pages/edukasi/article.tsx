import Layout from "@/components/Layout/Layout";
import img from "@/img/Rectangle 18207.png";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Article() {
  return (
    <Layout>
      <div className="container mx-auto px-5">
        <div className="text-anjirr mt-24 sm:mt-28 md:mt-36 lg:mt-40 lg:px-7">
          <Typography variant="h6">Artikel</Typography>
          <Typography variant="h2">Masalah Keuangan Keluarga </Typography>
          <Typography variant="h6" className="text-gray-600">
            Alexander , Agustus 20, 2021{" "}
          </Typography>
        </div>
        <div className="flex justify-center mt-5 lg:mt-20 sm:mt-10 md:mt-14 lg:px-7">
          <Image
            className="h-60 bg-cover sm:h-72 md:h-80 lg:h-96"
            priority
            alt="keseimbangan finansial"
            src={img}
            width={1200}
            height={500}
          ></Image>
        </div>
        <article className="container flex flex-col gap-7 lg:px-7">
          <Typography className="mt-10">
            Kehidupan modern sering kali membawa kita ke dalam berbagai
            tantangan, salah satunya adalah masalah keuangan keluarga.
            Perekonomian yang tidak stabil, peningkatan biaya hidup, serta beban
            finansial yang semakin bertambah dapat membuat stres dan
            ketidakpastian dalam kehidupan sehari-hari. Namun, dengan
            perencanaan yang baik dan langkah-langkah yang tepat, keluarga Anda
            dapat mengatasi masalah keuangan dan menuju kesejahteraan finansial
            yang lebih baik.
          </Typography>
          <h3>
            <Typography className="text-anjirr font-semibold">
              1. Evaluasi Keuangan Keluarga Anda
            </Typography>
            <Typography>
              Langkah pertama dalam mengatasi masalah keuangan keluarga adalah
              dengan melakukan evaluasi keuangan. Buat daftar pendapatan dan
              pengeluaran keluarga Anda. Ini akan membantu Anda memiliki
              pemahaman yang lebih baik tentang seberapa besar selisihnya dan di
              mana Anda dapat mengurangi pengeluaran yang tidak perlu.{" "}
            </Typography>
          </h3>
          <h3>
            <Typography className="text-anjirr font-semibold">
              2. Buat Rencana Anggaran Keluarga
            </Typography>
            <Typography>
              Setelah Anda memiliki gambaran yang jelas tentang keuangan
              keluarga Anda, buatlah rencana anggaran. Tentukan seberapa besar
              alokasi yang akan Anda berikan untuk kebutuhan dasar, seperti
              makanan, tempat tinggal, dan pendidikan. Pastikan juga untuk
              mengalokasikan dana untuk darurat dan tabungan jangka panjang.
            </Typography>
          </h3>
          <h3>
            <Typography className="text-anjirr font-semibold">
              3. Kurangi Utang yang Ada
            </Typography>
            <Typography>
              Jika keluarga Anda memiliki utang yang signifikan, prioritaskan
              untuk menguranginya. Prioritaskan pembayaran utang dengan tingkat
              bunga tinggi terlebih dahulu. Selain itu, pertimbangkan untuk
              mengonsolidasikan utang Anda menjadi satu pinjaman dengan tingkat
              bunga lebih rendah jika memungkinkan.
            </Typography>
          </h3>
          <h3>
            <Typography className="text-anjirr font-semibold">
              4. Cari Cara untuk Meningkatkan Pendapatan
            </Typography>
            <Typography>
              Jika anggaran keluarga Anda masih mengalami kesulitan, carilah
              cara untuk meningkatkan pendapatan. Anda bisa mempertimbangkan
              pekerjaan sampingan, menjual barang yang tidak lagi Anda butuhkan,
              atau mengembangkan keterampilan baru yang bisa meningkatkan
              peluang karir Anda.
            </Typography>
          </h3>
          <h3>
            <Typography className="text-anjirr font-semibold">
              5. Libatkan Seluruh Keluarga dalam Perencanaan Keuangan
            </Typography>
            <Typography>
              Keuangan keluarga bukanlah tanggung jawab satu orang saja.
              Libatkan seluruh anggota keluarga dalam perencanaan keuangan,
              terutama jika Anda memiliki anak-anak yang sudah cukup besar.
              Ajarkan mereka tentang pentingnya mengelola uang dengan bijak dan
              tanggung jawab keuangan.
            </Typography>
          </h3>
          <h3>
            <Typography className="text-anjirr font-semibold">
              6. Konsultasikan dengan Ahli Keuangan
            </Typography>
            <Typography>
              Jika Anda merasa kesulitan mengatasi masalah keuangan keluarga
              Anda sendiri, jangan ragu untuk berkonsultasi dengan seorang ahli
              keuangan atau konsultan keuangan. Mereka dapat memberikan saran
              yang spesifik sesuai dengan situasi keuangan Anda.
            </Typography>
          </h3>
        </article>
      </div>
    </Layout>
  );
}
