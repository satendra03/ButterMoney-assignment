const Footer = () => {
  return (
    <footer className="px-5 pb-6 md:px-20 lg:px-40">
      <div className="flex flex-col gap-2 justify-center items-center md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium text-foreground">ButterMoney</p>

        <div className="flex items-center gap-5 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground transition">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition">
            Contact
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ButterMoney. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
