import logo from "../../../assets/logo.png";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "Home" },
  { id: 2, name: "About", url: "About" },
  { id: 7, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Md Towhidul Bari Safi
          </p>
        </a>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} Md Towhidul Bari Safi.
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Developed with ❤️ by{" "}
        <a
          href="mailto:towhidulsafi2005@gmail.com"
          className="underline font-bold"
          target="_blank"
        >
          Md Towhidul Bari Safi
        </a>
      </p>
    </div>
  );
};

export default Footer;
