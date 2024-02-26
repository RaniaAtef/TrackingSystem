import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ItemsContext from "../context/ItemContext";
import { useTranslation } from "react-i18next";
import ShipmentAddress from "./ShipmentAddress";
import ShipmentDelivery from "./ShipmentDelivery";
import TrackItem from "./TrackItem";

const ShipmentDetails = () => {
  const [searchParams] = useSearchParams();
  const { ShipmentDetails, setShipmentDetails } = useContext(ItemsContext);
  const { t } = useTranslation();
  const [itemNum, setItemNum] = useState(null);
  const timerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (itemNum) {
      setLoading(true);
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setItemNum(searchParams.get("item"));
      setLoading(false);
    }, 1000);
  }, [searchParams.get("item")]);

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
    return <h3 className="flex justify-center">{t("No Items")}</h3>;
  }
  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <TrackItem />
          <div className="lg:flex my-10 gap-5">
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
                      <td>
                        {new Date(item.timestamp)?.toISOString().slice(0, 10)}
                      </td>
                      <td>
                        {new Date(item.timestamp)?.toISOString().slice(11, 16)}
                      </td>
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
        </>
      )}
    </>
  );
};

export default ShipmentDetails;
