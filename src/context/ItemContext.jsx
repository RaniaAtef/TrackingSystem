import { createContext, useState } from "react";

const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const [ShipmentDetails, setShipmentDetails] = useState({});
  const valueShare = {
    ShipmentDetails,
    setShipmentDetails,
  };

  return (
    <ItemsContext.Provider value={valueShare}>{children}</ItemsContext.Provider>
  );
}

export default ItemsContext;
