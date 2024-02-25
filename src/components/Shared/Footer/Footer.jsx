const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <section>
        <footer className="footer footer-center p-4 bg-[#92e3a9] text-[#497255] font-medium mt-24">
          <aside>
            <p>
              Copyright © {year} - All right reserved by Quazi Samiha Tasnim
            </p>
          </aside>
        </footer>
      </section>
    </>
  );
};

export default Footer;
