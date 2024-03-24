const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#1A1919] text-white">
        <aside>
          <div className="flex justify-center items-center gap-2">
            <img
              src="../../../public/assets/logo/chlogo.png"
              className="w-20"
              alt=""
            />
            <h2 className="text-4xl">CareerHub</h2>
          </div>

          <p className="w-2/3 max-sm:w-11/12 font-bold ">
            <br />
            <div className="divider divider-primary w-3/4 max-sm:w-9/12"></div>
            <p className="text-[#FFFFFFB2]">
              Promote networking events, job fairs, and industry conferences
              where users can connect with employers, recruiters, and
              professionals in their field.
            </p>
            <div className="pt-5">
              <img src="../../../public/assets/icons/social.png" alt="" />
            </div>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
