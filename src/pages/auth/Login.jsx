import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/fazztrack.svg";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="w-full flex justify-center items-center p-5 my-11">
      <div className="lg:w-[700px] border rounded-sm shadow-sm p-5 py-11 lg:px-11 flex flex-col gap-3">
        <div className="w-full flex justify-center items-center">
          <img src={imgLogo} alt="logo" className="w-32 pb-3" />
        </div>
        <div className="w-full text-black text-2xl font-semibold text-center tracking-wide">
          Selamat Datang
        </div>
        <div className="text-black text-base text-center tracking-tight">
          Belum punya akun Fazztrack?{" "}
          <Link to={"/auth/register"} className="text-primary font-bold">
            Daftar Disini
          </Link>
        </div>

        <form className="w-full flex flex-col gap-6 text-black">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="input-email" className="text-black">
              <span className="text-red-600">*</span> Email
            </label>
            <input
              type="text"
              id="input-email"
              className="input input-bordered input-accent border-slate-300"
              placeholder="Masukan email anda"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="input-password" className="text-black">
              <span className="text-red-600">*</span> Password
            </label>
            <input
              id="input-password"
              type="password"
              className="input input-bordered input-accent border-slate-300"
              placeholder="Masukan kata sandi"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex justify-start items-center gap-2">
              <input id="ingat-saya" type="checkbox" className="w-4 h-4" />
              <label htmlFor="ingat-saya" className="text-black">
                Ingat Akun Saya
              </label>
            </div>
            <Link to={""} className="text-secondary text-base font-bold">
              Lupa Password?
            </Link>
          </div>

          <div className="w-full">
            <button className="btn btn-primary text-white text-lg font-semibold capitalize w-full">
              Masuk
            </button>
          </div>
          <div className="w-full text-center font-base text-black">
            Atau masuk menggunakan
          </div>
          <div className="w-full">
            <button className="btn btn-neutral hover:bg-slate-200 hover:border-slate-300 border-slate-200 bg-white w-full text-black capitalize text-lg font-semibold">
              <FcGoogle size={22} /> Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
