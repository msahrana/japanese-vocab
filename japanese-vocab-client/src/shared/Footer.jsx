import Logo from '/logo.png'

const Footer = () => {
  return (
    <footer className="footer bg-[#bcac92] text-base-content p-10">
      <aside>
        <img className='size-24' src={Logo} alt="" />
        <p className='font-semibold'>
          Bunpo Master 
          <br />
          Japanese Vocabulary Learning Application
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
    </footer>
  );
};

export default Footer;
