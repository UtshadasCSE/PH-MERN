const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#1A1919] text-white">
        <aside>
          <div className="flex justify-center items-center">
            <img
              src="../../../public/assets/logo/chlogo.png"
              className="w-36"
              alt=""
            />
            <h2 className="text-4xl">CareerHub</h2>
          </div>

          <p className="w-2/3 font-bold ">
            <br />
            <p className="text-[#FFFFFFB2]">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
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
