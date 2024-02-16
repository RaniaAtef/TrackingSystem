import { useTranslation } from "react-i18next";

const ShipmentAddress = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="ml-8">
        <h3 className="my-4 font-bold">{t("Delivery Address")}</h3>
        <div className="card card-side bg-base-100 shadow-xl w-96">
          <div className="card-body">
            <h5>{t("Not Determined")}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentAddress;
