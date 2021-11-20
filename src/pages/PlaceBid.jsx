import Navbar from "../layout/Navbar";
import PlaceBids from "../layout/PlaceBids";
import OpenBids from "../layout/OpenBids";

const PlaceBid = () => {
  const walletData = {
    address: "0x71dwd1XXXXXXXXXXXXXXXXcTwU",
    balance: 0.4,
    state: "green",
  };
  return (
    <>
      <Navbar walletData={walletData} />
      <div className="container">
        <PlaceBids />
        <OpenBids />
      </div>
    </>
  );
};

export default PlaceBid;
