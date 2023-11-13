import { Link } from "react-router-dom";
import imgLogo from "../assets/images/fazztrack.svg";

const Header = () => {
  return (
    <>
      <nav className="w-full flex flex-col justify-center items-center shadow-md">
        <div className="w-full max-w-[1280px] flex justify-between items-center py-4">
          <div className="flex justify-start items-center gap-16">
            <img src={imgLogo} alt="" className="w-32" />
            <div>
              <ul className="menu lg:menu-horizontal rounded-box text-black">
                <li>
                  <details>
                    <summary className="font-bold">Kelas</summary>
                    <ul className="w-72">
                      <li>
                        <p>BOOTCAMP</p>
                      </li>
                      <li>
                        <a>Fullstack Mobile</a>
                      </li>
                      <li>
                        <a>Fullstack Web dan Golang</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="font-bold">Dukungan</summary>
                    <ul className="w-72">
                      <li>
                        <p>BOOTCAMP</p>
                      </li>
                      <li>
                        <a>Fullstack Mobile</a>
                      </li>
                      <li>
                        <a>Fullstack Web dan Golang</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="font-bold">Tentang</summary>
                    <ul className="w-72">
                      <li>
                        <p>BOOTCAMP</p>
                      </li>
                      <li>
                        <a>Fullstack Mobile</a>
                      </li>
                      <li>
                        <a>Fullstack Web dan Golang</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="font-bold">Corporate</summary>
                    <ul className="w-72">
                      <li>
                        <p>BOOTCAMP</p>
                      </li>
                      <li>
                        <a>Fullstack Mobile</a>
                      </li>
                      <li>
                        <a>Fullstack Web dan Golang</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <Link
              to={"/auth/login"}
              className="btn btn-neutral w-20 bg-slate-100 hover:bg-slate-200 hover:border-secondary capitalize text-secondary font-bold border border-secondary"
            >
              Masuk
            </Link>
            <Link
              to={"/auth/register"}
              className="btn btn-secondary w-20 capitalize text-white font-bold border border-secondary"
            >
              Daftar
            </Link>
          </div>
        </div>
      </nav>
      <div className="w-full flex justify-center items-center py-3 bg-primary/30">
        <div className="text-black">
          Belum siap ikut test?{" "}
          <Link to={""} className="text-primary font-bold underline">
            Ikut Kelas Persiapan Bootcamp
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
