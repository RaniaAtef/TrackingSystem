import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ShipmentAddress from "./components/ShipmentAddress";
import ShipmentDelivery from "./components/ShipmentDelivery";
import ShipmentDetails from "./components/ShipmentDetails";
import TrackItem from "./components/TrackItem";
import { ItemsProvider } from "./context/ItemContext";
function App() {
  return (
    <ItemsProvider>
      <div className="container px-2 lg:px-16 mx-auto ">
        <Navbar />
        <div className="flex flex-col items-center my-9 gap-10">
          <Search />
          <TrackItem />
        </div>
        <ShipmentDetails />
      </div>
    </ItemsProvider>
  );
}

export default App;
