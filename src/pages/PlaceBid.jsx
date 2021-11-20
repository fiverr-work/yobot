import Navbar from "../layout/Navbar";
import PlaceBids from "../layout/PlaceBids";
import OpenBids from "../layout/OpenBids";

const PlaceBid = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <PlaceBids />
        <OpenBids />
      </div>
    </>
  );
};

export default PlaceBid;
