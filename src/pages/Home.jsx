import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="w-full flex flex-col justify-center items-center gap-11 py-11">
        <div className="w-full max-w-[1080px] text-black flex flex-col gap-3">
          <div className="w-full flex justify-between items-center my-9">
            <div className="flex flex-col gap-2">
              <div className="text-black text-2xl font-bold">
                Cerita Alumni Bootcamp
              </div>
              <div className="text-slate-500 text-xl font-semibold">
                Cerita perjalanan heroik alumni bootcamp
              </div>
            </div>
            <div>
              <Link
                to={""}
                className="btn btn-neutral rounded bg-slate-50 border-slate-200 hover:bg-slate-200 hover:border-slate-200 capitalize text-black font-semibold text-lg"
              >
                Lihat cerita lainnya
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-5">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_586x328/img/alumni-story/alumni-story-1.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Lulusan Pesantren juga Bisa jadi DevOps Engineer
                </h2>
                <div>
                  Menjadi seorang santri sekaligus pelajar, bukanlah hal yang
                  mudah. Menjalani dua kegiatan secara bersamaan membuat saya
                  merasa kurang waktu belajar pemrograman disekolah. Banyak
                  tantangan yang harus dihadapi. Mulai dari bagaimana membagi
                  waktu antara mengaji, belajar akademik dan upgrade skills
                  programming.
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_586x328/img/alumni-story/alumni-story-1.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Lulusan Pesantren juga Bisa jadi DevOps Engineer
                </h2>
                <div>
                  Menjadi seorang santri sekaligus pelajar, bukanlah hal yang
                  mudah. Menjalani dua kegiatan secara bersamaan membuat saya
                  merasa kurang waktu belajar pemrograman disekolah. Banyak
                  tantangan yang harus dihadapi. Mulai dari bagaimana membagi
                  waktu antara mengaji, belajar akademik dan upgrade skills
                  programming.
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_586x328/img/alumni-story/alumni-story-1.png"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Lulusan Pesantren juga Bisa jadi DevOps Engineer
                </h2>
                <div>
                  Menjadi seorang santri sekaligus pelajar, bukanlah hal yang
                  mudah. Menjalani dua kegiatan secara bersamaan membuat saya
                  merasa kurang waktu belajar pemrograman disekolah. Banyak
                  tantangan yang harus dihadapi. Mulai dari bagaimana membagi
                  waktu antara mengaji, belajar akademik dan upgrade skills
                  programming.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              className="btn btn-neutral rounded bg-slate-50 border-slate-200 hover:bg-slate-200 hover:border-slate-300 capitalize text-black font-semibold text-lg"
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
