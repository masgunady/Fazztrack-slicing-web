import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/fazztrack.svg";

const Register = () => {
  return (
    <div className="w-full flex justify-center items-center p-5 my-11">
      <div className="lg:w-[700px] border rounded-sm shadow-sm p-5 py-11 lg:px-11 flex flex-col gap-3">
        <div className="w-full flex justify-center items-center">
          <img src={imgLogo} alt="logo" className="w-32 pb-3" />
        </div>
        <div className="w-full text-black text-2xl font-semibold text-center tracking-wide">
          Daftar & Mulai Belajar
        </div>
        <div className="text-black text-base text-center tracking-tight">
          Sudah punya akun Fazztrack?{" "}
          <Link to={"/auth/login"} className="text-primary font-bold">
            Masuk Disini
          </Link>
        </div>

        <form className="w-full flex flex-col gap-6 text-black">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="input-name" className="text-black">
              <span className="text-red-600">*</span> Nama Lengkap
            </label>
            <input
              type="text"
              id="input-name"
              className="input input-bordered input-accent border-slate-300"
              placeholder="Masukan nama lengkap..."
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="input-email" className="text-black">
              <span className="text-red-600">*</span> Email
            </label>
            <input
              type="text"
              id="input-email"
              className="input input-bordered input-accent border-slate-300"
              placeholder="Masukan nama e-mail..."
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="input-phone" className="text-black">
              <span className="text-red-600">*</span> No. Handphone
            </label>
            <input
              type="text"
              id="input-phone"
              className="input input-bordered input-accent border-slate-300"
              placeholder="Masukan no. handphone..."
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="input-password" className="text-black">
              <span className="text-red-600">*</span> Kata Sandi
            </label>
            <input
              id="input-password"
              type="password"
              className="input input-bordered input-accent border-slate-300"
              placeholder="Masukan kata sandi..."
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="input-confirm-password" className="text-black">
              <span className="text-red-600">*</span> Konfirmasi Kata Sandi
            </label>
            <input
              id="input-confirm-password"
              type="password"
              className="input input-bordered input-accent border-slate-300"
              placeholder="Masukan ulang kata sandi..."
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex justify-start items-center gap-2">
              <input id="ingat-saya" type="checkbox" className="w-4 h-4" />
              <label htmlFor="ingat-saya" className="text-black">
                Saya menyetujui{" "}
                <Link to={""} className="text-secondary font-bold">
                  Syarat dan Ketentuan
                </Link>
              </label>
            </div>
          </div>

          <div className="w-full">
            <button className="btn btn-primary text-white text-lg font-semibold capitalize w-full">
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
