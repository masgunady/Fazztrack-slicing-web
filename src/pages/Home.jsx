import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
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
