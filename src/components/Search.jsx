import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    setSearchParams({ item: e.target.value });
  }
  return (
    <div className="w-auto">
      <h2 className="font-bold text-center text-4xl leading-10">
        {" "}
        {t("Track Your Order")}
      </h2>
      <p className="my-5">
        {t("All order updates will be available through this link.")}
      </p>
      <label
        className="input input-bordered flex items-center  gap-2 pr-0"
        dir="ltr"
      >
        <input
          value={searchParams.get("item")}
          type="text"
          className="grow"
          placeholder="Search"
          onChange={handleChange}
        />
        <div className="w-12 h-12 opacity-70 bg-[#e30613] flex items-center justify-center rounded-r ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="white"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </label>
    </div>
  );
};
export default Search;
