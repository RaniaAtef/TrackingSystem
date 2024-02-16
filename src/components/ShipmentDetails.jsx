import { useContext, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ItemsContext from "../context/ItemContext";
import { useTranslation } from "react-i18next";
import ShipmentAddress from "./ShipmentAddress";
import ShipmentDelivery from "./ShipmentDelivery";

const ShipmentDetails = () => {
  const [searchParams] = useSearchParams();
  const { ShipmentDetails, setShipmentDetails } = useContext(ItemsContext);
  const itemNum = searchParams.get("item");
  const { t } = useTranslation();

  useEffect(() => {
    async function getData() {
      if (itemNum) {
        try {
          const { data } = await axios.get(
            `https://tracking.bosta.co/shipments/track/${itemNum}`
          );
          setShipmentDetails(data);
        } catch (err) {
          setShipmentDetails({});
        }
      } else {
        setShipmentDetails({});
      }
    }
    getData();
  }, [itemNum]);
  if (!ShipmentDetails?.TrackingNumber) {
    return null;
  }
  return (
    <div className="lg:flex mb-10 gap-5">
      <div className="overflow-x-auto flex-1 ">
        <h3 className="my-4 font-bold">{t("Shipment Details")}</h3>
        <table className="table table-auto  table-xs  rounded-md border border-gray-300 mb-10 px-40 border-spacing-2">
          <thead className="bg-slate-100 ">
            <tr className="p-4">
              <th></th>
              <th className="p-4">{t("Branch")}</th>
              <th>{t("Date")}</th>
              <th>{t("Time")}</th>
              <th>{t("Details")}</th>
            </tr>
          </thead>
          <tbody>
            {ShipmentDetails.TransitEvents?.map((item) => (
              <tr>
                <td></td>
                <td className="p-5">{item.hub ? t(item.hub) : "-"}</td>
                <td>{new Date(item.timestamp)?.toISOString().slice(0, 10)}</td>
                <td>{new Date(item.timestamp)?.toISOString().slice(11, 16)}</td>
                <td>{t(item.state)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <ShipmentAddress />
        <ShipmentDelivery />
      </div>
    </div>
  );
};

export default ShipmentDetails;
