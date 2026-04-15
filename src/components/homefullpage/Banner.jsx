import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" min-h-[40vh] space-y-3 ">
      <h2 className="font-bold text-4xl pt-[50px] text-center">
        Friends to keep close in your life
      </h2>
      <p className="text-center">
        Your personal shelf of meaningful connections. Browse, tend, and nurture <br />
        the relationships that matter most.
      </p>
      <div className="flex justify-center y-3">
        <button className="btn btn-active btn-primary "> <FaPlus /> Add a Friend</button>
      </div>
    </div>
  );
};

export default Banner;
