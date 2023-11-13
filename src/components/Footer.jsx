import imgLogo from "../assets/images/fazztrack.svg";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-[1080px] flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-start gap-11 py-11 border-b-2">
          <div className="w-96 flex flex-col gap-7">
            <div>
              <img src={imgLogo} className="w-36" alt="" />
            </div>
            <div className="text-black">
              Fazztrack adalah program pelatihan yang berkomitmen untuk mencetak
              developer yang profesional dan memberikan kesempatan untuk
              berkarir di perusahaan ternama.
            </div>
          </div>
          <div className="flex-1 flex justify-between items-start gap-4">
            <div className="w-40 text-black flex flex-col justify-start items-start gap-2">
              <div className="font-semibold text-xl mb-3">Kelas</div>
              <div>Flullstack Mobile</div>
              <div>Fullstack Website dan Golang</div>
              <div>Mini Bootcamp</div>
              <div>Online Course</div>
            </div>
            <div className="w-40 text-black flex flex-col justify-start items-start gap-2">
              <div className="font-semibold text-xl mb-3">Dukungan</div>
              <div>Cicilan Setelah Kerja (ISA)</div>
              <div>FAQ</div>
              <div>Corporate Training</div>
              <div>Hire Our Graduates</div>
            </div>
            <div className="w-40 text-black flex flex-col justify-start items-start gap-2">
              <div className="font-semibold text-xl mb-3">Tentang</div>
              <div>Cerita Alumni</div>
              <div>Sekilas Fazztrack</div>
            </div>
            <div className="w-40 text-black flex flex-col justify-start items-start gap-2">
              <div className="font-semibold text-xl mb-3">Social Media</div>
              <div>Instagram</div>
              <div>Facebook</div>
              <div>Youtube</div>
            </div>
          </div>
        </div>
        <div className="py-8 w-full flex justify-between items-center">
          <div className="text-black">
            <span className="font-semibold">© 2020 - 2023 Fazztrack.</span> All
            Rights Reserved
          </div>
          <div className="flex justify-end items-center text-black gap-5">
            <div>+6281132010888</div>
            <div>hello@fazztrack.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
