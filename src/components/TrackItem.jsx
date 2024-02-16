import React, { useContext, useEffect, useState } from "react";
import ItemsContext from "../context/ItemContext";
import { useTranslation } from "react-i18next";

const TrackItem = () => {
  const { t } = useTranslation();

  const { ShipmentDetails } = useContext(ItemsContext);
  const status = ShipmentDetails?.CurrentStatus?.state || "";
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (status === "TICKET_CREATED") {
      setStage(1);
    } else if (status === "PACKAGE_RECEIVED" || "DELIVERED_TO_SENDER") {
      setStage(2);
    } else if (status === "OUT_FOR_DELIVERY") {
      setStage(3);
    } else if (status === "DELIVERED") {
      setStage(4);
    } else {
      setStage(0);
    }
  }, [status]);

  if (!ShipmentDetails?.TrackingNumber) {
    return null;
  }
  return (
    <div className="border p-9 sm:p-9 w-full">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p className="text-gray-500">{t("Tracking number")}</p>
          <p className="font-bold mt-3">{ShipmentDetails?.TrackingNumber}</p>
          <h5
            className={
              status === "CANCELLED"
                ? "text-red-500"
                : status === "DELIVERED"
                ? "text-green-600"
                : "text-warning"
            }
          >
            {t(status)}
          </h5>
        </div>
        <div>
          <p className="text-gray-500">{t("Last update")}</p>
          <p className="font-bold mt-3">
            {new Date(ShipmentDetails?.CurrentStatus?.timestamp)
              ?.toISOString()
              .slice(0, 10)}
          </p>
        </div>
        <div>
          <p className="text-gray-500">{t("Seller name")}</p>
          <p className="font-bold mt-3">Bosta</p>
        </div>
        <div>
          <p className="text-gray-500">{t("Promised date")}</p>
          <p className="font-bold mt-3">
            {new Date(ShipmentDetails?.PromisedDate)
              ?.toISOString()
              .slice(0, 10)}
          </p>
        </div>
      </div>
      <hr className="my-5" />
      <ul className="steps steps-vertical lg:steps-horizontal w-full">
        <li
          className={`step  ${
            stage >= 1 && stage < 4
              ? "step-warning"
              : stage >= 4
              ? "step-success"
              : status === "CANCELLED"
              ? "step-error"
              : ""
          }`}
          data-content="✓"
        >
          {t("Your shipment is created")}
        </li>
        <li
          className={`step ${
            stage >= 2 && stage < 4
              ? "step-warning"
              : stage >= 4
              ? "step-success"
              : status === "CANCELLED"
              ? "step-error"
              : ""
          }`}
          data-content="✓"
        >
          {t("Shipment is received from seller")}
        </li>
        <li
          className={`step ${
            stage >= 3 && stage < 4
              ? "step-warning"
              : stage >= 4
              ? "step-success"
              : status === "CANCELLED"
              ? "step-error"
              : ""
          }`}
          data-content="✓"
        >
          {t("Shipment is out for delivery")}
        </li>
        <li
          className={`step ${stage >= 4 ? "step-success" : ""}`}
          data-content="✓"
        >
          {t("Receive Product")}
        </li>
      </ul>
    </div>
  );
};

export default TrackItem;
