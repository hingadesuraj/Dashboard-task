import React from "react";
import Links from "./Links";

const Navigation = () => {
  return (
    <div className="w-[15%]">
      <div className=" list-none font-semibold text-xl">
        <Links path={""} title={"Dashbaord"} />
        <Links path={"create"} title={"Create News"} />
        <Links path={"allnews"} title={"All News"} />
        <Links path={"report"} title={"Performance Report"} />
      </div>
    </div>
  );
};

export default Navigation;
