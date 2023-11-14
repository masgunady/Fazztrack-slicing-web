import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AiFillHeart, AiOutlineArrowRight } from "react-icons/ai";
import bootcampBenefit from "../assets/images/bootcamp-benefits-01.webp";
import miniBootcampImg from "../assets/images/minicamp-illustration.webp";
import { FaChalkboardTeacher } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Header />
      <section className="w-full flex flex-col justify-center items-center gap-11 pt-24 pb-28">
        <div className="max-w-[1080px] flex flex-col justify-center items-center gap-9">
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-11 pb-7">
            <div className="flex flex-col gap-11 w-full lg:w-[70%]">
              <div>
                <div className="text-5xl font-bold text-primary pb-2 text-center lg:text-left">
                  Ubah Hidupmu
                </div>
                <div className="text-5xl font-bold text-black text-center lg:text-left">
                  Sekarang Juga
                </div>
              </div>
              <div className="text-black text-xl w-full lg:w-[70%] text-center lg:text-left px-11 md:px-0">
                Belajar menjadi software engineer secara online/remote selama 3
                - 6 bulan sampai diterima kerja, tanpa bayar di depan (Income
                Share Agreement).
              </div>
              <div className="w-full flex md:justify-start justify-center">
                <Link
                  to={""}
                  className="btn btn-primary w-48 text-white capitalize font-semibold rounded"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[30%] flex justify-center">
              <div className="card w-72 bg-base-100 shadow-xl">
                <figure className="rounded-xl overflow-hidden">
                  <img
                    src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_448x531/img/bootcamps/big-frame-7.jpg"
                    alt="Shoes"
                    className="w-full"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="flex justify-center items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
                <FaChalkboardTeacher size={20} className="text-slate-500" />
              </div>
              <div className="text-black text-lg font-semibold">
                Supportive Trainer
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
                <FaChalkboardTeacher size={20} className="text-slate-500" />
              </div>
              <div className="text-black text-lg font-semibold">
                Supportive Trainer
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
                <FaChalkboardTeacher size={20} className="text-slate-500" />
              </div>
              <div className="text-black text-lg font-semibold">
                Supportive Trainer
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
                <FaChalkboardTeacher size={20} className="text-slate-500" />
              </div>
              <div className="text-black text-lg font-semibold">
                Supportive Trainer
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-11 bg-slate-100">
        <div className="w-full max-w-[1080px] text-black flex flex-col gap-3">
          <div className="w-full flex flex-col justify-center items-center gap-11 py-11 px-7 lg:px-0">
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <div className="text-black text-2xl font-bold text-center">
                500+ lulusan bekerja di perusahaan ini
              </div>
              <div className="text-slate-500 text-xl font-semibold text-center">
                Fazztrack menjamin lulusan mendapat kesempatan membagun karir di
                perusahaan impian.
              </div>
            </div>
            <div className="w-full max-w-[1080px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-items-center xl:gap-4">
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-1.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-2.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-3.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-4.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-5.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-6.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-7.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-8.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-9.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-10.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-11.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-12.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-13.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-14.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-15.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-16.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-17.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-18.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-19.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-20.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-21.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-22.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_contain&s_87x49/img/company-list/company-23.png"
                  alt=""
                  className="w-24"
                />
              </div>
              <div className="w-28 h-20 flex justify-center items-cstart">
                <div className="text-3xl text-black font-bold">600+</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-11 py-11">
        <div className="w-full max-w-[1080px] text-black flex flex-col gap-3 px-7 md:px-0">
          <div className="w-full flex flex-col justify-center items-center gap-2 py-11">
            <div className="text-black text-2xl font-bold text-center">
              Pilihan Bootcamp Fazztrack
            </div>
            <div className="text-slate-500 text-xl font-semibold text-center">
              Bootcamp dilaksanakan berdasarkan kurikulum yang telah disusun
              untuk kamu siap bekerja.
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-5 ">
            <div className="card flex-1 bg-base-100">
              <figure className="rounded-2xl">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_423x240/img/bootcamps/fullstack-mobile.jpg"
                  alt="Shoes"
                  className="w-full"
                />
              </figure>
              <div className="pt-5 flex flex-col gap-3">
                <h2 className="card-title">Fullstack Mobile</h2>
                <div>
                  Mempelajari bagaimana membangun aplikasi mobile dengan
                  Javascript dari tahap perancangan selama 3 bulan pembelajaran
                  secara online.
                </div>
                <Link
                  to={""}
                  className="text-primary font-semibold flex items-center gap-2"
                >
                  Lihat Kurikulum <AiOutlineArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="card flex-1 bg-base-100">
              <figure className="rounded-2xl">
                <img
                  src="https://www.fazztrack.com/_ipx/f_webp&q_100&fit_cover&s_423x240/img/bootcamps/fullstack-mobile.jpg"
                  alt="Shoes"
                  className="w-full"
                />
              </figure>
              <div className="pt-5 flex flex-col gap-3">
                <h2 className="card-title">Fullstack Website dan Golang</h2>
                <div>
                  Bootcamp intensif selama 17 minggu (8 jam / hari) oleh trainer
                  supportif untuk mempersiapkan kamu berkarir sebagai Fullstack
                  Web Developer dan Backend Engineer.
                </div>
                <Link
                  to={""}
                  className="text-primary font-semibold flex items-center gap-2"
                >
                  Lihat Kurikulum <AiOutlineArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-11 md:py-16">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center gap-5 bg-slate-300 max-w-[1080px] p-14 md:rounded-3xl">
          <div className="max-w-[700px] flex flex-col gap-7">
            <div className="text-black text-3xl font-semibold text-center md:text-left">
              Tidak memiliki banyak waktu?
            </div>
            <div className="text-black text-2xl text-center md:text-left">
              Coba program Fazztrack Mini Bootcamp! Belajar dengan menyesuaikan
              waktumu dan bisa langsung disalurkan kerja.
            </div>
            <div className="w-full flex justify-center md:justify-start items-center">
              <Link
                to={""}
                className="btn btn-secondary w-48 text-white capitalize font-semibold rounded"
              >
                Lihat Mini Bootcamp
              </Link>
            </div>
          </div>
          <div>
            <img src={miniBootcampImg} alt="" />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-11 py-11 bg-secondary">
        <div className="w-full max-w-[1080px] text-black flex flex-col gap-3 pb-16">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 px-7 lg:px-0">
            <div className="bg-secondary w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
              <div className="text-white text-2xl font-semibold">
                Keunggulan Fazztrack
              </div>
              <div className="text-white text-base tracking-wide">
                Bootcamp Fazztrack akan membimbing kamu menjadi Software
                Engineer profesional sampai di salurkan kerja.
              </div>
            </div>
            <div className="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
              <div className="text-black text-2xl font-semibold flex justify-start items-center gap-3">
                <div className="w-20 h-16">
                  <img
                    src={bootcampBenefit}
                    alt=""
                    className="rounded-lg w-20 h-full"
                  />
                </div>
                <div>Dapat Kerja Lebih Cepat</div>
              </div>
              <div className="text-black text-base tracking-wide">
                Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
                disalurkan kerja dengan dibekali pelatihan hard skill dan soft
                skill serta konsultasi karir untuk mendukung kesuksesan karir.
              </div>
              <Link
                to={""}
                className="text-primary font-semibold flex items-center gap-2"
              >
                Pelajari Lebih Lanjut <AiOutlineArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
              <div className="text-black text-2xl font-semibold flex justify-start items-center gap-3">
                <div className="w-20 h-16">
                  <img
                    src={bootcampBenefit}
                    alt=""
                    className="rounded-lg w-20 h-full"
                  />
                </div>
                <div>Dapat Kerja Lebih Cepat</div>
              </div>
              <div className="text-black text-base tracking-wide">
                Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
                disalurkan kerja dengan dibekali pelatihan hard skill dan soft
                skill serta konsultasi karir untuk mendukung kesuksesan karir.
              </div>
              <Link
                to={""}
                className="text-primary font-semibold flex items-center gap-2"
              >
                Pelajari Lebih Lanjut <AiOutlineArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
              <div className="text-black text-2xl font-semibold flex justify-start items-center gap-3">
                <div className="w-20 h-16">
                  <img
                    src={bootcampBenefit}
                    alt=""
                    className="rounded-lg w-20 h-full"
                  />
                </div>
                <div>Dapat Kerja Lebih Cepat</div>
              </div>
              <div className="text-black text-base tracking-wide">
                Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
                disalurkan kerja dengan dibekali pelatihan hard skill dan soft
                skill serta konsultasi karir untuk mendukung kesuksesan karir.
              </div>
              <Link
                to={""}
                className="text-primary font-semibold flex items-center gap-2"
              >
                Pelajari Lebih Lanjut <AiOutlineArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
              <div className="text-black text-2xl font-semibold flex justify-start items-center gap-3">
                <div className="w-20 h-16">
                  <img
                    src={bootcampBenefit}
                    alt=""
                    className="rounded-lg w-20 h-full"
                  />
                </div>
                <div>Dapat Kerja Lebih Cepat</div>
              </div>
              <div className="text-black text-base tracking-wide">
                Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
                disalurkan kerja dengan dibekali pelatihan hard skill dan soft
                skill serta konsultasi karir untuk mendukung kesuksesan karir.
              </div>
              <Link
                to={""}
                className="text-primary font-semibold flex items-center gap-2"
              >
                Pelajari Lebih Lanjut <AiOutlineArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white w-full sm:w-[80%] md:w-[320px] md:h-[320px] rounded-xl p-5 flex flex-col justify-center gap-4">
              <div className="text-black text-2xl font-semibold flex justify-start items-center gap-3">
                <div className="w-20 h-16">
                  <img
                    src={bootcampBenefit}
                    alt=""
                    className="rounded-lg w-20 h-full"
                  />
                </div>
                <div>Dapat Kerja Lebih Cepat</div>
              </div>
              <div className="text-black text-base tracking-wide">
                Selain menjamin lulus bootcamp, Fazztrack menjamin lulusan
                disalurkan kerja dengan dibekali pelatihan hard skill dan soft
                skill serta konsultasi karir untuk mendukung kesuksesan karir.
              </div>
              <Link
                to={""}
                className="text-primary font-semibold flex items-center gap-2"
              >
                Pelajari Lebih Lanjut <AiOutlineArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-11 py-11 bg-primary/10">
        <div className="w-full max-w-[1080px] text-black flex flex-col gap-3 pb-16 px-4 md:px-0">
          <div className="w-full flex justify-between items-center my-9">
            <div className="flex flex-col gap-2">
              <div className="text-black text-2xl font-bold flex justify-start items-center gap-1">
                Alumni
                <span>
                  <AiFillHeart className="text-primary" />
                </span>
                Fazztrack
              </div>
              <div className="text-slate-500 text-xl font-semibold">
                Testimoni alumni Fazztrack tentang bootcamp dan penyaluran kerja
                yang sudah mereka ikuti.
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-between items-center gap-5 flex-wrap">
            <div className="bg-white w-[520px] rounded-xl p-5 flex flex-col gap-4">
              <div>
                Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan
                banyak manfaat. Dari skill teknikal dan juga soft skill, disana
                juga mendapatkan pengalaman yang sangat banyak, dari pengalaman
                project tim, hingga mengerjakan suatu project dengan jangka
                waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan
                ini mendapatkan relasi baru dan tentunya ilmu yang sangat
                bermanfaat.
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={"https://i.pravatar.cc/100"} alt="" />
                </div>
                <div>
                  <div className="text-black text-sm font-semibold">
                    Irfan Junaidi
                  </div>
                  <div className="text-black text-sm">
                    Software Engineer di PT. Anak Muda Digital
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-[520px] rounded-xl p-5 flex flex-col gap-4">
              <div>
                Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan
                banyak manfaat. Dari skill teknikal dan juga soft skill, disana
                juga mendapatkan pengalaman yang sangat banyak, dari pengalaman
                project tim, hingga mengerjakan suatu project dengan jangka
                waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan
                ini mendapatkan relasi baru dan tentunya ilmu yang sangat
                bermanfaat.
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={"https://i.pravatar.cc/100"} alt="" />
                </div>
                <div>
                  <div className="text-black text-sm font-semibold">
                    Irfan Junaidi
                  </div>
                  <div className="text-black text-sm">
                    Software Engineer di PT. Anak Muda Digital
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-[520px] rounded-xl p-5 flex flex-col gap-4">
              <div>
                Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan
                banyak manfaat. Dari skill teknikal dan juga soft skill, disana
                juga mendapatkan pengalaman yang sangat banyak, dari pengalaman
                project tim, hingga mengerjakan suatu project dengan jangka
                waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan
                ini mendapatkan relasi baru dan tentunya ilmu yang sangat
                bermanfaat.
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={"https://i.pravatar.cc/100"} alt="" />
                </div>
                <div>
                  <div className="text-black text-sm font-semibold">
                    Irfan Junaidi
                  </div>
                  <div className="text-black text-sm">
                    Software Engineer di PT. Anak Muda Digital
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white w-[520px] rounded-xl p-5 flex flex-col gap-4">
              <div>
                Selama pelatihan di bootcamp fazztrack ini, saya mendapatkan
                banyak manfaat. Dari skill teknikal dan juga soft skill, disana
                juga mendapatkan pengalaman yang sangat banyak, dari pengalaman
                project tim, hingga mengerjakan suatu project dengan jangka
                waktu yang tidak banyak tentunya. Selain itu, didalam pelatihan
                ini mendapatkan relasi baru dan tentunya ilmu yang sangat
                bermanfaat.
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={"https://i.pravatar.cc/100"} alt="" />
                </div>
                <div>
                  <div className="text-black text-sm font-semibold">
                    Irfan Junaidi
                  </div>
                  <div className="text-black text-sm">
                    Software Engineer di PT. Anak Muda Digital
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-11 py-7">
        <div className="w-full max-w-[1080px] text-black flex flex-col gap-3">
          <div className="w-full flex justify-between items-center my-9">
            <div className="px-3 md:px-0 flex flex-col gap-2">
              <div className="text-black text-2xl font-bold">
                Cerita Alumni Bootcamp
              </div>
              <div className=" text-slate-500 text-xl md:font-semibold">
                Cerita perjalanan heroik alumni bootcamp
              </div>
            </div>
            <div className="hidden lg:block ">
              <Link
                to={""}
                className="btn btn-neutral rounded bg-slate-50 border-slate-200 hover:bg-slate-200 hover:border-slate-200 capitalize text-black font-semibold text-lg"
              >
                Lihat cerita lainnya
              </Link>
            </div>
          </div>
          <div className="w-full overflow-scroll py-7">
            <div className="w-[1080px] flex justify-between items-center gap-5">
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
          <div className="md:hidden w-full flex justify-center">
            <Link
              to={""}
              className="btn btn-neutral rounded bg-slate-50 border-slate-200 hover:bg-slate-200 hover:border-slate-200 capitalize text-black font-semibold text-lg"
            >
              Lihat cerita lainnya
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-11 py-11">
        <div className="w-full max-w-[1080px] text-black flex flex-col gap-3 px-3 md:px-0">
          <div className="w-full flex flex-col justify-center items-center gap-5 py-3">
            <div className="text-black text-xl md:text-2xl capitalize font-bold text-center">
              Pertanyaan yang sering ditanyakan
            </div>
            <div className="text-lg md:text-xl text-slate-500 text-center">
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
        <div className="text-2xl md:text-3xl font-semibold text-black text-center">
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
