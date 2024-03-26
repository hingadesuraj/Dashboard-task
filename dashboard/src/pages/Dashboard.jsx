import React from "react";
import Navigation from "../components/Navigation";
import UserRegistration from "../components/UserRegistration";

const Dashboard = () => {
  return (
    <div>
      <UserRegistration />
      <div className=" grid grid-cols-5 max-h-fit">
        {/* left side */}
        <div className="col-span-2 border-r-2">
          <div className="border-2 h-[10rem] w-[30rem]">
            <h2>Total Number Of News Feed</h2>
          </div>
          <div className="border-2 h-[11rem] w-[30rem]">
            <h2>Total Number Of Active User</h2>
          </div>
        </div>

        {/* right side */}
        <div>
          Top Performore news
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
