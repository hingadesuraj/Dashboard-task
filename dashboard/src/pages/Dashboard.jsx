import React, { useState, useEffect } from "react";
import UserRegistration from "../components/UserRegistration";
import News from "../components/News";

const Dashboard = () => {
  const [allNews, setAllNews] = useState(1000);
  const [activeUser, setActiveUser] = useState(2534);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the counter every 2 seconds
      setAllNews((prevCounter) => prevCounter + 1);
      setActiveUser((prevCounter) => prevCounter + 1);
    }, 5000);

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <UserRegistration />
      <div className=" grid grid-cols-5 max-h-fit">
        {/* left side */}
        <div className="col-span-2 border-r-2 p-1 ">
          <div className="  h-[10rem] w-[30rem]">
            <h2 className="font-semibold text-center shadow-md">
              Total Number Of News Feed
            </h2>
            <p className="text-8xl font-bold text-center pt-4 text-blue-400">
              {allNews}
            </p>
          </div>
          <div className=" border-t-2 h-[11rem] w-[30rem]">
            <h2 className="font-semibold text-center shadow-md">
              Total Number Of Active User
            </h2>

            <p className="text-8xl font-bold text-center pt-8 text-blue-400">
              {activeUser}
            </p>
          </div>
        </div>

        {/* right side */}
        <div>
          <h2 className="font-bold underline pl-2 ">Top Performore news</h2>
          <News title={"Top IIT Students Start There own bussiness"} article={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus vel sint totam minus! Natus, vel!"} views={125} like={45} share={2} />
          <News title={"Top IIT Students Start There own bussiness"} article={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus vel sint totam minus! Natus, vel!"} views={125} like={45} share={2} />
          <News title={"Top IIT Students Start There own bussiness"} article={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus vel sint totam minus! Natus, vel!"} views={125} like={45} share={2} />
           
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
