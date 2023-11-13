import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="w-full flex flex-col justify-center items-center gap-11 py-11">
        <div className="w-full max-w-[1080px] text-black flex flex-col gap-3">
          <div className="w-full flex flex-col justify-center items-center gap-5 py-3">
            <div className="text-black text-2xl capitalize font-bold">
              Pertanyaan yang sering ditanyakan
            </div>
            <div className="text-xl text-slate-500">
              Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun
              untuk kamu siap bekerja.
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 rounded-lg">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Syarat untuk mengikuti program pelatihan Fazztrack apa saja kak?
            </div>
            <div className="collapse-content">
              Syarat untuk mengikuti program pelatihan Fazztrack apa saja kak? -
              Tidak terikat kontrak dengan perusahan manapun, - Tidak dalam masa
              kuliah ataupun sekolah (kecuali semester 8), - Siap bekerja di
              perusahaan rekanan Fazztrack.
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 rounded-lg">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Bagaimana tahapan program pelatihan ini?
            </div>
            <div className="collapse-content">
              <p>
                Pendaftaran {">"} Tes dan Interview secara online {">"} Proses
                Pelatihan
                {">"} Tes dan Interview kerja {">"} Bekerja.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 rounded-lg">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Sistem tesnya bagaimana kak?
            </div>
            <div className="collapse-content">
              <p>
                Nantinya akan dilaksanakan tes secara online di domisili
                masing-masing. Soal akan dikirim di grup discord jam 09.00 pada
                hari Senin, sesuai jadwal tes yang tertera di
                fazztrack.com/bootcamp
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 rounded-lg">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Bagaimana proses penyaluran kerja di Fazztrack?
            </div>
            <div className="collapse-content">
              <p>
                Pada pekan akhir pelatihan, kamu akan diberi tugas untuk membuat
                CV. Kemudian CV tersebut akan disalurkan oleh Fazztrack ke
                perusahaan rekanan kami. Jika CV kamu terpilih, kami akan
                menjadwalkan tes maupun interview dengan perusahaan tersebut.
                Jangan khawatir jika kamu belum terpanggil interview karena
                Fazztrack akan selalu membantu kamu untuk disalurkan kerja ke
                perusahaan yang lain.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border-2 rounded-lg">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Bagaimana proses pelatihan saat pandemi COVID-19?
            </div>
            <div className="collapse-content">
              <p>Pelatihan diadakan secara online saat pandemi COVID-19.</p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center py-7">
            <Link
              to={""}
              className="btn btn-neutral bg-slate-100 border-slate-300 hover:bg-slate-300 hover:boreder-slate-300 capitalize text-black font-semibold text-lg"
            >
              Pelajari Selengkapnya
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full h-72 bg-primary/10 flex flex-col justify-center items-center gap-11">
        <div className="text-3xl font-semibold text-black">
          Tunggu Apa Lagi? GabungBersama Kami!
        </div>
        <Link className="btn btn-primary text-white capitalize font-semibold text-lg">
          Daftar Sekarang
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Home;
