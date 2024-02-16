import React from "react";
import { useTranslation } from "react-i18next";

const ShipmentDelivery = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="ml-8">
      <div className="card card-side bg-base-100 shadow-xl w-96 mt-5">
        <figure className="w-96 p-5">
          <img src="../../public/problem.png" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {t("Do you have a problem with your shipment?!")}
          </h2>
          <div className="card-actions justify-start">
            <button className="btn btn-error bg-[#e30613] text-white w-56">
              {t("Report A Problem")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDelivery;
