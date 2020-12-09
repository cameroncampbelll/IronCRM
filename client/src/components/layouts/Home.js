import react from "react";
import GuestForm from "../layouts/GuestForm";
import GuestCounter from "../layouts/GuestCounter";

const Home = () => {
  return (
    <div className-="app-container">
      <div className="main">
        <GuestForm />
        <GuestCounter />
      </div>
    </div>
  );
};

export default Home;
