import Layout from "@/components/Layout/Layout";
import { IVideoData, VIDEO_EDUCATION } from "@/constatants";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Article() {
  const [detailEducation, setDetailEducation] = useState<IVideoData>();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id as string;

      const videoEducation = VIDEO_EDUCATION.find((item) =>
        item.data.some((data) => data.id === parseInt(id))
      );

      if (videoEducation) {
        const educationData = videoEducation.data.find(
          (item) => item.id === parseInt(id)
        );

        setDetailEducation(educationData);
      }
    }
  }, [router.isReady, router.query.id]);

  return (
    <Layout>
      <section className="container mx-auto mt-32">
        <Typography variant="h5">Artikel</Typography>
        <Typography variant="h2">{detailEducation?.title}</Typography>
        <Typography variant="h6" color="gray">
          Alexander, Agustus 20, 2021
        </Typography>
        <iframe
          src={detailEducation?.src}
          title={detailEducation?.title}
          allowFullScreen
          className="my-10 h-[40rem] w-full rounded-md"
        />
        <article className="flex flex-col gap-7">
          <Typography variant="paragraph">
            Kehidupan modern sering kali membawa kita ke dalam berbagai
            tantangan, salah satunya adalah masalah keuangan keluarga.
            Perekonomian yang tidak stabil, peningkatan biaya hidup, serta beban
            finansial yang semakin bertambah dapat membuat stres dan
            ketidakpastian dalam kehidupan sehari-hari. Namun, dengan
            perencanaan yang baik dan langkah-langkah yang tepat, keluarga Anda
            dapat mengatasi masalah keuangan dan menuju kesejahteraan finansial
            yang lebih baik.
          </Typography>
          <Typography variant="h5" className="font-semibold">
            1. Evaluasi Keuangan Keluarga Anda
          </Typography>
          <Typography variant="paragraph">
            Langkah pertama dalam mengatasi masalah keuangan keluarga adalah
            dengan melakukan evaluasi keuangan. Buat daftar pendapatan dan
            pengeluaran keluarga Anda. Ini akan membantu Anda memiliki pemahaman
            yang lebih baik tentang seberapa besar selisihnya dan di mana Anda
            dapat mengurangi pengeluaran yang tidak perlu.
          </Typography>
          <Typography variant="h5" className="font-semibold">
            2. Buat Rencana Anggaran Keluarga
          </Typography>
          <Typography variant="paragraph">
            Setelah Anda memiliki gambaran yang jelas tentang keuangan keluarga
            Anda, buatlah rencana anggaran. Tentukan seberapa besar alokasi yang
            akan Anda berikan untuk kebutuhan dasar, seperti makanan, tempat
            tinggal, dan pendidikan. Pastikan juga untuk mengalokasikan dana
            untuk darurat dan tabungan jangka panjang.
          </Typography>
          <Typography variant="h5" className="font-semibold">
            3. Kurangi Utang yang Ada
          </Typography>
          <Typography variant="paragraph">
            Jika keluarga Anda memiliki utang yang signifikan, prioritaskan
            untuk menguranginya. Prioritaskan pembayaran utang dengan tingkat
            bunga tinggi terlebih dahulu. Selain itu, pertimbangkan untuk
            mengonsolidasikan utang Anda menjadi satu pinjaman dengan tingkat
            bunga lebih rendah jika memungkinkan.
          </Typography>
          <Typography variant="h5" className="font-semibold">
            4. Cari Cara untuk Meningkatkan Pendapatan
          </Typography>
          <Typography variant="paragraph">
            Jika anggaran keluarga Anda masih mengalami kesulitan, carilah cara
            untuk meningkatkan pendapatan. Anda bisa mempertimbangkan pekerjaan
            sampingan, menjual barang yang tidak lagi Anda butuhkan, atau
            mengembangkan keterampilan baru yang bisa meningkatkan peluang karir
            Anda.
          </Typography>
          <Typography variant="h5" className="font-semibold">
            5. Libatkan Seluruh Keluarga dalam Perencanaan Keuangan
          </Typography>
          <Typography variant="paragraph">
            Keuangan keluarga bukanlah tanggung jawab satu orang saja. Libatkan
            seluruh anggota keluarga dalam perencanaan keuangan, terutama jika
            Anda memiliki anak-anak yang sudah cukup besar. Ajarkan mereka
            tentang pentingnya mengelola uang dengan bijak dan tanggung jawab
            keuangan.
          </Typography>
          <Typography variant="h5" className="font-semibold">
            6. Konsultasikan dengan Ahli Keuangan
          </Typography>
          <Typography variant="paragraph">
            Jika Anda merasa kesulitan mengatasi masalah keuangan keluarga Anda
            sendiri, jangan ragu untuk berkonsultasi dengan seorang ahli
            keuangan atau konsultan keuangan. Mereka dapat memberikan saran yang
            spesifik sesuai dengan situasi keuangan Anda.
          </Typography>
        </article>
      </section>
    </Layout>
  );
}
