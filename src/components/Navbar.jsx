import { useTranslation } from "react-i18next";

const Navbar = () => {
  const html = document.getElementsByTagName("html")[0];
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
    html.setAttribute("lang", i18n.language === "ar" ? "en" : "ar");
    html.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
  };
  const items = [t("Main"), t("Pricing"), t("Contact Us")];
  return (
    <div className="navbar bg-base-100 flex justify-between ">
      <div className="navbar-start">
        {i18n.language === "ar" ? (
          <img
            src="../../public/tracking-icon-for-your-website-design-logo-app-ui-free-vector.jpg"
            width="70px"
            height="10px"
          />
        ) : (
          <img
            src="../../public/tracking-icon-for-your-website-design-logo-app-ui-free-vector.jpg"
            width="70px"
            height="10px"
          />
        )}
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="flex gap-4 ">
          {items.map((item) => {
            return (
              <li key={item}>
                <a className="font-bold text-[#374452] hover:text-[#e30613]  transition-all  duration-400">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end  gap-4 flex justify-end">
        <a className=" font-bold text-[16px]  text-[#e30613] hover:text-[#e30613] ">
          {t("Track Shipment")}
        </a>
        <button className="lg:block hidden  font-bold px-10 py-3  border-red-600  transition-all  duration-400 hover:text-[#e30613]  ">
          {t("Sign Up")}
        </button>

        <button
          onClick={handleChangeLanguage}
          className="transition-all  duration-400 hover:text-[#e30613] font-bold"
        >
          {i18n.language === "ar" ? "Eng" : "عربي"}
        </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[90vw] h-[40vh]"
          >
            {items.map((item) => {
              return (
                <>
                  <li key={item} className="py-3">
                    <a className="font-bold text-[#374452] hover:text-[#e30613] hover:underline transition-all  duration-400">
                      {item}
                    </a>
                  </li>
                  <hr />
                </>
              );
            })}

            <li className="py-3">
              <a>العربية</a>
            </li>
            <hr />

            <button className=" border-[1px] px-8 py-2 mt-2 border-red-600 rounded-3xl text-[#e30613] hover:underline hover:text-white hover:bg-red-800 transition-all  duration-400">
              Sign Up
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
