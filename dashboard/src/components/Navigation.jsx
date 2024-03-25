import React from "react";
import Links from "./Links";

const Navigation = () => {
  return (
    <div className="w-[95%]"> 
      <div className=" list-none font-semibold text-xl">
         <li className="p-4 justify-start text-blue-500 font-extrabold text-3xl" >News2App</li>
        <Links path={""} title={"Home"} />
        <Links path={"create"} title={"Create News"} />
        <Links path={"allnews"} title={"All News"} />
        <Links path={"report"} title={"Performance Report"} />
      </div>
    </div>
  );
};

export default Navigation;
